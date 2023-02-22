import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import PinDropIcon from "@mui/icons-material/PinDrop";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';

const SideBar = () => {
  return (
    <Box
      sx={{
        width: "20vw",
        height: "98vh",
        backgroundColor: "#152238",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
      }}
    >
      <Typography
        color="gold"
        style={{
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "25px",
          fontWeight:"bold"
        }}
      >
      <OfflineBoltIcon/>
        Beinsurance
      </Typography>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: "75px",
          flexDirection: "column",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 80, height: 80 }}
        />
        <Typography paddingTop="15px" color="white" fontSize="26px">
          Jacob Jones
        </Typography>
        <Box
          paddingTop="30px"
          display="flex"
          flexDirection="column"
          paddingRight="40px"
        >
          <Typography
            color="grey"
            display="flex"
            flexDirection="row"
            paddingBottom="15px"
          >
            <EmailIcon />
            &nbsp;&nbsp;&nbsp;jackson.jb@gmail.com
          </Typography>
          <Typography
            color="grey"
            display="flex"
            flexDirection="row"
            paddingBottom="15px"
          >
            <CallIcon />
            &nbsp;&nbsp;&nbsp;(254)879-9085
          </Typography>
          <Typography
            color="grey"
            display="flex"
            flexDirection="row"
            paddingBottom="15px"
          >
            <PinDropIcon />
            &nbsp;&nbsp;&nbsp;rancheivew, clifornia,20213
          </Typography>
          <Typography
            color="grey"
            display="flex"
            flexDirection="row"
            paddingBottom="15px"
          >
            <AccountCircleIcon />
            &nbsp;&nbsp;&nbsp;CId: 123456734566
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
