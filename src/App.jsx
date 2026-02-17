import React from "react";
import FormLogin from "./components/Fragments/FormLogin";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-xs rounded-md p-5">
        <h1 className="text-3xl text-blue-600 font-bold mb-2 text-center">
          Login
        </h1>
        <p className="font-medium text-slate-500 mb-5 text-center">
          Welcome Please enter your details
        </p>
        <FormLogin></FormLogin>
      </div>
    </div>
  );
}

export default App;
