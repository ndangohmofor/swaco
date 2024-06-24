import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import DropZone from "react-dropzone";
import FlexBetween from "../../components/FlexBetween";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  location: yup.string().required("Name of your neighborhood"),
  picturePath: yup.string().required("Please select a profile picture"),
  phoneNumber: yup
    .string()
    .required("Phone number is required to proceed")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, '"phone" must be 10 digits long')
    .max(10, '"Phone" must be 10 digits long'),
});

const loginSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("Phone number is required to proceed")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, '"Phone" must be 10 digits long')
    .max(10, '"Phone" must be 10 digits long'),
});

const otpSchema = yup.object().shape({
  otp: yup
    .string()
    .required("otp is required to proceed")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "otp must be 5 digits long")
    .max(5, "otp must be 5 digits long"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  location: "",
  picturePath: "",
  phoneNumber: "",
};

const initialValuesLogin = {
  phoneNumber: "",
};

const initialValuesOtp = {
  otp: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [initialValues, setInitialValues] = useState(initialValuesLogin);
  const [validationSchema, setValidationSchema] = useState(loginSchema);

  useEffect(() => {
    switch (pageType) {
      case "register":
        setInitialValues(initialValuesRegister);
        setValidationSchema(registerSchema);
        break;
      case "login":
        setInitialValues(initialValuesLogin);
        setValidationSchema(loginSchema);
        break;
      case "otp":
        setInitialValues(initialValuesOtp);
        setValidationSchema(otpSchema);
        break;
      default:
        setInitialValues(initialValuesLogin);
        setValidationSchema(loginSchema);
    }
  }, [pageType]);

  const register = async (values, onSubmitProps) => {
    console.log("Registering user with values:", values);
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    if (values.picture) formData.append("picturePath", values.picture.name);

    try {
      const savedUserResponse = await fetch(
        "http://localhost:3001/auth/register",
        {
          method: "POST",
          body: formData,
        }
      );

      const savedUser = await savedUserResponse.json();
      console.log("User registered:", savedUser);

      if (savedUser) {
        setPageType("login");
        onSubmitProps.resetForm();
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const login = async (values, onSubmitProps) => {
    console.log("Logging in with values:", values);

    try {
      const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const validUser = await loggedInResponse.json();
      console.log("User logged in:", validUser);

      if (validUser) {
        setPageType("otp");
        onSubmitProps.resetForm();
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const confirmOtp = async (values, onSubmitProps) => {
    console.log("Confirming OTP with values:", values);

    try {
      const loginOtpResponse = await fetch("http://localhost:3001/auth/otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const loggedIn = await loginOtpResponse.json();
      console.log("OTP confirmed:", loggedIn);

      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        onSubmitProps.resetForm();
        navigate("/home");
      }
    } catch (error) {
      console.error("OTP confirmation error:", error);
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log("Form submitted with values:", values, "Page type:", pageType);
    if (pageType === "login") await login(values, onSubmitProps);
    if (pageType === "register") await register(values, onSubmitProps);
    if (pageType === "otp") await confirmOtp(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display={"grid"}
            gap={"30px"}
            gridTemplateColumns={"repeat(4, minmax(0, 1fr))"}
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {pageType === "login" && (
              <>
                <TextField
                  label={"Phone Number"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNumber}
                  name="phoneNumber"
                  error={
                    Boolean(touched.phoneNumber) && Boolean(errors.phoneNumber)
                  }
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  sx={{ gridColumn: "span 4" }}
                />

                <Box gridColumn={"span 4"} borderRadius={"5px"} p={"1rem"}>
                  <Button
                    fullWidth
                    type="submit"
                    value="login"
                    sx={{
                      m: "2rem 0",
                      p: "1rem",
                      backgroundColor: palette.primary.main,
                      color: palette.background.alt,
                      "&:hover": {
                        color: palette.primary.main,
                      },
                    }}
                  >
                    LOGIN
                  </Button>
                  <Typography
                    onClick={() => {
                      setPageType("register");
                      resetForm();
                    }}
                    sx={{
                      textDecoration: "underline",
                      textAlign: "center",
                      color: palette.primary.main,
                      "&:hover": {
                        cursor: "pointer",
                        color: palette.primary.light,
                      },
                    }}
                  >
                    Don't have an account? Sign Up here
                  </Typography>
                </Box>
              </>
            )}

            {pageType === "register" && (
              <>
                <TextField
                  label={"First Name"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  label={"Last Name"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  label={"Location"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.location}
                  name="location"
                  error={Boolean(touched.location) && Boolean(errors.location)}
                  helperText={touched.location && errors.location}
                  sx={{ gridColumn: "span 4" }}
                />
                <Box
                  gridColumn={"span 4"}
                  border={`1px solid ${palette.neutral.medium}`}
                  borderRadius={"5px"}
                  p={"1rem"}
                >
                  <DropZone
                    multiple={false}
                    acceptedFiles=".jpg,.jpeg,.png"
                    onDrop={(acceptedFiles) =>
                      setFieldValue("picture", acceptedFiles[0])
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        border={`2px dashed ${palette.primary.main}`}
                        p={"1rem"}
                        sx={{
                          "&:hover": { cursor: "pointer" },
                        }}
                      >
                        <input
                          name="picture"
                          type="file"
                          {...getInputProps()}
                        />
                        {!values.picture ? (
                          <p>Add Picture Here</p>
                        ) : (
                          <FlexBetween>
                            <Typography>{values.picture.name}</Typography>
                            <EditOutlinedIcon />
                          </FlexBetween>
                        )}
                      </Box>
                    )}
                  </DropZone>
                </Box>
                <TextField
                  label={"Phone Number"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNumber}
                  name="phoneNumber"
                  error={
                    Boolean(touched.phoneNumber) && Boolean(errors.phoneNumber)
                  }
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  sx={{ gridColumn: "span 4" }}
                />

                <Box gridColumn={"span 4"} borderRadius={"5px"} p={"1rem"}>
                  <Button
                    fullWidth
                    type="submit"
                    value="register"
                    sx={{
                      m: "2rem 0",
                      p: "1rem",
                      backgroundColor: palette.primary.main,
                      color: palette.background.alt,
                      "&:hover": {
                        color: palette.primary.main,
                      },
                    }}
                  >
                    REGISTER
                  </Button>
                  <Typography
                    onClick={() => {
                      setPageType("login");
                      resetForm();
                    }}
                    sx={{
                      textDecoration: "underline",
                      textAlign: "center",
                      color: palette.primary.main,
                      "&:hover": {
                        cursor: "pointer",
                        color: palette.primary.light,
                      },
                    }}
                  >
                    Already have an account? Login Here
                  </Typography>
                </Box>
              </>
            )}

            {pageType === "otp" && (
              <>
                <TextField
                  label={"Enter OTP"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.otp}
                  name="otp"
                  error={Boolean(touched.otp) && Boolean(errors.otp)}
                  helperText={touched.otp && errors.otp}
                  sx={{ gridColumn: "span 4" }}
                />

                <Box gridColumn={"span 4"} borderRadius={"5px"} p={"1rem"}>
                  <Button
                    fullWidth
                    type="submit"
                    sx={{
                      m: "0.5rem 0",
                      p: "1rem",
                      backgroundColor: palette.primary.main,
                      color: palette.background.alt,
                      "&:hover": {
                        color: palette.primary.main,
                      },
                    }}
                  >
                    SUBMIT
                  </Button>
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      textAlign: "center",
                      color: palette.primary.main,
                      "&:hover": {
                        cursor: "pointer",
                        color: palette.primary.light,
                      },
                    }}
                  >
                    Look out for an OTP sent to your phone
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
