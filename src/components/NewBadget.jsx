export const NewBadget = () => {
    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario">
                <div className="campo">
                    <label htmlFor="amount">Definir Presupuesto</label>
                    <input
                        type="text"
                        className="nuevo-presupuesto"
                        id="amount"
                        placeholder="Añade tu presupuesto"
                    />
                </div>

                <input type="submit" value="Añadir" />
            </form>
        </div>
    );
};
