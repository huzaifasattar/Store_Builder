import * as React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  
  Grid,
  Box,
  Typography,
  Container,Alert
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { setSignInUser, getSignUpUser } from "../localstorage/localstorageCom";

export default function SignIn() {
    const userArr = React.useMemo(() => {
        return getSignUpUser()
    }, [])

    const navigate=useNavigate()
    const [flag, setFlag] = React.useState(null);
    const [user, setUser] = React.useState(
        {
            email: '',
            password: ''
        }
    )
    
    const hnadleChange = (e) => {
        let value = e.target.value;

        setUser(val => {
            const clone = { ...val }
            clone[e.target.name] = value;
            return clone
        })
    }
    const handleClick = () => {
        if (
            user.email &&
            user.password
        ) {
            const found = userArr.find((item) => item.email === user.email && item.password === user.password)
            setSignInUser(found)
            {
                found ?
                    navigate('/home')
                    :
                    setSignInUser({})
                
                    setFlag(true);
            }
        }
        else {
            setFlag(true)
}
       
    }
    return (
        <>
         
      {flag ? (
        <Alert severity="error">Please Fill the All Field <strong>OR</strong> Please checked your Email and Password!</Alert>
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
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
                            autoFocus
                            onChange={(e)=>{hnadleChange(e)}}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
                            autoComplete="current-password"
                            onChange={(e)=>{hnadleChange(e)}}
          />
          
          <Button
            type="reset"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // component={Link}
            // to={"/home"}
                            onClick={()=>{handleClick()}}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#" style={{ textDecoration: "none", color: "#1976d2" }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "#1976d2" }}
              >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
            </Container>
            </>
  );
}
