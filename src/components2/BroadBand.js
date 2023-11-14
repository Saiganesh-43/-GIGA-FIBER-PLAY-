import * as React from "react";
import { styled, useTheme, useState } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import "./BroadBand.css"
import {
  Avatar,
  Stack,
  Menu,
  MenuItem,
  Button,
  Badge,
  Grid,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import gig from "./images/giglog.png";
import { purple } from "@mui/material/colors";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import alarm from "./images/alarm.png";
import home from "./images/home.png";
import reciept from "./images/Receipt.png";
import request from "./images/request.png";
import offer from "./images/Discount.png";
import pass from "./images/Password Reset.png";
import card from "./images/Card Payment.png";
import bglogo from "./images/biglogo.png";
import plan from "./images/plans.png";
import data from "./images/Data Backup.png";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import privacy from "./images/priivacy1.png";
import speed from "./images/Speed.png";
import logout from "./images/logoutcurve.png";
import share from "./images/share.png";
import setting from "./images/setting.png";
import about from "./images/about.svg";
import Modal from "@mui/material/Modal";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import StyledToolbar from "@emotion/styled";
import Icons from "@mui/material/Icon";
import Bill from "./Bill";
import Notification from "./Notification";
import Profile from "./Profile";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Logout from "./Logout";
import Offers from "./Offers";
import Referal from "./Referal";
import GridViewOutlined from "@mui/icons-material/GridViewOutlined";
import SpeedIcon from "@mui/icons-material/Speed";
import Bandwidth from "./Bandwidth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Mplan from "./mplan";
// import Mplan from "./mplan";
// const color = red[500];
import { Link } from "react-router-dom";
import "./Style.css";
import Hidden from "@mui/material/Hidden";
import Msidebar from "./Msidebar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

//notification

//bills
const styleB = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "whitesmoke",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
  borderRadius: 10,
  // boxShadow: "0 14.010417938232422 42.031253814697266 0 #0000000D inset",
};

//profile

