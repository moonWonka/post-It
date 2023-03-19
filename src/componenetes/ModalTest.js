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
            <div className="modal-content">
                <h1>Modal wonka</h1>
                <div className="">
                    <button type="button" onClick={cerrarModal}>
                        Cerrar
                    </button>
                </div>

                <h5 className="modal-title">Modal title</h5>

                <form className="modal-formulario">
                    <input
                        type="text"
                        placeholder={nota.titulo}
                        onChange={handleTitulo}
                        value={titulo}
                    />
                    <input
                        type="text"
                        placeholder={nota.descripcion}
                        onChange={handleDescripcion}
                        value={descripcion}
                    />
                    <input
                        type="checkbox"
                        checked={isImportante}
                        onChange={handleChecked}
                    />
                    <button type="buttom" onClick={handleFormularioModal}>
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    )
}
