import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="mt-3 text-sm text-center">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 font-bold hover:underline "
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
