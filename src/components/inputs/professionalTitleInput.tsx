import { useTranslation } from "react-i18next";
import { TextInputControl } from "../wrapperInputs";

export const ProfessionalTitle: React.FC = () => {
  const { t } = useTranslation();

  return (
    <TextInputControl
      name="professional"
      label={t("form.professionalTitle") + " *"}
      placeholder={t("form.professionalTitlePlaceholder")}
    />
  );
};
