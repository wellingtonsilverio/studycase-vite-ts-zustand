interface Props {
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ disabled, children, onClick }) => {
  return (
    <button onClick={disabled ? undefined : onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
