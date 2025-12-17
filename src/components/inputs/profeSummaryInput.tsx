import { useTranslation } from "react-i18next";
import { TextAreaInput } from "../wrapperInputs/textAreaInput";

export const ProfeSummaryInput: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TextAreaInput
      label={t("form.professionalSummary")}
      name="professionalSummary"
      placehoder={t("form.yourExperienceStrengthsGoals")}
    />
  );
};
