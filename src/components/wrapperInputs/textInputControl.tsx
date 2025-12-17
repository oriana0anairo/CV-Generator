import { Controller, useFormContext } from "react-hook-form";

type TextInputControlProps = {
  name: string;
  label: string;
  placeholder?: string;
};

export const TextInputControl: React.FC<TextInputControlProps> = ({
  label,
  name,
  placeholder,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <div className="cv-form-group">
          <label htmlFor={name}>{label}</label>
          <input {...field} id={name} type="text" placeholder={placeholder} />
          {error && <p className="error">{error.message}</p>}
        </div>
      )}
      name={name}
      control={control}
      defaultValue=""
    />
  );
};
