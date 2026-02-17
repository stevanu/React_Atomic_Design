const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-slate-700 mb-2"
    >
      {children}
    </label>
  );
};

export default Label;
