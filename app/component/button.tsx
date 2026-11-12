interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  type = "button",
}: ButtonProps) => {
  return (
    <div className="flex items-center justify-between text-sm">
      <button
        type={type}
        className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {children}
      </button>
    </div>
  );
};