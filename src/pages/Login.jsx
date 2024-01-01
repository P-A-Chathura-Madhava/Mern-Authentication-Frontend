import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { Container, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email address is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);
  // console.log(authState);
  const { user, isError, isSuccess, isLoading, message } = authState;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      // alert("Email : " + values.email + "\n" + "Password : " + values.password);
      dispatch(login(values));
    },
  });

  useEffect(() => {
    if (!user == null || isSuccess) {
      navigate("/dashboard");
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="inner_container_login d-flex flex-column">
        <h1 className="login_heading fs-3 text-center py-4">Login</h1>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <form onSubmit={formik.handleSubmit}>
            <TextField
              className="my-2"
              fullWidth
              label="Email"
              name="email"
              variant="standard"
              autoComplete="off"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
            />
            <div className="error mb-2">
              {formik.touched.email && formik.errors.email}
            </div>
            <div className="d-flex flex-column">
              <TextField
                className="my-2"
                fullWidth
                label="Password"
                name="password"
                type="password"
                autoComplete="off"
                variant="standard"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
              />
              <div className="error mb-4">
                {formik.touched.password && formik.errors.password}
              </div>
            </div>
            <Button
              type="submit"
              variant="contained"
              style={{ width: "300px" }}
            >
              Submit
            </Button>
          </form>
          <p className="mt-4">Don't you have an account?</p>
          <a href="/signup">create an account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
