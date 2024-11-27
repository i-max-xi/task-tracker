import { Input } from '@nextui-org/react';
interface props {
  type: string;
  label: string;
  placeholder: string;
  values: Record<string, string>;
  errors: Record<string, string>;
  id: string;
  handleChange: any;
  handleBlur: any;
}
const CustomInput = ({
  type,
  label,
  placeholder,
  errors,
  id,
  values,
  handleChange,
  handleBlur,
}: props) => {
  return (
    <Input
      id={id}
      type={type}
      label={label}
      placeholder={placeholder}
      errorMessage={errors[id]}
      value={values[id]}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default CustomInput;
