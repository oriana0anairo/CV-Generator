import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const NameInput: React.FC = () => {
  const { register } = useFormContext();
  const { t } = useTranslation();

  return (
    <div className="cv-form-group">
      <label htmlFor="name">{t("form.name")}</label>
      <input {...register("name", { required: true })} id="name" type="text" />
    </div>
  );
};
