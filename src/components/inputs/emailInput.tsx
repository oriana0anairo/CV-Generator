import { useTranslation } from "react-i18next";
import { TextInput } from "../wrapperInputs";

export const EmailInput: React.FC = () => {
  const { t } = useTranslation();
  return <TextInput label={t("form.email")} name="email" />;
};
