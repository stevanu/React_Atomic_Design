const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="w-full max-w-xs rounded-md p-5">
      <h1 className="text-3xl text-blue-600 font-bold mb-2 text-center">
        {title}
      </h1>
      <p className="font-medium text-slate-500 mb-5 text-center">
        Welcome Please enter your details
      </p>
      {children}
    </div>
  );
};

export default AuthLayout;
