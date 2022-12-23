import { useRef, useState } from 'react'
import { Recordatorios } from './Recordatorios'

export const PostIt = () => {
    const [listaPostIt, setListaPostIt] = useState([])
    const [isImportante, setIsImportante] = useState(false)
    const titulo = useRef()
    const descripcion = useRef()

    // console.log(listaPostIt)

    const agregar = () => {
        const estilo = asignarEstilo(isImportante)
        const txt_titulo = titulo.current.value
        const txt_descripcion = descripcion.current.value

        if (txt_descripcion === '') return

        setListaPostIt((anterior_listaPostIt) => {
            const nuevoPostIt = {
                titulo: txt_titulo,
                descripcion: txt_descripcion,
                estilo: estilo,
            }

            return [...anterior_listaPostIt, nuevoPostIt]
        })
        titulo.current.value = null
        descripcion.current.value = null
        setIsImportante(false)
    }

    const eliminarPost = (indice) => {
        const nuevaLista = [...listaPostIt]
        nuevaLista.splice(indice, 1)
        setListaPostIt(nuevaLista)
    }

    const handleChecked = (event) => {
        setIsImportante(event.target.checked)
    }

    const asignarEstilo = (tipo) => {
        const estilos = ['primer-estilo', 'segundo-estilo', 'tecer-estilo']
        const estiloAplicado = estilos[Math.floor(Math.random() * estilos.length)]

        return tipo
            ? `recordatorios importante ${estiloAplicado}`
            : `recordatorios no-importante ${estiloAplicado}`
    }

    return (
        <>
            <div className="post-it container-md">
                <input ref={titulo} type="text" placeholder="Titulo"></input>

                <input ref={descripcion} type="text" placeholder="Descripcion"></input>

                <span>Importante</span>

                <input
                    className="checkbox"
                    type="checkbox"
                    checked={isImportante}
                    onChange={handleChecked}
                ></input>

                <button className="btn-agregar" onClick={agregar}>
                    Agregar
                </button>
            </div>

            <div className="items-post container-md">
                {listaPostIt.map(({ titulo, descripcion, estilo }, indice) => (
                    <>
                        {/* <h1>{indice}</h1> */}
                        <Recordatorios
                            indice={indice}
                            titulo={titulo}
                            descripcion={descripcion}
                            estilo={estilo}
                            // isInportante={importante}
                            funcionEliminar={eliminarPost}
                        />
                    </>
                ))}
            </div>
            {/* <Recordatorios descripcion="descripcion verga uwu" titulo="wolo" /> */}
        </>
    )
}
