import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(15).required(),
});

export default validationSchema;
