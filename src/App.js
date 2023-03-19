import { useState } from 'react'
import { FormularioPostIt } from './componenetes/FormularioPostIt'
import { Recordatorios } from './componenetes/Recordatorios'
import { nanoid } from 'nanoid'
import { ModalTest } from './componenetes/ModalTest'

function App() {
    const [mostrarModal, setMostrarModal] = useState(false)
    const [listaPostIt, setListaPostIt] = useState([])
    const [notaActual, setNotaActual] = useState(null)

    const ROTACIONES_POSIBLES = [
        'primera-rotacion',
        'segunda-rotacion',
        'tecera-rotacion',
    ]

    const asignarEstilo = (tipo) => {
        const rotacionAplicada =
            ROTACIONES_POSIBLES[Math.floor(Math.random() * ROTACIONES_POSIBLES.length)]
        return tipo
            ? `recordatorios ${rotacionAplicada} importante`
            : `recordatorios ${rotacionAplicada}`
    }

    const agregarPost = ({ titulo, descripcion, isImportante }) => {
        const estilo = asignarEstilo(isImportante)

        const nuevoPostIt = {
            titulo,
            descripcion,
            isImportante,
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

    const handleModal = () => {
        setMostrarModal(!mostrarModal)
    }

    const mostrarModalEditar = (id) => {
        const nota = listaPostIt.find((nota) => nota.id === id)
        console.log(nota)
        setNotaActual(nota)
        handleModal()
    }

    const editarPost = (notaModificada) => {
        setListaPostIt((listaPostItPrev) =>
            listaPostItPrev.map((nota) =>
                nota.id === notaModificada.id ? notaModificada : nota
            )
        )

        handleModal()
        setNotaActual(null)
    }

    return (
        <div className="container">
            <h1 id="title">POST IT SIMULATOR</h1>
            <br></br>

            <FormularioPostIt funcionAgregar={agregarPost} />

            <div className="items-post container-md">
                {listaPostIt.map((tarea) => (
                    <Recordatorios
                        key={tarea.id}
                        id={tarea.id}
                        titulo={tarea.titulo}
                        descripcion={tarea.descripcion}
                        estilo={tarea.estilo}
                        funcionEliminar={eliminarPost}
                        funcionEditar={mostrarModalEditar}
                    />
                ))}
            </div>
            {mostrarModal && (
                <ModalTest
                    nota={notaActual}
                    modificarNotas={editarPost}
                    cerrarModal={handleModal}
                />
            )}
        </div>
    )
}

export default App
