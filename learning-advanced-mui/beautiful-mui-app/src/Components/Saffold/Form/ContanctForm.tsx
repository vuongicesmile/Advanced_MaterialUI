import React from 'react';
import { Autocomplete, FormControl, FormGroup, Paper, Select, TextField } from "@mui/material";

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
            <TextField 
              id="name"
              name="name"
              label="Nameeee"
              variant='outlined' // tạo ra đường viên xung quanh thành phần, thay vì mặc định phẳng
             />
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
             renderOption={(props,option) => {
              return (
                <li {...props}>
                  {`${option}`}
                </li>
              )
             }}
             />
          </FormGroup>
        </FormControl>
      </form>
    </Paper>
  );
}
