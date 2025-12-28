import { useTranslation } from "react-i18next";
import { TextInputControl } from "../wrapperInputs";

export const LocationInput: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TextInputControl
      label={t("form.location") + " *"}
      name="location"
      placeholder={t("form.locationPlaceholder")}
    />
  );
};
