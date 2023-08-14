import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import IconNewExpense from './assets/img/nuevo-gasto.svg';
import { ExpenseModal } from './components/ExpenseModal';
import { ExpenseList } from './components/ExpenseList';

function App() {
    const [budget, setBudget] = useState(0);
    const [isValidBudget, setIsValidBudget] = useState(false);
    const [showExpenseModal, setShowExpenseModal] = useState(false);
    const [animateModal, setAnimateModal] = useState(false);
    const [expenses, setExpenses] = useState([]);
    const [expenseEdit, setExpenseEdit] = useState({});
    const [expenseDelete, setExpenseDelete] = useState({});

    useEffect(() => {
        if (Object.keys(expenseEdit).length > 0) {
            showModal();
        }
    }, [expenseEdit]);

    useEffect(() => {
        if (Object.keys(expenseDelete).length > 0) {
            setExpenses((prev) =>
                prev.filter((e) => e.id !== expenseDelete.id)
            );
        }
    }, [expenseDelete]);

    const handleNewExpense = (expense) => {
        setShowExpenseModal(false);
        setAnimateModal(false);

        if (expense) {
            setExpenses((prev) => {
                if (prev.some((e) => e.id === expense.id)) {
                    return prev.map((e) => (e.id === expense.id ? expense : e));
                }

                return [...prev, expense];
            });
        }

        setExpenseEdit({});
    };

    const showModal = () => {
        setShowExpenseModal(true);

        setTimeout(() => {
            setAnimateModal(true);
        }, 300);
    };

    return (
        <div className={showExpenseModal ? 'fijar' : ''}>
            <Header
                expenses={expenses}
                budget={budget}
                setBudget={setBudget}
                isValidBudget={isValidBudget}
                setIsValidBudget={setIsValidBudget}
            />

            {isValidBudget && (
                <>
                    <main>
                        <ExpenseList
                            expenses={expenses}
                            setExpense={setExpenseEdit}
                            setExpenseDelete={setExpenseDelete}
                        />
                    </main>

                    <div className="nuevo-gasto">
                        <img
                            src={IconNewExpense}
                            alt="icon"
                            onClick={showModal}
                        />
                    </div>
                </>
            )}

            {showExpenseModal && (
                <ExpenseModal
                    expense={expenseEdit}
                    handleNewExpense={handleNewExpense}
                    animateModal={animateModal}
                />
            )}
        </div>
    );
}

export default App;
