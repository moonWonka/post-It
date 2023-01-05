export const Recordatorios = ({
    titulo,
    descripcion,
    estilo,
    id,
    funcionEliminar,
    funcionEditar,
}) => {
    // console.log(clase, claseImportante)
    return (
        <div className={estilo}>
            <div className="cerrar">
                <button className="btn-cerrar" onClick={() => funcionEliminar(id)}>
                    x
                </button>
            </div>
            <div className="container nota">
                <div className="main-nota">
                    <h1 className="title-nota">{titulo}</h1>
                    <p className="descripcion-nota">{descripcion}</p>
                </div>
                <div className="editar-div">
                    <button className="btn-editar" onClick={funcionEditar}>
                        Editar
                    </button>
                </div>
            </div>
        </div>
    )
}
