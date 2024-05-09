export default function Button({
  children,
  type,
  className,
  onClick,
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className: string;
  onClick?: () => void;
}) {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}
