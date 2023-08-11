import { PropTypes } from 'prop-types';
import { Expense } from './Expense';

export const ExpenseList = ({ expenses }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>
                {expenses.length ? 'Gastos' : 'Aun no hay gastos registrados'}
            </h2>

            {expenses.map((expense) => (
                <Expense key={expense.id} expense={expense} />
            ))}
        </div>
    );
};

ExpenseList.propTypes = {
    expenses: PropTypes.array.isRequired,
};
