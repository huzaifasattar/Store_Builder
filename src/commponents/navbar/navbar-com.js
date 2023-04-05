import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import {
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link, NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

import { useNavigate } from "react-router-dom";
import { setSignInUser,getSignInUser } from "../localstorage/localstorageCom";

function ResponsiveAppBar() {
  const navigate = useNavigate()
  const user = getSignInUser()

  const handleLogOut = () => {
    setSignInUser({})
    navigate('/')
  }
  const [anchorEl, setAnchorEl] = React.useState("");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl("");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box display={"flex"} flexGrow={1}>
            <Typography
              variant="h6"
              noWrap
              href="#"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                // letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
              component={Link}
              to={"/home"}
            >
              STORE_BUILDER
            </Typography>
            {user.admin === true &&<Button sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                // letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              <AddIcon style={{ color: "white" }} />
              Product
            </Button>}
            {user.admin ===false &&<Button
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
              component={NavLink}
              to='/cart'
              startIcon={<LocalMallIcon style={{ color: "white" }} />}
            >
              Cart
            </Button>}
          </Box>
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <AccountCircleIcon fontSize="large" position="pointer" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
                xs: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Avatar fontSize="small" />
                </ListItemIcon>
                {`${user.firstName} ${user.lastName}`}
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleClose} >
                <Typography onClick={()=>{handleLogOut()}}>
                <ListItemIcon>
                  <Logout fontSize="small"  />
                </ListItemIcon>
                  Logout
                  </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
