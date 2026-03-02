import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        placeholder="Insert your name here"
        name="fullname"
        required
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="*******"
        name="Confirm Password"
        required
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
