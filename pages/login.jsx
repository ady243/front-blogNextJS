import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../src/components/Button";
import { makeClient } from "../src/services/makeClient";
import { useCallback, useState } from "react";

import Navbar from "../src/components/Navbar";
import { useRouter } from "next/router";

const Login = () => {
  const [message] = useState("");
  const [submitted] = useState(false);

  const initialValues = {
    email: "",

    password: "",
  };
  const schema = yup.object({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),

    password: yup.string().min(8).required("Password is required"),
  });

  const [error, setError] = useState(null);

  const router = useRouter();
  const handleFormsubmit = useCallback(async ({ email, password }) => {
    setError(null);

    router.push("/comments");

    try {
      const {
        data: { jwt },
      } = await makeClient().post("/sign", {
        email,
        password,
      });

      saveJWT(jwt);
    } catch (err) {
      const { response: { data } = {} } = err;

      if (data.error) {
        setError(data.error);
        return;
      }
      setError("ooooops somthings went wrong");
    }
    router.push("/comments");
  }, []);

  return (
    <>
      <Navbar />
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <div hidden={!submitted} className="alert alert-primary" role="alert">
          {message}
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={handleFormsubmit}
          validationSchema={schema}
        >
          {() => (
            <Form className="w-50">
              {error ? <p className="alert alert-danger">{error}</p> : null}
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label"
                  placeholder="Your Name"
                >
                  Email
                </label>
                <Field
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Your email"
                ></Field>
                <br></br>
                <ErrorMessage
                  component="span"
                  className="text-danger"
                  name="sexe"
                ></ErrorMessage>
                <br></br>
                <label htmlFor="name" className="form-label">
                  Password
                </label>
                <Field
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Your password"
                ></Field>
                <ErrorMessage
                  component="span"
                  className="text-danger"
                  name="password"
                ></ErrorMessage>
              </div>
              <Button type="submit" className="btn btn-primary">
                Log In
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
