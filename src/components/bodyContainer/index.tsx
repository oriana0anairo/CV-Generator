import { useTranslation } from "react-i18next";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../enums";

export const BodyContainer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="centerContent">
      <img
        src="src\assets\undraw_designer_efwz.svg"
        alt="CV ilustración"
        className="hero-image"
      />

      <div className="container">
        <h1 className="titulo-principal">{t("title")}</h1>
        <h2 className="titulo-secundario">{t("subtitle")}</h2>
        <button
          className="buttonMain"
          onClick={() => navigate(RoutesPath.form)}
        >
          {t("create")}
        </button>
      </div>
    </div>
  );
};
