import React,{useState} from "react";
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
import { resetPassword } from "../../services/authService";
const ResetPassword = () => {
  

  // State to store the error message from the server
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("The email field is required"),
  });

  // function to handle the form submission
    const handleSubmit = async (email) => {
    setIsLoading(true);
    await resetPassword(email)
        .then(function (response) {
            setErrorMessage("");
            setSuccessMessage(response.data.message);
            setIsLoading(false);
        })
        .catch(function (error) {
            console.error("Reset password failed:", error.response.data.message);
            setErrorMessage(error.response.data.message);
            setIsLoading(false);
        });
    };


  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values.email);
    },
  });

  return (
    <MDBContainer fluid className="p-5" style={{ marginTop: "12%" }}>
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            <span className="text-secondary">Reset</span> <br />
            <span className="text-primary">Password</span>
          </h1>
          <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            <b>Password Reset Instructions</b>
            <ol>
              <li>Enter your email address below.</li>
              <li>Check your email for a password reset link.</li>
              <li> Click the link to set a new password. </li>
              <li> Return to login with your updated credentials.</li>
            </ol>
          </p>
        </MDBCol>
        <MDBCol md="6">
          <form onSubmit={formik.handleSubmit}>
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
               
                <CustomInputField
                  label="Your Email"
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  errors={formik.errors.email}
                />
               
                

                <CustomButton
                  type="submit"
                  className="w-100 mb-4 "
                  buttonText={isLoading ? "Loading..." : "Send Email"}
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
  );
};

export default ResetPassword;
