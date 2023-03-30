import * as React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  IconButton,
  InputAdornment,
  Box,
  Typography,
  Container,
  Switch,
  Alert,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { setSignUpUser, getSignUpUser } from "../localstorage/localstorageCom";

import { VisibilityOff, Visibility } from "@mui/icons-material";

export default function SignUp() {
  const signUp = getSignUpUser();

  const [userArr, setUserArr] = React.useState(signUp);

  React.useEffect(() => {
    setSignUpUser(userArr);
  }, [userArr]);

  const [admin, setAdmin] = React.useState(false);

  const [flag, setFlag] = React.useState(null);
  const [flag2, setFlag2] = React.useState(null);
  const [registerUser, setRegisterUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    reTypePassword: "",
    admin: false,
  });

  const handleOnchange = (e) => {
    let value = e.target.value;
    if (e.target.name === "admin") {
      setRegisterUser((val) => ({
        ...val,
        admin: e.target.checked,
      }));
      console.log(admin);
    } else {
      setRegisterUser((val) => {
        const clone = { ...val };
        clone[e.target.name] = value;

        return clone;
      });
    }
  };
  const handleOnClick = (e) => {
    if (
      registerUser.firstName &&
      registerUser.lastName &&
      registerUser.email &&
      registerUser.password &&
      registerUser.password === registerUser.reTypePassword
    ) {
      setUserArr((item) => [...item, registerUser]);

      setFlag(true);
      //   console.log("sucess");
    } else {
      setFlag2(true);
      //   console.log("please fill");
    }
  };
  const handleAdmin = () => {
    if (admin === false) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <>
      {flag ? (
        <Alert severity="success">Account successfuly created!</Alert>
      ) : (
        ""
      )}
      {flag2 ? (
        <Alert severity="error">
          Please Fill the All Field <strong>OR</strong> Password did Not Match!
        </Alert>
      ) : (
        ""
      )}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e) => {
                    handleOnchange(e);
                  }}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => {
                    handleOnchange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    handleOnchange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => {
                    handleOnchange(e);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="reTypePassword"
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  id="confirm password"
                  autoComplete="new-password"
                  onChange={(e) => {
                    handleOnchange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Admin
                  <Switch
                    name="admin"
                    onClick={() => handleAdmin()}
                    onChange={(e) => {
                      handleOnchange(e);
                    }}
                  />
                </Typography>
              </Grid>
            </Grid>
            {admin ? (
              <Button
                onClick={(e) => {
                  handleOnClick(e);
                }}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create Admin Account
              </Button>
            ) : (
              <Button
                onClick={(e) => {
                  handleOnClick(e);
                }}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create User Account
              </Button>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink
                  to={"/"}
                  style={{ textDecoration: "none", color: "#1976d2" }}
                >
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
