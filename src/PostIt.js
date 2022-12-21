import { useRef, useState } from 'react'
import { Recordatorios } from './Recordatorios'

export const PostIt = () => {
    const [listaPostIt, setListaPostIt] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    const titulo = useRef()
    const descripcion = useRef()

    // console.log(listaPostIt)

    const agregar = () => {
        const txt_titulo = titulo.current.value
        const txt_descripcion = descripcion.current.value
        if (txt_titulo === '' || txt_descripcion === '') return

        setListaPostIt((anterior_listaPostIt) => {
            const nuevoPostIt = {
                titulo: txt_titulo,
                descripcion: txt_descripcion,
                importante: isChecked,
                eliminarPos: eliminarPost,
            }

            return [...anterior_listaPostIt, nuevoPostIt]
        })
        titulo.current.value = null
        descripcion.current.value = null
        setIsChecked(false)
    }

    const eliminarPost = (index) => {
        const postIts = [...listaPostIt]
        console.log(index)
        postIts.splice(index, 1)
        setListaPostIt(postIts)
    }

    const handleChecked = (event) => {
        setIsChecked(event.target.checked)
    }

    return (
        <>
            <div className="post-it">
                <input ref={titulo} type="text" placeholder="Titulo"></input>

                <input
                    ref={descripcion}
                    type="text"
                    placeholder="Descripcion"
                ></input>

                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChecked}
                ></input>

                <button className="btn-agregar" onClick={agregar}>
                    Agregar
                </button>
            </div>

            <div className="items-post">
                {listaPostIt.map(({ titulo, descripcion, importante }) => (
                    <Recordatorios
                        titulo={titulo}
                        descripcion={descripcion}
                        clase={importante}
                        funcionEliminar={eliminarPost}
                    />
                ))}
            </div>
            {/* <Recordatorios descripcion="descripcion verga uwu" titulo="wolo" /> */}
        </>
    )
}
