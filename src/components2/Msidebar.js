import * as React from 'react';
import Box from '@mui/material/Box';
import { List,Divider } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import logo from './images/giglog.png'
import GridViewOutlined from "@mui/icons-material/GridViewOutlined";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";import data from "./images/Data Backup.png";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import privacy from "./images/priivacy1.png";
import speed from "./images/Speed.png";
import logout from "./images/logoutcurve.png";
import share from "./images/share.png";
import setting from "./images/setting.png";
import about from "./images/about.svg";
import Logout from './Logout';
import SpeedIcon from "@mui/icons-material/Speed";




const style = {
  position: 'absolute',
  top:'145px',
  left:'5px',
  // top: '-190px',
  // left: '25%',
  // transform: 'translate(-50%, -50%)',
  width: 300,
  // height:'auto',
  // overFlow:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  fontFamily:'Poppins',
  fontSize:'2rem',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  // alignItems:'center'
};

export default function Msidebar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><img src={logo} height={55} width={50} alt="" /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{display:'flex',justifyContent:'center',alignItems:'center'}}
      >
        <Box sx={style}>
        <List>
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
          <List >
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
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    
                    <Link to={"/logout"}>
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
                    <ForumOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Modal>
    </div>
  );
}