export default function BroadBand() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //menu

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openn = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosep = () => {
    setAnchorEl(null);
  };

  //Bills

  const [openB, setOpenB] = React.useState(false);
  const handleOpenB = () => setOpenB(true);
  const handleCloseB = () => setOpenB(false);

  //profile

  return (
    <div className="ForBg">
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          // background: "none",
          // background: "rgba(217, 234, 255, 1)",
          background: "white",
          height: "78px",
          display: "flex",
          justifyContent: "center",
          border: "none",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px",
            border: "1px solid brown",
            borderRadius: "10px",
          }}
        >
          <Hidden smDown>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 1,
                ...(open && { display: "none" }),
              }}
            >
              <img
                src={gig}
                alt=""
                style={{
                  paddingLeft: "4px",
                  marginBottom: "3px",
                  marginRight: "0px",
                }}
                height={55}
                width={55}
              />
            </IconButton>
          </Hidden>
          {/* <Typography variant="h6" noWrap component="div"> */}
          <Hidden smDown>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon
                sx={{
                  color: "brown",
                  // display: 'none',
                  // color: 'linear-gradient(to right , #3c033d, #b50505)',
                  fontSize: 40,
                  position: "relative",
                  // left: "0.8rem",
                }}
              />
            </IconButton>
          </Hidden>
          <Hidden smUp>
            <IconButton>
              {" "}
              {/* <img
                  src={gig}
                  alt=""
                  style={{
                    paddingLeft: "4px",
                    marginBottom: "3px",
                    marginRight: "0px",
                  }}
                  height={55}
                  width={55}
                /> */}
              <Msidebar />
            </IconButton>
          </Hidden>
          {/* Mini variant drawer */}
          {/* </Typography> */}

          {/* innernav */}

          <Hidden smDown>
            <div
              style={{
                // height: "45px",
                height: "auto",
                width: "100%",
                border: "1px solid rgba(195, 26, 127, 0.2)",
                borderRadius: "30px",
              }}
            >
              <nav
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  // marginTop: "10px",
                }}
              >
                <Link to="/" className="atag" style={{ fontSize: "1.2vw" }}>
                  <img src={home} alt="'" height={20} width={20} />
                  Home
                </Link>

                {/* Bills */}

                <Button
                  className="atag"
                  onClick={handleOpenB}
                  style={{
                    color: "brown",
                    textTransform: "capitalize",
                    fontSize: "1.2vw",
                  }}
                >
                  <img
                    src={reciept}
                    alt="'"
                    color="brown"
                    height={25}
                    width={25}
                  />
                  Bills
                </Button>
                <Modal
                  open={openB}
                  onClose={handleCloseB}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styleB}>
                    <Bill />
                  </Box>
                </Modal>

                {/* bandwidth */}
                <div>
                  <Bandwidth />
                </div>

                <a href="" className="atag" style={{ fontSize: "1.2vw" }}>
                  <img src={card} alt="'" />
                  Change Payterm
                </a>

                {/* offers */}

                <div>
                  <Offers />
                </div>
                <Button
                  style={{
                    // height: "30px",
                    height: "auto",
                    width: "auto",
                    border: "1px solid",
                    borderRadius: "30px",
                    background:
                      "linear-gradient(180deg, #730684 0%, #B50510 100%)",
                    color: "whitesmoke",
                    fontSize: "1vw",
                  }}
                >
                  New Connection
                </Button>
              </nav>
            </div>
          </Hidden>

          {/* <Hidden smUp>
            <input
              type="text"
              placeholder="Search..."
              autoComplete="on"
              style={{
                width: "140px",
                height: "30px",
                padding: "10px",
                borderRadius: "10px",
                marginLeft: "30px",
              }}
            />
          </Hidden> */}

          <span style={{ width: "6rem" }}></span>

          {/* Notification */}

          <div>
            <Notification />
          </div>

          {/* menu */}

          <div>
            <Button
              className="trans"
              onClick={handleClick}
              // sx={{ height: "20px", width: "5px" }}
            >
              <Avatar src="" />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openn}
              onClose={handleClosep}
              // MenuListProps={{
              //   "aria-labelledby": "basic-button",
              // }}
            >
              <MenuItem>
                <Profile />
              </MenuItem>
              <Button>
                <MenuItem
                  onClick={handleClosep}
                  sx={{
                    color: "brown",
                    fontSize: "1rem",
                    textTransform: "capitalize",
                  }}
                >
                  My Menu
                </MenuItem>
              </Button>{" "}
              <br />
              <Button sx={{ padding: "0.5px" }}>
                <MenuItem
                  // onClick={handleClosep}
                  sx={{ color: "brown", fontSize: "1rem" }}
                >
                  <Referal />
                </MenuItem>
              </Button>
              <MenuItem>
                <Logout />
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Hidden smDown>
        <Drawer variant="permanent" open={open} className="drawer">
          <DrawerHeader sx={{ mt: "8px", mb: "8px" }}>
            <IconButton onClick={handleDrawerClose}>
              {/* {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )} */}
              <img src={bglogo} alt="" height={48} width={200} />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List
            className="list"
            sx={{ "::-webkit-scrollbar": { width: "5px" } }}
          >
            {["Plans", "Data Usage"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.3,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                      // padding: 0,
                      // px:'2.3'
                    }}
                  >
                    {index % 2 === 0 ? (
                      <GridViewOutlined
                        className="grid"
                        sx={{ height: "38px", width: "38px", color: "brown" }}
                      />
                    ) : (
                      <Link to={"/Datausage"}>
                        <img src={data} />
                      </Link>
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List className="list">
            {["Setting", "About us"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.4,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? (
                      <Link to={"/Setting"}>
                        <img src={setting} />
                      </Link>
                    ) : (
                      <img src={about} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List className="list">
            {["Privacy Policy", "Speed Test"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{ display: "block", marginTop: "0px", marginBottom: "0px" }}
              >
                <ListItemButton
                  sx={{
                    Height: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 1.7,
                    // marginBottom: 0,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? (
                      <Link to={"/Agreement"}>
                        <img src={privacy} />
                      </Link>
                    ) : (
                      <Link to={"/Speed"}>
                        <SpeedIcon
                          style={{
                            height: "33px",
                            width: "33px",
                            color: "brown",
                          }}
                        />
                      </Link>
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: open ? 2 : 0, mt: "0px" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List className="list">
            {["Log out"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    Height: 48,
                    justifyContent: open ? "initial" : "center",
                    // mt:0,
                    px: 2.6,

                    gap: "11px",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: openn ? 2 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {/* {index % 2 === 0 ? (<img src={logout} />) : (<img src={logout} />)} */}
                    <Link to="/logout">
                      {" "}
                      <img src={logout} alt="" height={30} width={29} />
                    </Link>
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 2 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List className="list">
            {["Customer care"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    background:
                      "linear-gradient(180deg, #730684 0%, #B50505 100%)",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      // justifyContent: "center",
                      justifyContent: "normal",
                    }}
                  >
                    {/* {index % 2 === 0 ? (<ForumOutlinedIcon />) : (<ForumOutlinedIcon />)} */}

                    <ForumOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Hidden>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1, width: "100%", overflow: "hidden" }}
      >
        <DrawerHeader />
        <Stack
          direction={{ xs: "column", sm: "column", lg: "row", md: "row" }}
          // width="100%"
          marginTop={10}
          spacing={2}
        >
          <Grid xs={10} sm={10} md={6} lg={6}>
            <Feed />
          </Grid>
          <Grid xs={10} sm={10} md={6} lg={6}>
            <Rightbar />
          </Grid>
        </Stack>
      </Box>
    </Box>
    </div>
  );
}
