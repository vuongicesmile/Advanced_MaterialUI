import { TextField, TextFieldProps } from "@mui/material";
import { minWidth } from "../../Saffold/Form/ContanctForm.tsx";

export default function BeautifulTextField(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      sx={{
        minWidth: minWidth,
        marginRight: 2,
        marginBottom: { xs: 2, md: 0 },
        //zIndex: "drawer",
        //"& .MuiInputBase-root": { height: 80 },
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            // fielset dùng để nhóm các phần tử form lại với nhau.
            borderColor: "primary.dark"
          }
        },
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: "orange"
          }
        }
      }}
    />
  )
}