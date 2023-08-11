import { useState } from 'react';
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

    const handleNewExpense = (expense) => {
        setShowExpenseModal(false);
        setAnimateModal(false);

        if (expense) {
            setExpenses([...expenses, expense]);
        }
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
                        <ExpenseList expenses={expenses} />
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
                    handleNewExpense={handleNewExpense}
                    animateModal={animateModal}
                />
            )}
        </div>
    );
}

export default App;
