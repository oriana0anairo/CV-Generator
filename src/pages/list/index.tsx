export const ListPage = () => {
  return (
    <div className="cv-preview">
      <h1 className="cv-title">[Nombre del usuario]</h1>
      <p className="cv-subtitle">[Título profesional]</p>

      <section className="cv-section">
        <h2>Información de Contacto</h2>
        <ul>
          <li>
            <strong>Correo:</strong> usuario@correo.com
          </li>
          <li>
            <strong>Ubicación:</strong> Ciudad, País
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Resumen Profesional</h2>
        <p>Texto descriptivo del resumen profesional ingresado.</p>
      </section>

      <section className="cv-section">
        <h2>Experiencia Laboral</h2>
        <ul>
          <li>
            <strong>Empresa A</strong> - Cargo (2020 - 2022)
          </li>
          <li>
            <strong>Empresa B</strong> - Cargo (2022 - Actualidad)
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Habilidades</h2>
        <p>React, TypeScript, Git, HTML, CSS</p>
      </section>
    </div>
  );
};
