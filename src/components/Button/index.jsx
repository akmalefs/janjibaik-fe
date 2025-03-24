const Button = ({ children, variant }) => {
  return (
    <a
      href=""
      className={`text-white text-center bg-[#EC901D] py-3.5 px-14 rounded-full ${variant}`}
    >
      {children}
    </a>
  );
};

export default Button;
