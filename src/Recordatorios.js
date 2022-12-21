export const Recordatorios = ({
    titulo,
    descripcion,
    clase,
    funcionEliminar,
}) => {
    const randomEstilo = Math.floor(Math.random() * 3)
    const primerRotate = 'primer-estilo'
    const segundoRotate = 'segundo-estilo'
    const tercerRotate = 'tercer-estilo'

    let estiloAplicado = ''

    switch (randomEstilo) {
        case 0:
            estiloAplicado = primerRotate
            break
        case 1:
            estiloAplicado = segundoRotate
            break
        case 2:
            estiloAplicado = tercerRotate
            break
        default:
            console.log('error random fuera de rango')
    }

    const importante = `recordatorios importante ${estiloAplicado}`
    const noIportante = `recordatorios no-importante ${estiloAplicado}`

    const claseImportante = clase ? importante : noIportante

    // console.log(clase, claseImportante)
    console.log('fdgvsvs')
    return (
        <div className={claseImportante}>
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
