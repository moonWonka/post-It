import { useRef, useState } from 'react'

export const Formulario = ({ funcionAgregar }) => {
    const [isImportante, setIsImportante] = useState(false)
    const titulo = useRef()
    const descripcion = useRef()

    const handleChecked = (event) => {
        setIsImportante(event.target.checked)
    }

    const handleFormulario = (event) => {
        event.preventDefault()

        const txt_titulo = titulo.current.value
        const txt_descripcion = descripcion.current.value

        funcionAgregar({
            titulo: txt_titulo,
            descripcion: txt_descripcion,
            isImportante: isImportante,
        })

        // if (txt_descripcion === '') return

        titulo.current.value = null
        descripcion.current.value = null
        setIsImportante(false)
    }

    return (
        <>
            <form className="post-it container-md">
                <input ref={titulo} type="text" placeholder="Titulo"></input>

                <input ref={descripcion} type="text" placeholder="Descripcion"></input>

                <span>Importante</span>

                <input
                    className="checkbox"
                    type="checkbox"
                    checked={isImportante}
                    onChange={handleChecked}
                ></input>

                <button className="btn-agregar" onClick={handleFormulario}>
                    Agregar
                </button>
            </form>

            {/* <Recordatorios descripcion="descripcion verga uwu" titulo="wolo" /> */}
        </>
    )
}
