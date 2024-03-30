import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { ModeEditOutline } from "@mui/icons-material";
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
  phone: yup.string().phone("invalid phone number").required("required"),
  location: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  phone: yup.string().phone("invalid phone number").required("required"),
});

const otpSchema = yup.object().shape({
  otp: yup.number().otp("invalid otp").required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  phone: "",
  location: "",
  picture: "",
};

const initialValuesLogin = {
  phone: "",
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
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const handleFormSubmit = async (values, onsubmitProps) => {};

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
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
                  label={"Phone Number"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  name="phone"
                  error={Boolean(touched.phone) && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                  sx={{
                    gridColumn: "span 4",
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
              </>
            )}
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
