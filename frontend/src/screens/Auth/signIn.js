import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./signIn.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInputField from "../../components/_form/_inputs/customInputField";
import CustomButton from "../../components/_form/_inputs/customButton";
import { login } from "../../services/authService";
import { Link, useNavigate} from "react-router-dom";
const SignIn = () => {
  // define a function to redirect to a new page
  const navigation = useNavigate();
  // Google oAuth login
  const googleAuth = () => {
    console.log("googleAuth");
    window.open(
      `${process.env.REACT_APP_API_URL}auth/google/callback`,
      "_self"
    );
  };

  // State to store the error message from the server
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  // function to handle the form submission
  const handleSubmit = async (email, password) => {
    setIsLoading(true);
    await login(email, password)
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        setErrorMessage("");
        setIsLoading(false);
        navigation("/admin/dashboard");
      })
      .catch(function (error) {
        console.error("Login failed:", error.response.data.message);
        setErrorMessage(error.response.data.message);
        setIsLoading(false);
      });
  };

  // Handle Google oAuth login from service

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values.email, values.password);
    },
  });

  return (
    <MDBContainer fluid className="p-5" style={{ marginTop: "8%" }}>
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            <span className="text-secondary">Welcome to</span> <br />
            <span className="text-primary">CrowdFunding</span>
          </h1>
          <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            Welcome to our crowdfunding platform, where dreams become reality!
            Whether you're passionate about supporting groundbreaking projects
            or launching your own, you're in the right place. Log in with your
            existing credentials to dive right in, or take a moment to register
            and unlock a world of possibilities. Join our vibrant community of
            backers and creators, and together, let's transform ideas into
            tangible change. Start your crowdfunding journey with us today and
            be a part of something amazing!
          </p>
        </MDBCol>
        <MDBCol md="6">
          <form onSubmit={formik.handleSubmit}>
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <p
                  className="px-3 mb-5 text-center"
                  style={{ color: "hsl(217, 10%, 50.8%)" }}
                >
                  Don't have an account ? &nbsp;
                  <Link to="/register">
                    <span className="w-100 mb-4" color="primary">
                      Sign Up
                    </span>
                  </Link>
                </p>
                <CustomInputField
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  errors={formik.errors.email}
                />
                <CustomInputField
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  errors={formik.errors.password}
                />
                <div className="d-flex justify-content-end mx-4 mb-4">
                  <Link to="/reset-password">
                  <p className="text-blue">Forgot password?</p>
                  </Link>
                </div>

                <CustomButton
                  type="submit"
                  className="w-100 mb-4 "
                  buttonText={isLoading ? "Loading..." : "Sign In"}
                  isEnabled={!isLoading}
                />
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}

                <div className="text-center">
                  <p>or sign in with:</p>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                    onClick={googleAuth}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignIn;
