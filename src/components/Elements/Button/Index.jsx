const Button = (props) => {
  const {
    children = "....",
    classname = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-10  font-semibold rounded-md text-white ${classname} cursor-pointer mt-4`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
