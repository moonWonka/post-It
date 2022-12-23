export function Formulario(props) {

    const { tarea, handleChange, handleSubmit } = props

    return (
        <form onSubmit={handleSubmit} className=''>
            <div className="input-group mb-3 d-flex align-items-start">
                <div className="col-md-3 col-12 mb-3 mr-4">
                    <input
                        type="text"
                        className="form-control p-2 mr-sm-2  "
                        name="titulo"
                        placeholder="Título"
                        onChange={handleChange}
                        value={tarea.titulo} />
                </div>
                <div className="col-md-3 mb-3 col-12 ">
                    <input
                        type="text"
                        className="form-control p-2 mr-sm-2"
                        name="descripcion"
                        placeholder="Descripción"
                        onChange={handleChange}
                        value={tarea.descripcion}
                        required />
                </div>
                <div className="form-check d-flex justify-content-center">
                    <div className="col-md-2 mb-3 col-12">
                        <input
                            type="checkbox"
                            className="form-check-input mr-sm-2 col-12"
                            id="importanteForm"
                            name="importante"
                            placeholder="Descripción"
                            onChange={handleChange}
                            checked={tarea.importante} />
                        <label className="form-check-label mr-sm-2" htmlFor="importante">
                            Importante
                        </label>
                    </div>
                </div>
                <div className="col-md-4 col-12 mb-3 d-flex justify-content-center">
                    <input
                        type="submit"
                        className="btn colorGrisOscuro text-white btn-lg"
                        value="AGREGAR"
                        onClick={handleSubmit} />
                </div>
            </div>
        </form>
    )
}