import "./styles.css";

export const MainPage: React.FC = () => {
  return (
    <section>
      <img
        src="src\assets\undraw_designer_efwz.svg"
        alt="CV ilustración"
        className="hero-image"
      />

      <div className="container">
        <h1 className="titulo-principal">
          Bienvenido a tu generador de currículum
        </h1>
        <h2 className="titulo-secundario">Empieza a crear tu CV en minutos</h2>
        <button className="buttonMain">Crear</button>
      </div>
    </section>
  );
};
