export const FormPage: React.FC = () => {
  return (
    <section className="cv-form">
      <h1 className="cv-form__title">Información Personal</h1>

      <form className="cv-form__container">
        <div className="form-wrapper">
          <form className="cv-form-card">
            <h2>Información Personal</h2>

            <div className="cv-form-group">
              <label htmlFor="nombre">Nombre Completo</label>
              <input id="nombre" type="text" />
            </div>

            <div className="cv-form-group">
              <label htmlFor="correo">Correo Electrónico</label>
              <input id="correo" type="email" />
            </div>

            <div className="cv-form-group">
              <label htmlFor="ubicacion">Ubicación</label>
              <input id="ubicacion" type="text" />
            </div>

            <button type="submit" className="cv-button">
              Siguiente
            </button>
          </form>
        </div>
      </form>
    </section>
  );
};
