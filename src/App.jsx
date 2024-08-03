import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation-schema";

function App() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" name="email" id="email" {...register("email")} />
        {errors.email && errors.email.message}
        <input type="password" id="password" {...register("password")} />
        {errors.password && errors.password.message}
        <button type="submit">submit</button>
        <button type="button"></button>
      </form>
    </>
  );
}

export default App;
