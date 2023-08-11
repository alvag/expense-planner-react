import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Message } from './Message';

export const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (budget < 0) {
            setMessage('El presupuesto no puede ser negativo');
            return;
        }

        setMessage('');
        setIsValidBudget(true);
    };

    const handleChange = (e) => {
        if (!isNaN(e.target.value)) {
            setBudget(Number(e.target.value));
        }
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="amount">Definir Presupuesto</label>
                    <input
                        value={budget}
                        onChange={handleChange}
                        type="text"
                        className="nuevo-presupuesto"
                        id="amount"
                        placeholder="Añade tu presupuesto"
                    />
                </div>

                <input type="submit" value="Añadir" />

                {message && <Message type="error">{message}</Message>}
            </form>
        </div>
    );
};

NewBudget.propTypes = {
    budget: PropTypes.number.isRequired,
    setBudget: PropTypes.func.isRequired,
    setIsValidBudget: PropTypes.func.isRequired,
};
