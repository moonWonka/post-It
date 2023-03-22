import { useState } from 'react'
import './styles/modal.css'

export const ModalTest = ({ nota, modificarNotas, cerrarModal }) => {
    const [titulo, setTitulo] = useState(nota.titulo)
    const [descripcion, setDescripcion] = useState(nota.descripcion)
    const [isImportante, setIsImportante] = useState(nota.isImportante)

    const handleTitulo = (event) => {
        setTitulo(event.target.value)
    }

    const handleDescripcion = (event) => {
        setDescripcion(event.target.value)
    }

    const handleChecked = (event) => {
        setIsImportante(event.target.checked)
    }

    const handleFormularioModal = (event) => {
        event.preventDefault()

        let nuevoEstilo = nota.estilo
        nuevoEstilo = nota.estilo.split(' ')
        nuevoEstilo = nuevoEstilo.slice(0, 2).join(' ')

        if (isImportante) {
            nuevoEstilo = nuevoEstilo + ' importante'
        }

        const notaModificada = {
            id: nota.id,
            estilo: nuevoEstilo,
            titulo: titulo,
            descripcion: descripcion,
            isImportante: isImportante,
        }

        modificarNotas(notaModificada)
    }

    return (
        <div className="modal-form">
            <div className="contaier modal-content">
                <div>
                    <button className="cerrar-modal" type="button" onClick={cerrarModal}>
                        x
                    </button>
                </div>

                <h1 id="modal.tile">Editar Nota</h1>

                <h5 className="modal-title">Ingrese datos</h5>

                <form className="modal-formulario" onSubmit={handleFormularioModal}>
                    <input
                        className="modal-formulario-input"
                        type="text"
                        placeholder={nota.titulo}
                        onChange={handleTitulo}
                        value={titulo}
                    />
                    <input
                        className="modal-formulario-input"
                        type="text"
                        placeholder={nota.descripcion}
                        onChange={handleDescripcion}
                        value={descripcion}
                    />
                    <input
                        className="modal-check"
                        type="checkbox"
                        checked={isImportante}
                        onChange={handleChecked}
                    />
                    <button className="cloud-btn" type="submit">
                        Guardar
                        {/* <img
                            src="https://img.icons8.com/ios/50/000000/save.png"
                            alt="save"
                        /> */}
                    </button>
                </form>
            </div>
        </div>
    )
}
