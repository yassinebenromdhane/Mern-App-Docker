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
import "./signUp.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInputField from "../../components/_form/_inputs/customInputField";
import CustomButton from "../../components/_form/_inputs/customButton";
import CustomSelect from "../../components/_form/_inputs/customSelect";
import { register } from "../../services/authService";
import { Link, useLocation } from "react-router-dom";
import { getGoogleUrl } from "../../utils/getGoogleUrl";
const SignUp = () => {
  // get the location object from the router
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // State to store the error message from the server
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const validationSchema = Yup.object({
    fullName: Yup.string().required("The first name is required"),
    username: Yup.string().required("The username is required"),
    cin: Yup.string().required("The CIN is required"),
    birthdate: Yup.string().required("The birthdate is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("The email is required"),
    password: Yup.string().required("The password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("The password confirmation is required"),
    roles: Yup.string().required("The role is required"),
  });

  // function to handle the form submission
  const handleSubmit = async (values) => {
    setIsLoading(true);
    await register(values)
      .then(function (response) {
        setErrorMessage("");
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error("Login failed:", error.response.data.message);
        setErrorMessage(error.response.data.message);
        setIsLoading(false);
      });
  };

  const options = [
    { value: "backer", label: "Backer" },
    { value: "founder", label: "Founder" },
  ];

  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      cin: "",
      birthdate: "",
      roles: "backer",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <MDBContainer fluid className="p-4">
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
                  Already have an account? &nbsp;
                  <Link to="/login">
                    <span className="w-100 mb-4" color="primary">
                      Sign In
                    </span>
                  </Link>
                </p>
                <CustomInputField
                  label="Full Name"
                  type="text"
                  id="fullName"
                  name="fullName"
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  errors={formik.errors.fullName}
                />
                <MDBRow>
                  <MDBCol md="6">
                    <CustomInputField
                      label="Username"
                      type="text"
                      id="username"
                      name="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      errors={formik.errors.username}
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <CustomInputField
                      label="CIN"
                      type="number"
                      id="cin"
                      name="cin"
                      onChange={formik.handleChange}
                      value={formik.values.cin}
                      errors={formik.errors.cin}
                    />
                  </MDBCol>
                </MDBRow>

                <CustomInputField
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  errors={formik.errors.email}
                />
                <MDBRow>
                  <MDBCol md="6">
                    <CustomInputField
                      label="Password"
                      type="password"
                      id="password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      errors={formik.errors.password}
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <CustomInputField
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      errors={formik.errors.confirmPassword}
                    />
                  </MDBCol>
                </MDBRow>
                <CustomInputField
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  label="Birthdate"
                  onChange={formik.handleChange}
                  value={formik.values.birthdate}
                  errors={formik.errors.birthdate}
                />
                <CustomSelect
                  id="roles"
                  name="roles"
                  onChange={formik.handleChange}
                  value={formik.values.roles}
                  errors={formik.errors.roles}
                  defaultOption="Select Role"
                  options={options}
                />

                <CustomButton
                  type="submit"
                  className="w-100 mb-4 "
                  buttonText={isLoading ? "Loading..." : "Sign Up"}
                  isEnabled={!isLoading}
                />
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}

                <div className="text-center">
                  <p>or sign up with:</p>

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
                  <Link to={getGoogleUrl(from)}>
                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="google" size="sm" />
                    </MDBBtn>
                  </Link>

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

export default SignUp;
