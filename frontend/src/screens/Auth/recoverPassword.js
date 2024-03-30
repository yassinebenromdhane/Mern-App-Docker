import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import "./signIn.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInputField from "../../components/_form/_inputs/customInputField";
import CustomButton from "../../components/_form/_inputs/customButton";
import { Link, useParams,useNavigate } from "react-router-dom";
import { changePassword, verifyPasswordUrl } from "../../services/authService";
const RecoverPassword = () => {
  // initialize the navigate function
  const navigation = useNavigate();
  // State to store the error message from the server
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [validUrl, setValidUrl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    const verifyUrl = async () => {
      await verifyPasswordUrl(params.id, params.token)
        .then(function (response) {
          console.log(response);
          setValidUrl(true);
        })
        .catch(function (error) {
          console.error("Reset password failed:", error.response.data.message);
          setValidUrl(false);
        });
    };
    verifyUrl();
  }, [params]);

  const validationSchema = Yup.object({
    password: Yup.string().required("The password field is required"),
    confirmPassword: Yup.string()
      .required("The confirm password field is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  // function to handle the form submission
  const handleSubmit = async (password) => {
    setIsLoading(true);
    await changePassword(password, params.id, params.token)
      .then(function (response) {
        setErrorMessage("");
        setSuccessMessage(response.data.message);
        setIsLoading(false);
        setTimeout(() => {
          navigation("/login");
        }, 3000);
      })
      .catch(function (error) {
        console.error("Reset password failed:", error.response.data.message);
        setErrorMessage(error.response.data.message);
        setIsLoading(false);
      });
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values.password);
    },
  });

  return (
    <>
      {validUrl ? (
        <MDBContainer fluid className="p-5" style={{ marginTop: "12%" }}>
          <MDBRow>
            <MDBCol
              md="6"
              className="text-center text-md-start d-flex flex-column justify-content-center"
            >
              <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                <span className="text-secondary">New</span> <br />
                <span className="text-primary">Password</span>
              </h1>
              <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
                <b>Password Reset Instructions</b>
                <ol>
                  <li>Set new password.</li>
                  <li>Confirm password.</li>
                  <li> Click the Click the save button. </li>
                </ol>
              </p>
            </MDBCol>
            <MDBCol md="6">
              <form onSubmit={formik.handleSubmit}>
                <MDBCard className="my-5">
                  <MDBCardBody className="p-5">
                    <CustomInputField
                      label="New Password"
                      type="password"
                      id="password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      errors={formik.errors.password}
                    />
                    <CustomInputField
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      errors={formik.errors.confirmPassword}
                    />

                    <CustomButton
                      type="submit"
                      className="w-100 mb-4 "
                      buttonText={isLoading ? "Loading..." : "Change Password"}
                      isEnabled={!isLoading}
                    />
                    {errorMessage && (
                      <div className="alert alert-danger" role="alert">
                        {errorMessage}
                      </div>
                    )}
                    {successMessage && (
                      <div className="alert alert-success" role="alert">
                        {successMessage}
                      </div>
                    )}
                  </MDBCardBody>
                </MDBCard>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      ) : (
        <MDBContainer fluid className="p-5" style={{ marginTop: "12%" }}>
          <MDBRow>
            <MDBCol
              md="12"
              className="text-center d-flex flex-column justify-content-center"
            >
              <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                <span className="text-secondary">Invalid</span> <br />
                <span className="text-primary">Link</span>
              </h1>
              <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
                <b>The link you are trying to access is invalid or expired</b>
              </p>
              <Link to="/login">
                <button className="btn btn-primary">Go to Login</button>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
    </>
  );
};

export default RecoverPassword;
