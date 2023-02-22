import { Box, Typography } from "@mui/material";
import React from "react";
import StepperCard from "./StepperCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import FormCard from "./FormCard";

const Card = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          fontSize="20px"
          paddingTop="30px"
          width="25vw"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ChevronLeftIcon
            style={{ paddingRight: "10px", cursor: "pointer" }}
          />
          New Appointment Request
        </Typography>
        <Typography fontSize="13px" paddingLeft="90px" color="grey">
          Some great coverage for less
        </Typography>
        <Box width="60vw" paddingLeft="150px" paddingTop="80px">
          <StepperCard />
        </Box>
        <Box paddingTop="60px" paddingLeft="90px">
          <FormCard />
        </Box>
      </Box>
    </>
  );
};

export default Card;
