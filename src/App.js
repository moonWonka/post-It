import { useState } from 'react'
import { FormularioPostIt } from './componenetes/FormularioPostIt'
import { Recordatorios } from './componenetes/Recordatorios'
import { nanoid } from 'nanoid'

function App() {
    const [listaPostIt, setListaPostIt] = useState([])

    const ROTACIONES_POSIBLES = [
        'primera-rotacion',
        'segunda-rotacion',
        'tecera-rotacion',
    ]

    const asignarEstilo = (tipo) => {
        const rotacionAplicada =
            ROTACIONES_POSIBLES[Math.floor(Math.random() * ROTACIONES_POSIBLES.length)]
        return tipo
            ? `recordatorios importante ${rotacionAplicada}`
            : `recordatorios ${rotacionAplicada}`
    }

    const agregarPost = ({ titulo, descripcion, isImportante }) => {
        const estilo = asignarEstilo(isImportante)

        const nuevoPostIt = {
            titulo,
            descripcion,
            estilo,
            id: nanoid(),
        }

        setListaPostIt([...listaPostIt, nuevoPostIt])
    }

    const eliminarPost = (id) => {
        setListaPostIt((listaPostItPrev) =>
            listaPostItPrev.filter((nota) => nota.id !== id)
        )
    }

    const editarPost = (id) => {
        const nota = listaPostIt.find((nota) => nota.id === id)
        console.log(nota)
    }

    return (
        <div className="container">
            <h1 id="title">POST IT SIMULATOR</h1>
            <br></br>

            <FormularioPostIt funcionAgregar={agregarPost} />

            <div className="items-post container-md">
                {listaPostIt.map(({ titulo, descripcion, estilo, id }) => (
                    <Recordatorios
                        key={id}
                        id={id}
                        titulo={titulo}
                        descripcion={descripcion}
                        estilo={estilo}
                        funcionEliminar={eliminarPost}
                        funcionEditar={editarPost}
                    />
                ))}
            </div>
        </div>
    )
}

export default App
