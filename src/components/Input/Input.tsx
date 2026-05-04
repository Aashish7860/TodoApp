interface IInputProps {
  type?: "text" | "checkbox" | "number" | "email" | "password";
  // id?:string
  label?: string;
  value?: string | number;
  name?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  checked?: boolean;
}
function Input({
  // id,
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  autoFocus,
  onBlur,
  onKeyDown,
  checked,
}: IInputProps) {
  return (
    <>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        autoFocus={autoFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        checked={type === "checkbox" ? checked : undefined}
      />
      {error && <p className="error">Input filed can't be empty!</p>}
    </>
  );
}

export default Input;
