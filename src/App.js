import { useState } from 'react'
import { Formulario } from './componenetes/Formulario'
import { Recordatorios } from './componenetes/Recordatorios'

function App() {
    const [listaPostIt, setListaPostIt] = useState([])

    const asignarEstilo = (tipo) => {
        const estilos = ['primer-estilo', 'segundo-estilo', 'tecer-estilo']
        const estiloAplicado = estilos[Math.floor(Math.random() * estilos.length)]

        return tipo
            ? `recordatorios importante ${estiloAplicado}`
            : `recordatorios no-importante ${estiloAplicado}`
    }

    const agregarPost = ({ titulo, descripcion, isImportante }) => {
        const estilo = asignarEstilo(isImportante)

        if (descripcion === '') return

        const nuevoPostIt = {
            titulo: titulo,
            descripcion: descripcion,
            estilo: estilo,
        }

        setListaPostIt([...listaPostIt, nuevoPostIt])
    }

    const eliminarPost = (indice) => {
        const nuevaLista = [...listaPostIt]
        nuevaLista.splice(indice, 1)
        setListaPostIt(nuevaLista)
    }

    return (
        <div className="container">
            <h1 id="title">POST IT SIMULATOR</h1>
            <br></br>

            <Formulario funcionAgregar={agregarPost} />

            <div className="items-post container-md">
                {listaPostIt.map(({ titulo, descripcion, estilo }, indice) => (
                    <>
                        <Recordatorios
                            indice={indice}
                            titulo={titulo}
                            descripcion={descripcion}
                            estilo={estilo}
                            funcionEliminar={eliminarPost}
                        />
                    </>
                ))}
            </div>
        </div>
    )
}

export default App
