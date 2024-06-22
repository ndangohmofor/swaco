import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik"; //Form library
import * as yup from "yup"; //Validation library
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import DropZone from "react-dropzone";
import FlexBetween from "../../components/FlexBetween";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required to proceed")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, '"phone" must be 10 digits long')
    .max(10, '"Phone" must be 10 digits long'),
  location: yup.string().required("Name of your neighborhood"),
  picturePath: yup.string().required("Please select a profile picture"),
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
  phoneNumber: "",
  location: "",
  picture: "",
};

const initialValuesLogin = {
  phoneNumber: "",
};

const initialValuesOtp = {
  otp: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("register");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isLogin, setIsLogin] = useState(pageType === "login");
  const [isRegister, setIsRegister] = useState(pageType === "register");
  const [isOtp, setIsOtp] = useState(pageType === "otp");

  const register = async (values, onsubmitProps) => {
    // This allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );

    const savedUser = await savedUserResponse.json();

    if (savedUser) {
      setIsLogin(true);
      setIsRegister(false);
      setPageType("login");
    }

    onsubmitProps.resetForm();
  };

  const login = async (values, onsubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const validUser = await loggedInResponse.json();
    if (validUser) {
      setIsLogin(false);
      setIsRegister(false);
      setIsOtp(true);
      setPageType("otp");
      onsubmitProps.resetForm();
    }
  };

  const confirmOtp = async (values, onsubmitProps) => {
    const loginOtpResponse = await fetch("http://localhost:3001/auth/otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loginOtpResponse.json();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      onsubmitProps.resetForm();
      navigate("/home");
    }
  };

  const handleFormSubmit = async (values, onsubmitProps) => {
    if (isLogin) await login(values, onsubmitProps);
    if (isRegister) await register(values, onsubmitProps);
    if (isOtp) await confirmOtp(values, onsubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={
        isRegister ? registerSchema : isLogin ? loginSchema : otpSchema
      }
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
            {isRegister && (
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
                  sx={{
                    gridColumn: "span 2",
                  }}
                />
                <TextField
                  label={"Last Name"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{
                    gridColumn: "span 2",
                  }}
                />
                <TextField
                  label={"Location"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.location}
                  name="location"
                  error={Boolean(touched.location) && Boolean(errors.location)}
                  helperText={touched.location && errors.location}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
                <Box
                  gridColumn={"span 4"}
                  border={`1px solid ${palette.neutral.medium}`}
                  borderRadius={"5px"}
                  p={"1rem"}
                >
                  <DropZone
                    acceptedFiles={".jpg,jpeg,.png"}
                    multiple={false}
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
                          label="picture"
                          title="profile picture"
                          placeholder="Add Picture here"
                          name="picture"
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
                  sx={{
                    gridColumn: "span 4",
                  }}
                />

                {/* BUTTONS */}
                <Box
                  gridColumn={"span 4"}
                  // border={`1px solid ${palette.neutral.medium}`}
                  borderRadius={"5px"}
                  p={"1rem"}
                >
                  <Button
                    fullWidth
                    type="submit"
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
                      setIsRegister(false);
                      setIsLogin(true);
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

            {isLogin && (
              <>
                <TextField
                  label={"Phone Number"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNumber}
                  name="phone"
                  error={
                    Boolean(touched.phoneNumber) && Boolean(errors.phoneNumber)
                  }
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />

                {/* BUTTONS */}
                <Box
                  gridColumn={"span 4"}
                  // border={`1px solid ${palette.neutral.medium}`}
                  borderRadius={"5px"}
                  p={"1rem"}
                >
                  <Button
                    fullWidth
                    type="submit"
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
                      setIsLogin(false);
                      setIsRegister(true);
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

            {isOtp && (
              <>
                <TextField
                  label={"Enter OTP"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onSubmit={() => resetForm()}
                  value={values.otp}
                  name="otp"
                  error={Boolean(touched.otp) && Boolean(errors.otp)}
                  helperText={touched.otp && errors.otp}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />

                <Box gridColumn={"span 4"} borderRadius={"5px"}>
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
                    Lookout for an OTP sent to your phone
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
