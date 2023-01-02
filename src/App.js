import { useState } from 'react'
import { FormularioPostIt } from './componenetes/FormularioPostIt'
import { Recordatorios } from './componenetes/Recordatorios'

function App() {
    const [listaPostIt, setListaPostIt] = useState([])

    const generarEstilo = () => {
        const estilos = ['primer-estilo', 'segundo-estilo', 'tecer-estilo']
        const estiloAplicado = estilos[Math.floor(Math.random() * estilos.length)]

        return estiloAplicado
    }

    const asignarEstilo = (tipo) => {
        const estiloAplicado = generarEstilo()
        return tipo
            ? `recordatorios importante ${estiloAplicado}`
            : `recordatorios no-importante ${estiloAplicado}`
    }

    const agregarPost = ({ titulo, descripcion, isImportante }) => {
        const estilo = asignarEstilo(isImportante)

        const nuevoPostIt = {
            titulo,
            descripcion,
            estilo,
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

            <FormularioPostIt funcionAgregar={agregarPost} />

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
