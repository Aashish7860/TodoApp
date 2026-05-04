interface IButtonProps {
  label?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  // onClick?: (e: React.ChangeEvent<HTMLButtonElement>)=>void
  type?: "button" | "submit" | "reset";
  // variant? : 'primary' | 'secondary' | 'danger'
}
function Button({
  onClick,
  type = "button",
  className,
  label,
  // variant='primary',
}: IButtonProps) {
  return (
    <button
      // children
      type={type}
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  );
}

export default Button;
