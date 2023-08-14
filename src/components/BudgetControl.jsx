import { PropTypes } from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const BudgetControl = ({ budget, expenses }) => {
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    const percentage = useMemo(() => {
        return Math.round((spent / budget) * 100);
    }, [budget, spent]);

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
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                />
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
