import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { minWidth } from "../../Saffold/Form/ContanctForm.tsx";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const popperSX = {
  //color: "yellow"
  "& .MuiPaper-root": {
    color: "yellow" // thay đổi màu chữ của datepicker ở ngaỳ bên tren
  },
  "& [role=grid]": {
    // backgroundColor: "green",  back groud của pop up
    // "& button": {
    //   backgroundColor: "red" // ô select bên trong
    // }
    "& button": {
      backgroundColor: "blue"
    },
    "& button.MuiPickersDay-today": {
      backgroundColor: "orange"
    },
    "& button.Mui-disabled": {
      backgroundColor: "red"
    }
  }
}

export default function BeautifulDesktopDatePicker(
  props: {
    value: string | undefined,
    onChange: (value: string | null | undefined) => void
  }
) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        {...props}
        disablePast
        label="Date"
        inputFormat="MM/DD/YYYY"
        views={["day"]}
        renderInput={(params) => {
          return <TextField {...params} sx={{ minWidth: minWidth }} />
        }}
        components={{
          // cho phép thay đổi biểu tượng của datePicker - biểu tượng bên cạnh datapicker
          //leftArrowIcon: LeftArrowIcon,
          //rightArrowIcon: RightArrowIcon,
          OpenPickerIcon: CalendarTodayIcon
        }}
        InputProps={{
          sx: { "& .MuiSvgIcon-root": { color: "primary.main" } }
        }}
        PopperProps={{
          //  thay đổi màu chữ sắ trong popu
          sx: popperSX
        }}
      />
    </LocalizationProvider>
  )
}