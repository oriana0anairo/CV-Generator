import { useFormContext } from "react-hook-form";

type TextInputProps = {
  name: string;
  label: String;
};

export const TextInput: React.FC<TextInputProps> = ({ label, name }) => {
  const { register } = useFormContext();
  return (
    <div className="cv-form-group">
      <label htmlFor={name}>{label}</label>
      <input {...register(name, { required: true })} id={name} type="text" />
    </div>
  );
};
