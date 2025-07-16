export const FormPage: React.FC = () => {
  return (
    <section className="cv-form">
      <h1 className="cv-form__title">Información Personal</h1>

      <form className="cv-form__container">
        <div className="cv-form__group">
          <label htmlFor="name" className="cv-form__label">
            Nombre Completo
          </label>
          <input type="text" id="name" className="cv-form__input" />
        </div>

        <div className="cv-form__group">
          <label htmlFor="email" className="cv-form__label">
            Correo Electrónico
          </label>
          <input type="email" id="email" className="cv-form__input" />
        </div>

        <div className="cv-form__group">
          <label htmlFor="location" className="cv-form__label">
            Ubicación
          </label>
          <input type="text" id="location" className="cv-form__input" />
        </div>

        <button type="submit" className="cv-form__submit">
          Siguiente
        </button>
      </form>
    </section>
  );
};
