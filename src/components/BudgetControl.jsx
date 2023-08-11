import { PropTypes } from 'prop-types';
export const BudgetControl = ({ budget }) => {
    const formatter = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    };

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
                    <span>Disponible:</span> {formatter(0)}
                </p>

                <p>
                    <span>Gastado:</span> {formatter(0)}
                </p>
            </div>
        </div>
    );
};

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
};
