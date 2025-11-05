import { Controller, useForm } from "react-hook-form";
import "./styles.css";
import { useTranslation } from "react-i18next";

export const FormPage: React.FC = () => {
  const { register, control } = useForm();
  const { t } = useTranslation();
  return (
    <form className="cv-form__container">
      <div className="form-wrapper">
        <form className="cv-form-card">
          <h2>{t("form.title")}</h2>

          <div className="cv-form-group">
            <label htmlFor="name">{t("form.name")}</label>
            <input
              {...register("name", { required: true })}
              id="name"
              type="text"
            />
          </div>

          <div className="cv-form-group">
            <label htmlFor="email">{t("form.email")}</label>
            <input
              {...register("email", { required: true })}
              id="email"
              type="email"
            />
          </div>

          <div className="cv-form-group">
            <label htmlFor="location">{t("form.location")}</label>
            <Controller
              render={({ field }) => (
                <input {...field} id="location" type="text" />
              )}
              name="location"
              control={control}
              defaultValue=""
            />
          </div>

          <button type="submit" className="cv-button">
            {t("form.next")}
          </button>
        </form>
      </div>
    </form>
  );
};
