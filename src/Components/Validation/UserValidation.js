import * as yup from "yup";

// login validation

const loginValidation = yup.object().shape({
  email: yup.string().email().required("Email is required").trim(),
  password: yup
    .string()
    .required("Password is require")
    .min(6, "Password must be at least 6 chareacters")
    .max(20, "Password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
});

// register validation

const registerValidation = yup.object().shape({
  email: yup.string().email().required("Email is required").trim(),
  password: yup
    .string()
    .required("Password is require")
    .min(6, "Password must be at least 6 chareacters")
    .max(20, "Password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
  fullName: yup
    .string()
    .required("Full name is require")
    .max(20, "Full name must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Full name must contain a number"),
});

export { loginValidation, registerValidation };
