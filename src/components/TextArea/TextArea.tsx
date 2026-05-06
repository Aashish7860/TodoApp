import "./TextArea.css";

interface ITextAreaProps {
  children?: string;
  className?: string;
  minLength?: number;
  maxLength?: number;
  cols?: number;
  rows?: number;
  label?: string;
  value?: string | number;
  name?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onDoubleClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
function TextArea({
  children,
  cols,
  rows,
  minLength,
  maxLength,
  className,
  // id,
  //   type,
  label,
  value,
  name,
  placeholder,
  disabled,
  onChange,
  autoFocus,
  onBlur,
  onKeyDown,
}: ITextAreaProps) {
  return (
    <>
      <textarea
        className={className}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        autoFocus={autoFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        children={children}
        cols={cols}
        rows={rows}
        minLength={minLength}
        maxLength={maxLength}
      />
      {label}
    </>
  );
}

export { TextArea };
