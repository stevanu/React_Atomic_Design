const Button = (props) => {
  const { children = "....", className = "bg-black", ...rest } = props;
  return (
    <button
      {...rest}
      className={`h-10 w-full font-semibold rounded-md text-white ${className} cursor-pointer mt-4`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
