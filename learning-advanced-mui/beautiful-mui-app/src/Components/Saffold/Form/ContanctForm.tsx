import React from 'react';
import { Autocomplete, Button, FormControl, FormControlLabel, FormGroup, FormLabel, ListItemText, Menu, MenuItem, Paper, RadioGroup, Select, Stack, TextField, Radio } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const roles = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];
const skills = ["Software Dev", "Architect", "Designer", "Business Analyst"];

export default function ContactForm() {
  return (
    <Paper>
      {/*  như 1 trang giấy bên ngoài, chỉ yếu thêm bóng và background */}
      <form>
        <FormControl>
          <FormGroup
            row
          >
            {/*  ô input nè */}
            <TextField
              id="name"
              name="name"
              label="Nameeee"
              variant='outlined' // tạo ra đường viên xung quanh thành phần, thay vì mặc định phẳng
            />
            {/* ------------------------------------ */}
            {/*  dropdown input cho phép xóa */}
            <Autocomplete  // tạo ra danh sách các tùy chọn dựa trên mảng roles. người dùng có thể nhập vào ô và lựa chọn một trong các vai trò có sẵn
              // trường nhập liệu này được hiển thị dưới dạng textField
              options={roles} // mảng
              renderInput={(params) => { // hiển thị các phần tử đầu vào (input field) của autocomplete
                // params chứa các thuộc tính cần thiết để tạo ra trường nhập liệu textField cho autoComplete
                return (
                  <TextField
                    name="role"
                    {...params}
                  />
                )
              }}
              getOptionLabel={(roleOption) => `${roleOption}`}
              renderOption={(props, option) => {
                return (
                  <li {...props}>
                    {`${option}`}
                  </li>
                )
              }}
            />
          </FormGroup>
          {/* ------------------------------------ */}
          {/* dropdown chỉ cho phép chọn và chọn lại */}
          <FormGroup
            row
          >
            <Select>
              {skills.map((skillName) => {
                return (
                  <MenuItem value={skillName} key={skillName}>
                    <ListItemText primary={skillName} />
                  </MenuItem>
                )
              })}
            </Select>
            {/* datepicker input */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Date"
                inputFormat="MM/DD/YYYY"
                renderInput={(params) => {
                  return <TextField {...params} />
                }}
              // value={"abcv"}
              // onChange={() => { }}
              />
            </LocalizationProvider>
          </FormGroup>

          {/*  radio selection */}
          {/* ------------------------------------ */}
          <FormGroup
            row
          >
            <FormGroup>
              <FormLabel component={"legend"}>
                Work Preference
              </FormLabel>
            </FormGroup>
            <RadioGroup
              id="preference-type-radio"
              name="preference"
              value="Work From Home"
            >
              <FormControlLabel
                control={<Radio />}
                label="Work From Home"
                value="Work From Home"
              />
              <FormControlLabel
                control={<Radio />}
                label="Hybrid"
                value="Hybrid"
              />
              <FormControlLabel
                control={<Radio />}
                label="In Office"
                value="In Office"
              />
            </RadioGroup>
            <Stack>
              <Button>Submit</Button>
              <Button>Clear</Button>
            </Stack>
          </FormGroup>
        </FormControl>
      </form>
    </Paper>
  );
}
