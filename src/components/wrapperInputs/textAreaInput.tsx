import { Controller, useFormContext } from "react-hook-form";

type TextAreaInputProps = {
  label: string;
  name: string;
  placehoder?: string;
};

export const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  name,
  placehoder,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="cv-form-group">
          <label htmlFor={name}>{label}</label>
          <textarea {...field} id={name} rows={5} placeholder={placehoder} />
          {error && <p className="error">{error.message}</p>}
        </div>
      )}
    />
  );
};
