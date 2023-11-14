import React, { useState } from "react";
import gridicon from "./images/gridicons_add.png";
import { Box, Typography, Avatar, Button, Divider } from "@mui/material";
import banner from "./images/banner.png";
import "./Style.css";

const Rightbar = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <Box
      bgcolor={"white"}
      flex={2}
      // p={1}
      width="100%"
      borderRadius={5}
      padding={2}
    >
      {/* <Box width="90%"> */}
        <Typography fontSize="1.6rem" color={"brown"}>
          Add'zz
        </Typography>
        <a href="https://www.mindstaytechnology.in/">
          <img className="animation"></img>
        </a>
      {/* </Box> */}

      <Box className="box" p={1} fontFamily={"Poppins"} width={"100%"}>
        <p style={{ fontSize: "1.8rem", color: "brown" }}>Popular Packages</p>
        <div style={{ display: "flex", justifyContent: "space-between" ,width:'100%'}}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
              fontFamily: "Poppins",
            }}
          >
            <Avatar src="" />

            <Typography fontSize="1rem" fontFamily={"Poppins"}>
              Unlimited GB 100MBPS+8000 Grocery Points
            </Typography>
          </div>
          <Button>
            <img src={gridicon} alt="" width={45} height={50} />
          </Button>
        </div>{" "}
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Avatar src="" />

            <Typography fontSize="1rem" fontFamily={"Poppins"}>
              Unlimited GB 100MBPS+8000 Grocery Points
            </Typography>
          </div>
          <Button>
            <img src={gridicon} alt="" width={45} height={50} />
          </Button>
        </div>{" "}
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Avatar src="" />

            <Typography fontSize="1rem" fontFamily={"Poppins"}>
              Unlimited GB 100MBPS+8000 Grocery Points
            </Typography>
          </div>
          <Button>
            <img src={gridicon} alt="" width={45} height={50} />
          </Button>
        </div>{" "}
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Avatar src="" />

            <Typography fontSize="1rem" fontFamily={"Poppins"}>
              Unlimited GB 100MBPS+8000 Grocery Points
            </Typography>
          </div>
          <Button>
            <img src={gridicon} alt="" width={45} height={50} />
          </Button>
        </div>{" "}
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Avatar src="" />

            <Typography fontSize="1rem" fontFamily={"Poppins"}>
              Unlimited GB 100MBPS+8000 Grocery Points
            </Typography>
          </div>
          <Button>
            <img src={gridicon} alt="" width="45vw" height="45vw" />
          </Button>
        </div>
        <Divider variant="inherit" /> <br />
        <span
          style={{
            // height: "40px",
            // background: "white",
            display: "block",
            textAlign: "center",
            // width: "100%",
          }}
        >
          {isShowMore && (
            <p>
              sapiente exercitationem odio quia, animi eos distinctio tempora,
              ipsum hic vitae modi eum nostrum id perspiciatis impedit dolores.
            </p>
          )}

          <Button onClick={toggleReadMoreLess} className="sai">
            {" "}
            {isShowMore ? "Read Less" : "Read More"}
          </Button>
        </span>
      </Box>
    </Box>
  );
};

export default Rightbar;
