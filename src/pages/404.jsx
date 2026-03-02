import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-red-600">Oops!</h1>

        <p className="my-5 text-lg text-slate-600">
          Sorry, an unexpected error has occurred.
        </p>

        <p className="text-md italic text-slate-500">
          {error?.statusText || error?.message || "Unknown error"}
        </p>

        <Link
          to="/login"
          className="mt-6 inline-block text-blue-600 font-semibold hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
