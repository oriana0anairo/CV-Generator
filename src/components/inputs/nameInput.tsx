import { useTranslation } from "react-i18next";
import { TextInput } from "../wrapperInputs";

export const NameInput: React.FC = () => {
  const { t } = useTranslation();
  return <TextInput label={"name"} name={t("form.name")} />;
};
