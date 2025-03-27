const Button = ({ children, variant }) => {
  return (
    <a
      href=""
      className={`text-white text-center bg-[#EC901D] px-6 py-3 flex items-center justify-center rounded-full ${variant}`}
    >
      {children}
    </a>
  );
};

export default Button;
