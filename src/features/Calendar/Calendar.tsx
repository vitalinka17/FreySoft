import React from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { Box } from "@mui/material";

const Calendar = () => {
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar
          sx={{
            backgroundColor: "mediumGrey.main",
            width: "360px",
            height: "200px",
            borderRadius: "21px",
            overflow: "scroll",
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default Calendar;
