export const Recordatorios = ({
    titulo,
    descripcion,
    estilo,
    indice,
    funcionEliminar,
}) => {
    // console.log(clase, claseImportante)
    return (
        <div className={estilo} key={indice}>
            <button className="btn-cerrar" onClick={() => funcionEliminar(indice)}>
                x
            </button>
            <div className="container nota">
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}
