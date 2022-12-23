import { useState } from 'react'

export function Post(props) {
    const { tarea, onActualizarTarea, onBorrarTarea } = props
    const [editando, setEditando] = useState(false)

    function ModoEdicionActivado() {
        const [valor, setValor] = useState(tarea)

        function handleChange(event) {
            const { name, value, type, checked } = event.target
            setValor((prevValor) => {
                return {
                    ...prevValor,
                    [name]: type === 'checkbox' ? checked : value,
                }
            })
        }

        function handleClick(e) {
            e.preventDefault()
            onActualizarTarea(valor)
            setEditando(false)
        }

        return (
            <>
                <button
                    className="d-flex justify-content-end "
                    onClick={() => onBorrarTarea(tarea.id)}
                >
                    X
                </button>
                <span>Título</span>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="titulo"
                    value={valor.titulo}
                />
                <span>Descripción</span>
                <input
                    type="text"
                    name="descripcion"
                    className="form-control"
                    onChange={handleChange}
                    value={valor.descripcion}
                />
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id={valor.id + 'importante'}
                        name="importante"
                        placeholder="Descripción"
                        onChange={handleChange}
                        checked={valor.importante}
                    />
                    <label className="form-check-label" htmlFor="importante">
                        Importante
                    </label>
                </div>
                <div className="card-body d-flex justify-content-end">
                    <button className="btn btn-primary" onClick={handleClick}>
                        GUARDAR
                    </button>
                    <button className="btn " onClick={() => setEditando(false)}>
                        Cancelar
                    </button>
                </div>
            </>
        )
    }

    function ModoEdicionDesactivado() {
        return (
            <div className="penquita">
                <button
                    className="d-flex justify-content-end"
                    onClick={() => onBorrarTarea(tarea.id)}
                >
                    X
                </button>
                <h4 className="card-title font-weight-bold">{tarea.titulo}</h4>
                <span className="descripcion-text">{tarea.descripcion}</span>
                <div className="card-body d-flex justify-content-end">
                    <button
                        className="btn btn-primary "
                        onClick={() => setEditando(true)}
                    >
                        Editar
                    </button>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="card" style={{ width: '18rem' }} id={tarea.id}>
                <div
                    className={
                        tarea.importante
                            ? 'card-body colorImportante'
                            : 'card-body colorNormal'
                    }
                >
                    {editando ? <ModoEdicionActivado /> : <ModoEdicionDesactivado />}
                </div>
            </div>
        </>
    )
}
