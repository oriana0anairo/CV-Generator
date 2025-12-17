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
import { zodResolver } from "@hookform/resolvers/zod";
import { cvSchema, type CvFormData } from "../../schema";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../enums";

export const FormPage: React.FC = () => {
  const navigate = useNavigate();
  const methods = useForm<CvFormData>({
    resolver: zodResolver(cvSchema),
  });
  const { handleSubmit, getValues } = methods;
  const { t } = useTranslation();
  const { name, ...rest } = getValues();

  const onSubmit = async () => {
    const body = {
      title: getValues("name"),
      data: rest,
    };

    const response = await curriculumService.create(body);
    if (response.data) navigate(RoutesPath.preview);
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
