import React, { useState } from 'react';
import { Autocomplete, Button, FormControl, FormControlLabel, FormGroup, FormLabel, ListItemText, Menu, MenuItem, Paper, RadioGroup, Select, Stack, TextField, Radio, AutocompleteChangeReason, Dialog, Alert, AlertTitle } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { contactData, FormValues } from '../../../Data/ContactData.tsx';
import BeautifulTextField from '../../Form/FormSubcomponents/BeautifulTextField.tsx';
import BeautifulAutocomplete from '../../Form/FormSubcomponents/BeautifulAutocomplete.tsx';


const roles = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];
const skills = ["Software Dev", "Architect", "Designer", "Business Analyst"];
const defaultPreference = "Work From Home";
export const minWidth = 200;

export default function ContactForm() {

  const today = new Date();
  const getDefaultFormValues = () => {
    return { id: contactData.length + 1, name: '', role: '', skills: [], startDate: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`, preference: defaultPreference };
  }
  //  khai báo state với interface
  const [FormValues, setFormValues] = useState<FormValues>(
    getDefaultFormValues()
  );

  const [alertOpen, setAlertOpen] = useState(false); 

  const handleTextFieldChange = ( 
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> // import inteface của event
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...FormValues,  // return về 1 objt gồm id , name, role, skill, startDate
      [name]: value  // rest ra rồi repplace
    });
  }

  const handleAutoCompleteChange = (
    event: React.SyntheticEvent<Element, Event>,
    value:string,
  ) => {
    setFormValues({
      ...FormValues,
      role: value || ""
    })
  }

  const handleSelectChange = (
    event
  ) => {
    setFormValues({
      ...FormValues,
      skills: typeof event.target.value === "string" ? event.target.value .split(", ") : event.target.value
    })
  }

  const handleClearClick = () => {
    clearValues();
  }  
  
  const clearValues = () => {
    setFormValues({...getDefaultFormValues()});
    console.log(FormValues);
  }

  const handleSubmit = () => {
    console.log(contactData);
    console.log(FormValues);
    
    contactData.push(FormValues)
    setAlertOpen(true)
  }

  const handleAlertClick = () => {
    setAlertOpen(false)
  }

  return (
    <>
    <Paper>
      
      {/*  như 1 trang giấy bên ngoài, chỉ yếu thêm bóng và background */}
      <form>
        <FormControl>
          <FormGroup
            row
            sx={{
              padding: 2,
              justifyContent: "space-around",
            }}
          >
            {/*  ô input nè */}
            <BeautifulTextField
              id="name"
              name="name"
              label="Name"
              variant='outlined' // tạo ra đường viên xung quanh thành phần, thay vì mặc định phẳng
              sx={{ minWidth: 300, marginRight: 2}}
              value={FormValues.name}
              onChange={handleTextFieldChange} // onchange đầu tiên của input
            />
            {/* -------- */}
            <BeautifulAutocomplete 
            value={FormValues.role || ""}
            onInputChange={() => {}}
            />
            {/* ------------------------------------ */}
            {/*  dropdown input cho phép xóa */}
            <Autocomplete  // tạo ra danh sách các tùy chọn dựa trên mảng roles. người dùng có thể nhập vào ô và lựa chọn một trong các vai trò có sẵn
              // trường nhập liệu này được hiển thị dưới dạng textField
              options={roles} // mảng
              sx={{ minWidth: 300, marginRight: 2}}
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
              value={FormValues.role || ""}
              isOptionEqualToValue={(option, value) => option === value || value === ""}
              onInputChange={handleAutoCompleteChange}
            />
          </FormGroup>
          {/* ------------------------------------ */}
          {/* dropdown chỉ cho phép chọn và chọn lại */}
          <FormGroup
            row
            sx={{
              padding: 2,
              justifyContent: "space-around",
            }}
          >
            <Select
              id="skill-select"
              renderValue={(select: string[]) => select?.join(", ")}
              sx={{ minWidth: 300, marginRight: 2}}
              value={FormValues.skills || ""}
              onChange={handleSelectChange}
            >
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
                // value={FormValues.startDate}
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
            sx={{
              padding: 2,
              justifyContent: "space-around",
            }}
          >
            <FormGroup>
              <FormLabel component={"legend"}>
                Work Preference
              </FormLabel>
            </FormGroup>
            <RadioGroup
              id="preference-type-radio"
              name="preference"
              value={FormValues.preference}
            >
              <FormControlLabel
                control={<Radio />}
                label="Work From Home"
                value={FormValues.preference}
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
              <Button onClick={handleSubmit}>Submit</Button>
              <Button onClick={handleClearClick}>Clear</Button>
            </Stack>
          </FormGroup>
        </FormControl>
      </form>
    </Paper>
    <Dialog open={alertOpen} onClose={handleAlertClick}>
      <Alert onClose={handleAlertClick}>
        <AlertTitle> 
          Success !
        </AlertTitle>
        Form Submitted
      </Alert>
    </Dialog>
    </>
  );
}
