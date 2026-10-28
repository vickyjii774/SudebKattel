
export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-[90%] max-w-none ${className}`}
    >
      {children}
    </div>
  );
}
