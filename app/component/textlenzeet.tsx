interface TextProps {
  children: React.ReactNode;
}

export const Text = ({ children }: TextProps) => {
  return (
    <h1 className="text-center text-2xl font-semibold text-green-600">
      {children}
    </h1>
  );
};