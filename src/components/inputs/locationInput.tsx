import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const LocationInput: React.FC = () => {
  const { control } = useFormContext();
  const { t } = useTranslation();

  return (
    <div className="cv-form-group">
      <label htmlFor="location">{t("form.location")}</label>
      <Controller
        render={({ field }) => <input {...field} id="location" type="text" />}
        name="location"
        control={control}
        defaultValue=""
      />
    </div>
  );
};
