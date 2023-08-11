import { PropTypes } from 'prop-types';
import IconAhorro from '../assets/img/icono_ahorro.svg';
import IconCasa from '../assets/img/icono_casa.svg';
import IconComida from '../assets/img/icono_comida.svg';
import IconGastos from '../assets/img/icono_gastos.svg';
import IconOcio from '../assets/img/icono_ocio.svg';
import IconSalud from '../assets/img/icono_salud.svg';
import IconSuscripciones from '../assets/img/icono_suscripciones.svg';

const icons = {
    ahorro: IconAhorro,
    comida: IconComida,
    casa: IconCasa,
    varios: IconGastos,
    ocio: IconOcio,
    salud: IconSalud,
    suscripciones: IconSuscripciones,
};

export const Expense = ({ expense }) => {
    const formatDate = (date) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        };

        return new Date(date).toLocaleDateString('es-ES', options);
    };

    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img src={icons[expense.category]} alt="icon" />
                <div className="descripcion-gasto">
                    <p className="categoria">{expense.category}</p>
                    <p className="gasto">{expense.name}</p>
                    <p className="fecha-gasto">
                        Agregado el: {''}
                        <span>{formatDate(expense.date)}</span>
                    </p>
                </div>
            </div>
            <p className="cantidad-gasto">$ {expense.amount}</p>
        </div>
    );
};

Expense.propTypes = {
    expense: PropTypes.object.isRequired,
};
