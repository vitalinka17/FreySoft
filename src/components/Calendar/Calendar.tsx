import React from "react";
import { SxProps } from "@mui/system";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { Box } from "@mui/material";

const Calendar = () => {
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar sx={calendarStyled} />
      </LocalizationProvider>
    </Box>
  );
};
const calendarStyled: SxProps = {
  backgroundColor: "mediumGrey.main",
  width: "360px",
  height: "200px",
  borderRadius: "21px",
  overflow: "scroll",
};
export default Calendar;
