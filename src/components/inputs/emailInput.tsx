import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const EmailInput: React.FC = () => {
  const { register } = useFormContext();
  const { t } = useTranslation();

  return (
    <div className="cv-form-group">
      <label htmlFor="email">{t("form.email")}</label>
      <input
        {...register("email", { required: true })}
        id="email"
        type="email"
      />
    </div>
  );
};
