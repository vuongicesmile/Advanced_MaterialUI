import React from 'react';
import { AppBar, Drawer, Toolbar, Typography, List, ListItem, Theme, useTheme } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


const drawerWidth = 240;

const themdStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer +1 // không hard cứng zindex mà lấy theo theme + 1
    }
  }
}

const simpleStyles = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none" // ẩn bóng mờ đen đi bằng cách dùng nested
    }
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(120,120,120,0.2)"
  },
  content: {
    marginLeft: drawerWidth,
    padding: 3
  }
}


// warning khi thiếu import react
export default function NavDrawer() {
  const theme = useTheme();

  const navItems = [
    { text: "Input Form" , route: "/form"},
    { text: "Contact Card Grid", route: "/gird" }
  ];
  return (
    <BrowserRouter>
    <div>
      {/*AppBar:  là thanh bên trên cùng để chuyển hướng */}
      { /* thêm chỉ mục cho AppBar */}
      <AppBar 
        position="fixed" 
        sx={themdStyles(theme).appBar} // khiến nó đè lên app drawer
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Advanced Material UI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer  // drawer có zIndex = 1200 nên nó đè lên navbar
        variant='temporary' //temporary để đáp ứng mobile respoonsive so the draw can be closed or disappereared
        open={true}
        sx={simpleStyles.drawer}
        PaperProps={{ // phần này dùng để chỉnh màu background và độ dài cho drawer.
          sx: simpleStyles.drawerPaper,
          elevation: 9 // Elevation ( độ cao: Quyền truy cập vào bóng ) 0 - 24 box shadow : hộp bóng càng nhẹ thì độ lighter lower
        }}
      >
        {/* đẩy content xuống bên dưới */}
         <Toolbar></Toolbar>  
        <List>
          {navItems.map((nav, index) => (
            <ListItem key={index}><Link to={nav.route}> {nav.text}</Link></ListItem>
          ))}
        </List>
      </Drawer>
      <main style={simpleStyles.content} className='vuongvyibg'>
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

