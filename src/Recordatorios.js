export const Recordatorios = ({
    titulo,
    descripcion,
    funcionEliminar,
    estilo,
}) => {
    // console.log(clase, claseImportante)
    console.log('fdgvsvs')
    return (
        <div className={estilo}>
            <button className="btn-cerrar" onClick={funcionEliminar}>
                x
            </button>
            <div className="content">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}
