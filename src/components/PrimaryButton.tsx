import { Button } from "@mantine/core";

interface IButtonProps {
  onClick?: () => void;
  text: string;
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
  variant: string;
}

const PrimaryButton = ({
  onClick = () => {},
  text,
  className,
  type,
  variant,
}: IButtonProps) => {
  return (
    <Button
      type={type}
      variant={variant}
      onClick={onClick}
      className={`!px-10 !rounded-md !tracking-wide ${className}`}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
