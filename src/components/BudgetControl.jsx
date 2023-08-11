import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';

export const BudgetControl = ({ budget, expenses }) => {
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    const formatter = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    };

    useEffect(() => {
        const total = expenses.reduce((value, acc) => value + acc.amount, 0);
        setSpent(total);
        setAvailable(budget - total);
    }, [expenses, budget]);

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div className="">
                <p>grafica</p>
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto:</span> {formatter(budget)}
                </p>

                <p>
                    <span>Disponible:</span> {formatter(available)}
                </p>

                <p>
                    <span>Gastado:</span> {formatter(spent)}
                </p>
            </div>
        </div>
    );
};

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    expenses: PropTypes.array.isRequired,
};
