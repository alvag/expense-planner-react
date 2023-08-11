import { PropTypes } from 'prop-types';
import { useState } from 'react';
import IconClose from '../assets/img/cerrar.svg';
import { Message } from './Message';

export const ExpenseModal = ({ handleNewExpense, animateModal }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([name, amount, category].includes('')) {
            setMessage('Todos los campos son obligatorios');
            return;
        }

        if (amount < 0) {
            setMessage('El monto no puede ser negativo');
            return;
        }

        setMessage('');

        const expense = {
            id: new Date().getTime(),
            date: Date.now(),
            name,
            amount: Number(amount),
            category,
        };

        handleNewExpense(expense);
    };

    const handleClose = () => {
        handleNewExpense();
    };

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={IconClose} alt="close" onClick={handleClose} />
            </div>

            <form
                className={`formulario ${animateModal ? 'animar' : ''}`}
                onSubmit={handleSubmit}
            >
                <legend>Nuevo gasto</legend>

                {message && <Message type="error">{message}</Message>}

                <div className="campo">
                    <label htmlFor="name">Gasto</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        placeholder="Agrega el nombre del gasto"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="amount">Cantidad</label>
                    <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type="number"
                        id="amount"
                        placeholder="Ingresa la cantidad del gasto"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="category">Cantidad</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">-- Seleccione</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="varios">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value="Agregar gasto" />
            </form>
        </div>
    );
};

ExpenseModal.propTypes = {
    handleNewExpense: PropTypes.func.isRequired,
    animateModal: PropTypes.bool.isRequired,
};
