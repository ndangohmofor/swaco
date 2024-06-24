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
  const [pageType, setPageType] = useState("login");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const isOtp = pageType === "otp";

  const register = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    if (values.picture) {
      formData.append("picturePath", values.picture.name);
    }

    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      setPageType("login");
    }
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/home");
    }
  };
};

export default Form;
