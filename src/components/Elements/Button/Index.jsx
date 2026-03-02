const Button = (props) => {
  const { children = "....", classname = "bg-black", ...rest } = props;
  return (
    <button
      {...rest}
      className={`h-10  font-semibold rounded-md text-white ${classname} cursor-pointer mt-4`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
