import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { loginInterface, onLogInLogOut } from "./utils";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(5, "Password Should be atleast 5 characters long")
      .max(20, "Password Should be atmmax 20 characters long"),
  });

  const onSubmit = (values: any) => {
    let usersStorage = JSON.parse(localStorage.getItem("users")!);
    let alertMessage: string = `User "${values.email}" not found`;
    let ifNotFound = false;
    if (usersStorage === null) {
      alert("No User Exist");
      navigate("../signup");
    } else {
      let users: loginInterface[] = usersStorage;
      users.forEach((user) => {
        if (user.email === values.email) {
          if (user.password === values.password) {
            onLogInLogOut();
            ifNotFound = false;
            navigate(`../`);
          } else {
            ifNotFound = true;
            alertMessage = `Wrong Password`;
          }
        } else {
          ifNotFound = true;
        }
      });
    }

    if (ifNotFound) {
      alert(alertMessage);
      navigate("../signup");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <label htmlFor={formik.values.email}>Email: </label>
            <div className="valitadition-text">
              <h6>{formik.errors.email ? formik.errors.email : null}</h6>
            </div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <label htmlFor={formik.values.password}>Password: </label>
            <div className="valitadition-text">
              <h6>{formik.errors.password ? formik.errors.password : null}</h6>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
