import i18n from "../../i18n";
import "./styles.css";

export const ButtonConTrans: React.FC = () => {
  return (
    <div className="language-switcher">
      <button
        className="language-button active"
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
      <button
        className="language-button"
        onClick={() => i18n.changeLanguage("es")}
      >
        ES
      </button>
    </div>
  );
};
