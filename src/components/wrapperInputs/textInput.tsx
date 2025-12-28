import { useFormContext } from "react-hook-form";

type TextInputProps = {
  name: string;
  label: String;
  multiple?: boolean;
  placeholder?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  multiple,
  placeholder,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="cv-form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...register(name, { required: true })}
        id={name}
        type="text"
        multiple={multiple}
        placeholder={placeholder}
      />
      <div className="container-error">
        {errors?.[name] && (
          <p className="error">{errors?.[name].message as string}</p>
        )}
      </div>
    </div>
  );
};
