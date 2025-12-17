import { FormProvider, useForm } from "react-hook-form";
import "./styles.css";
import { useTranslation } from "react-i18next";
import { curriculumService } from "../../services";
import {
  EmailInput,
  LocationInput,
  NameInput,
  ProfeSummaryInput,
} from "../../components";

export const FormPage: React.FC = () => {
  const methods = useForm();
  const { handleSubmit, getValues } = methods;
  const { t } = useTranslation();

  const onSubmit = async () => {
    const body = {
      title: getValues("name"),
      data: getValues("email"),
    };

    const response = await curriculumService.create(body);
    console.log(response);
  };

  return (
    <FormProvider {...methods}>
      <form className="cv-form__container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-wrapper">
          <div className="cv-form-card">
            <h2>{t("form.title")}</h2>
            <NameInput />
            <EmailInput />
            <LocationInput />
            <ProfeSummaryInput />
            <button type="submit" className="cv-button">
              {t("form.next")}
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
