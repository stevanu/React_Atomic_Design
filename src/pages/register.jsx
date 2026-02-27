import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="mt-3 text-sm text-center">
        have an account?
        <Link
          to="/login"
          className="text-blue-600 font-bold ml-1.5 hover:underline "
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
