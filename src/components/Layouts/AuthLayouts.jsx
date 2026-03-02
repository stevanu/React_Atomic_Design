import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-xs rounded-md p-5">
        <h1 className="text-3xl text-blue-600 font-bold mb-2 text-center">
          {title}
        </h1>
        <p className="font-medium text-slate-500 mb-5 text-center">
          Welcome Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="mt-3 text-sm text-center">
        Don't have an account?
        <Link
          to="/register"
          className="text-blue-600 font-bold hover:underline ml-1"
        >
          Register
        </Link>
      </p>
    );
  } else if (type === "register") {
    return (
      <p className="mt-3 text-sm text-center">
        Already have an account?
        <Link
          to="/login"
          className="text-blue-600 font-bold hover:underline ml-1"
        >
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
