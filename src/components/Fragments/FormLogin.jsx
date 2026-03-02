import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="Email"
        placeholder="Example@gmail.com"
        name="Email"
        required
      />
      <InputForm
        label="password"
        type="password"
        placeholder="Password"
        name="password"
        required
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
