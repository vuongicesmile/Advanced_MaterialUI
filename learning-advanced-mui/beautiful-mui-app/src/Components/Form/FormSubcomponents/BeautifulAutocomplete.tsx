import { Autocomplete, TextField } from "@mui/material";
import { minWidth } from "../../Saffold/Form/ContanctForm.tsx";

const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];

export default function BeautifulAutocomplete(
  props: {
    value: string
    onInputChange: (event: React.SyntheticEvent<Element, Event>, value: string) => void
  }
) {
  return (
    <Autocomplete
      {...props}
      options={roles}
      sx={{ minWidth: minWidth }}
      isOptionEqualToValue={(option, value) => option === value || value === ""}
      //  nếu sử dụng js thì sẽ không cần,ràng buộc điều kiện khi là rỗng hoặc empty thoi
      renderInput={(params) => {
        return (
          <TextField
            name="role"
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused": {
                color: "primary.dark"
              }
            }}
            {...params}
          />
        )
      }}
      getOptionLabel={(roleOption) => `${roleOption}`}
      // giống như một bộ lọc , khi nhập vào input thì tiến hành apply filter
      renderOption={(props, option) => {
        return (
          <li {...props}>
            {`${option}`}
          </li>
        )
      }}
      ListboxProps={{ // custom trong dropdown auuto comple , màu chữ là gì abc
    //  dùng để ignore ts 
        //@ts-ignore
        sx: {
          height: 100,
          color: "primary.dark",
          "& li.MuiAutocomplete-option:nth-child(even)": 
          { backgroundColor: "green" },
          "& li.MuiAutocomplete-option:hover": { backgroundColor: "gold" },
          "& li.MuiAutocomplete-option[aria-selected='true'].Mui-focused": { backgroundColor: "gold" }
        }
      }}
      onChange={() => { }}
    />
  )
}