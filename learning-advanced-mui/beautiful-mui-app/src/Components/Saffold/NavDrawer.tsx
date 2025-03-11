import React from 'react';
import { AppBar, Drawer, Toolbar, Typography, List, ListItem } from "@mui/material";

// warning khi thiếu import react
export default function NavDrawer() {
  const navItems = [
    { text: "Input Form" },
    { text: "Contact Card Grid" }
  ];
  return (
    <div>
      {/*  là thanh bên trên cùng để chuyển hướng */}
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Advanced Material UI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer  // drawer có zIndex = 1200 nên nó đè lên nav bar
        variant='temporary' //temporary để đáp ứng mobile respoonsive so the draw can be closed or disappereared
        open={true}
      >
        <List>
          {navItems.map((nav, index) => (
            <ListItem key={index}>{nav.text}</ListItem>
          ))}
        </List>
      </Drawer>
      <main>
        {/* Main content goes here */}
      </main>
    </div>
  );
}

