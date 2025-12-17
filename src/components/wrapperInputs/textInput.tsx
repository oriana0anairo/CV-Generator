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
  const { register } = useFormContext();
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
    </div>
  );
};
