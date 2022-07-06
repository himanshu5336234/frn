import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "../../utils";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#F4F7FF",
  },
  image: {
    backgroundColor: "#F4F7FF",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    alignItems: "center",
  },
  greyText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    textAlign: "left",
    color: "rgba(0, 0, 0, 0.4)",
  },
  inputFields: {
    boxSizing: "border-box",
    size: "small",
    borderRadius: "5px",
  },
  circularButton: {
    padding: "10px 40px",

    background: "#0D0D2B",
    borderRadius: "50px",

    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    color: "#ffffff",
  },
  gridItems: {
    margin: "5px, 5px",
  },
  cards: {
    width: "412px",
    height: "auto",
    margin: "auto",
    padding: "20px",
    flexDirection: "column",
    background: "#FFFFFF",
    borderRadius: "10px",
  },
  links: {
    textDecoration: "none",
    color: "#0D0D2B",
  },
}));

export default function Signup({ Signup }) {
  const classes = useStyles();
  
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { LoginData } = useSelector((state) => ({
    LoginData: state.user.LoginData,
  }));


  console.log(LoginData)
  useEffect(() => {
    if(isLoggedIn()){
      return navigate("/")
    }
  }, [LoginData]);

  const Title = () => {
    if (Signup === true) {
      return (
        <Typography
          component="h1"
          variant="h5"
          style={{ color: "#0D0D2B", margin: "34px auto", fontWeight: "600" }}
        >
          Registration
        </Typography>
      );
    } else {
      return (
        <Typography
          component="h1"
          variant="h5"
          style={{ color: "#0D0D2B", margin: "34px auto", fontWeight: "600" }}
        >
          Login
        </Typography>
      );
    }
  };

  const LoginForm = () => {
    if (Signup === true) {
      return (
        <Formik
          initialValues={{ email: "", password: "", name: "", phone: "" }}
          onSubmit={async (values) => {
            dispatch({ type: "REGISTRATION", payload: values });
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Required"),
            email: Yup.string().email().required("Required"),
            password: Yup.string().required("Required"),
            phone: Yup.string().required("Required"),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <Typography className={classes.greyText}>Name</Typography>
                <TextField
                  className={classes.inputFields}
                  variant="outlined"
                  margin="normal"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  id="name"
                  fullWidth
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
                <Typography className={classes.greyText}>Phone</Typography>
                <TextField
                  className={classes.inputFields}
                  variant="outlined"
                  margin="normal"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  id="phone"
                  fullWidth
                />
                {errors.phone && touched.phone && (
                  <div className="input-feedback">{errors.phone}</div>
                )}

                <Typography className={classes.greyText}>Email</Typography>
                <TextField
                  className={classes.inputFields}
                  variant="outlined"
                  margin="normal"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  id="email"
                  fullWidth
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                <Typography className={classes.greyText}>Password</Typography>
                <TextField
                  size="small"
                  className={classes.inputFields}
                  variant="outlined"
                  margin="normal"
                  type={"password"}
                  id="password"
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}

                <Button
                  variant="contained"
                  className={classes.circularButton}
                  type="submit"
                  // disabled={isSubmitting}
                  style={{ display: "block", margin: "40px auto" }}
                >
                  Submit
                </Button>
                <Typography
                  className={classes.greyText}
                  style={{ textAlign: "center", margin: "20px 0" }}
                >
                  Sign In
                  <Link to="/signin" className={classes.links}>
                    
                  </Link>
                </Typography>
              </form>
            );
          }}
        </Formik>
      );
    } else {
      return (
        <>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              dispatch({ type: "LOGIN", payload: values });
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required("Required"),
              password: Yup.string().required("Required"),
            })}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <Typography className={classes.greyText}>Email</Typography>
                  <TextField
                    className={classes.inputFields}
                    variant="outlined"
                    margin="normal"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    size="small"
                    id="email"
                    fullWidth
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                  <Typography className={classes.greyText}>Password</Typography>
                  <TextField
                    size="small"
                    className={classes.inputFields}
                    variant="outlined"
                    margin="normal"
                    type={"password"}
                    id="password"
                    fullWidth
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}

                  <Button
                    variant="contained"
                    className={classes.circularButton}
                    type="submit"
                    // disabled={isSubmitting}
                    style={{ display: "block", margin: "40px auto" }}
                  >
                    Submit
                  </Button>
                </form>
              );
            }}
          </Formik>
          <Typography
            className={classes.greyText}
            style={{ textAlign: "center", margin: "20px 0" }}
          >
            Don't have an account?
            <Link to="/signup" className={classes.links}>
              {" Sign up"}
            </Link>
          </Typography>
        </>
      );
    }
  };
  return (
    <Grid
      container
      component="main"
      className={classes.root}
      alignItems="center"
    >
      <CssBaseline />

      <Grid item xs={12} sm={8} md={12}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "200px",
            margin: "10px auto ",
          }}
        >
          {Title()}
        </div>
        <Card className={classes.cards}>{LoginForm()}
        
        <Typography
       
            style={{ textAlign: "center", margin: "20px 0",color:"red" }}
          >
         {LoginData.message}
            
          </Typography>
        
        </Card>

        <Typography
          className={classes.greyText}
          style={{ textAlign: "center" }}
        >
          Having trouble? <br /> Contact our support at <br />
        </Typography>
      </Grid>
    </Grid>
  );
}
