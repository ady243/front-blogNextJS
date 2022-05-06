import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../src/components/Button";
import { makeClient } from "../src/services/makeClient";
import { useCallback, useState } from "react";
import Navbar from "../src/components/Navbar";
import { useRouter } from "next/router";
import Login from "./login";
import Link from "next/link";

const SignInPage = () => {
  const [message] = useState("");
  const [submitted] = useState(false);
  const initialValues = {
    email: "",
    name: "",
    sexe: "",
    password: "",
  };
  const schema = yup.object({
    name: yup.string().trim().required("Name is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),

    sexe: yup.string().trim().required("Sexe is required"),
    password: yup.string().min(8).required("Password is required"),
  });

  const [error, setError] = useState(null);

  //const [saveJWT] = useContext(AppContext);
  const router = useRouter();
  const handleFormsubmit = useCallback(
    async ({ name, email, sexe, password }) => {
      setError(null);

      try {
        const {
          data: { jwt },
        } = await makeClient().post("/account", {
          name,
          email,
          sexe,
          password,
        });
        router.push("/login");
        if (!jwt) {
          throw new error("Missing jwt");
        }

        Login(jwt);
        saveJWT(jwt);
      } catch (err) {
        const { response: { data } = {} } = err;
        if (data.error) {
          setError(data.error);
          return;
        }
        setError("oooops,something weent wrong");
      }
      if (!user) {
        router.push("/login");
        return;
      }
    },
    []
  );

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
                  Name
                </label>

                <Field
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Your name"
                ></Field>
                <ErrorMessage
                  component="span"
                  className="text-danger"
                  name="name"
                ></ErrorMessage>
                <br></br>
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

                <ErrorMessage
                  component="span"
                  className="text-danger"
                  name="email"
                ></ErrorMessage>
                <br></br>
                <label htmlFor="name" className="form-label">
                  Sexe
                </label>
                <br></br>
                <Field
                  className="form-control"
                  type="text"
                  name="sexe"
                  placeholder="Your gender"
                ></Field>
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
                Create Account
              </Button>
              <Link href="/login">
                <a className="text-blue-500"> or Already have account ?</a>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SignInPage;
