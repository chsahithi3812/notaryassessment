import { Box, TextField, Divider, Typography } from "@mui/material";
import React from "react";

const FormCard = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        paddingLeft="50px"
      >
        <Typography paddingLeft="50px" paddingBottom="10px">
          Signer Details
        </Typography>
        <Divider style={{ paddingBottom: "2" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TextField label="Full Name" />
          <TextField label="Phone Number" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "167px",
          }}
        >
          <TextField label="Email" />
        </div>

        <br />

        <Typography paddingLeft="50px" paddingBottom="10px">
          Title Company Details
        </Typography>
        <Divider sytle={{ paddingBottom: "2" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TextField label="Company Name" />
          <TextField label="Agent Name" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TextField label="Email" />
          <TextField label="Phone Number" />
        </div>
        <Typography paddingLeft="50px" paddingBottom="10px">
          Order Info
        </Typography>
        <Divider style={{ paddingBottom: "2" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingBottom: "40px",
          }}
        >
          <TextField label="Loan Number" />
          <TextField label="Property Address" />
        </div>
        <Typography paddingLeft="50px" paddingBottom="10px">
         Signing Location
        </Typography>
        <Divider style={{ paddingBottom: "2" }} />
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <TextField 
          style={{
            marginLeft:"170px",
            width:"400px"
          }}
          label="Enter Your Signing Location" />

          <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}>
          <TextField label="Date" />
          <TextField label="Time" />
          </div>
          

        </div>
      </Box>
    </>
  );
};

export default FormCard;
