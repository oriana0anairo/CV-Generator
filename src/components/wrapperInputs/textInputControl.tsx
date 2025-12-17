import { Controller, useFormContext } from "react-hook-form";

type TextInputControlProps = {
  name: string;
  label: string;
};

export const TextInputControl: React.FC<TextInputControlProps> = ({
  label,
  name,
}) => {
  const { control } = useFormContext();
  return (
    <div className="cv-form-group">
      <label htmlFor={name}>{label}</label>
      <Controller
        render={({ field }) => <input {...field} id={name} type="text" />}
        name={name}
        control={control}
        defaultValue=""
      />
    </div>
  );
};
