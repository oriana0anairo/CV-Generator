import { FormProvider, useForm } from "react-hook-form";
import "./styles.css";
import { useTranslation } from "react-i18next";
import { curriculumService } from "../../services";
import {
  EmailInput,
  LocationInput,
  NameInput,
  ProfessionalTitle,
  ProfeSummaryInput,
} from "../../components";
import { zodResolver } from "@hookform/resolvers/zod";
import { cvSchema, type CvFormData } from "../../schema";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../enums";
import { toast } from "sonner";

export const FormPage: React.FC = () => {
  const navigate = useNavigate();
  const methods = useForm<CvFormData>({
    resolver: zodResolver(cvSchema),
  });
  const { handleSubmit, getValues } = methods;
  const { t } = useTranslation();

  const onSubmit = async () => {
    const { name, ...rest } = getValues();
    try {
      const body = {
        title: name,
        data: rest,
      };

      const response = await curriculumService.create(body);

      toast.success(t("menssages.cvCreated"));
      navigate(RoutesPath.preview + "/" + response.id);
    } catch (error) {
      toast.error(t("menssages.cvError"));
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="cv-form__container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-wrapper">
          <div className="cv-form-card">
            <h2>{t("form.title")}</h2>
            <NameInput />
            <ProfessionalTitle />
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
