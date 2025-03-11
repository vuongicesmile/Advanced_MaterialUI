import React from 'react';
import { AppBar, Drawer, Toolbar, Typography, List, ListItem } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// warning khi thiếu import react
export default function NavDrawer() {
  const navItems = [
    { text: "Input Form" , route: "/form"},
    { text: "Contact Card Grid", route: "/gird" }
  ];
  return (
    <BrowserRouter>
    <div>
      {/*AppBar:  là thanh bên trên cùng để chuyển hướng */}
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Advanced Material UI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer  // drawer có zIndex = 1200 nên nó đè lên navbar
        variant='temporary' //temporary để đáp ứng mobile respoonsive so the draw can be closed or disappereared
        open={true}
      >
        <List>
          {navItems.map((nav, index) => (
            <ListItem key={index}><Link to={nav.route}> {nav.text}</Link></ListItem>
          ))}
        </List>
      </Drawer>
      <main>
        <Routes>
          <Route path={"/"} element={<>hehe</>}></Route>
          <Route path={"/form"} element={<>form ne</>}></Route>
          <Route path={"/gird"} element={<>gird ne</>}></Route>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

