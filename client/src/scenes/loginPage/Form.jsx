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

const Form = () => {
  return <div></div>;
};

export default Form;
