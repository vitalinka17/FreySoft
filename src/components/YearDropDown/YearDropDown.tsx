import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";

function YearDropDown() {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 10;
  const years = Array.from({ length: 10 }, (_, index) => startYear + index);
  const [year, setYear] = React.useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof year>) => {
    const {
      target: { value },
    } = event;
    setYear(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <FormControl
      sx={{
        m: 1,
        width: "max-content",
        mt: 3,
        marginBottom: "20px",
      }}
    >
      <Select
        multiple
        displayEmpty
        value={year}
        sx={{
          backgroundColor: "primary.main",
          height: "36px",
          borderRadius: "12px",
          ".css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
            fontSize: "25px",
            color: "white.main",
          },
        }}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <em
                style={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: "13px",
                }}
              >
                Year - {currentYear}
              </em>
            );
          }

          return selected.join(", ");
        }}
        inputProps={{ "aria-label": "Without label" }}
      >
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
export default YearDropDown;
