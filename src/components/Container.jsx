
export default function Container({ children, className = "" }) {
  return (
    <div
      className={`w-[90%] max-w-none mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
