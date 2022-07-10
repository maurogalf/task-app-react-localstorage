export const VisibilityControl = ({ show, setShow, limpiarCompletados }) => {
    const handleDelete = () => {
        limpiarCompletados();
    };
    return (
        <div className="d-flex justify-content-between p-4 bg-secondary border-secondary">
            <div className="form-check form-switch">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={show}
                    onChange={() => setShow(!show)}
                />
            </div>
            <label> Show Tasks Done </label>
            <button className="btn btn-danger" onClick={() => handleDelete()}>
                Limpiar
            </button>
        </div>
    );
};
