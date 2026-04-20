// import { useState } from "react";
// import { Link as RouterLink, useLocation } from "react-router-dom";
// import {
//   AppBar,
//   Box,
//   Button,
//   Container,
//   Drawer,
//   IconButton,
//   Stack,
//   Toolbar,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
// import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

// const navItems = [
//   { label: "الرئيسية", to: "/" },
//   { label: "من نحن", to: "/about" },
//   { label: "خدماتنا", to: "/services" },
//   { label: "تواصل معنا", to: "/contact" },
// ];

// export default function Navbar({ mode, toggleMode }) {
//   const theme = useTheme();
//   const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
//   const location = useLocation();
//   const [open, setOpen] = useState(false);

//   return (
//     <AppBar position="sticky">
//       <Container>
//         <Toolbar sx={{ minHeight: 80, gap: 2 }}>
//           <Box sx={{ flexGrow: 1 }}>
//             <Typography variant="h5" sx={{ fontWeight: 900 }}>
//               سما الأمل
//             </Typography>
//             <Typography
//               className="english-brand"
//               sx={{ fontSize: 18, opacity: 0.85, lineHeight: 1.1 }}
//             >
//               SAMA AL AMIL
//             </Typography>
//           </Box>

//           {isMdUp ? (
//             <Stack direction="row" spacing={1} alignItems="center">
//               {navItems.map((item) => {
//                 const active = location.pathname === item.to;
//                 return (
//                   <Button
//                     key={item.to}
//                     component={RouterLink}
//                     to={item.to}
//                     color={active ? "primary" : "inherit"}
//                     variant={active ? "contained" : "text"}
//                   >
//                     {item.label}
//                   </Button>
//                 );
//               })}

//               <IconButton onClick={toggleMode} color="inherit">
//                 {mode === "light" ? (
//                   <DarkModeRoundedIcon />
//                 ) : (
//                   <LightModeRoundedIcon />
//                 )}
//               </IconButton>
//             </Stack>
//           ) : (
//             <>
//               <IconButton onClick={toggleMode} color="inherit">
//                 {mode === "light" ? (
//                   <DarkModeRoundedIcon />
//                 ) : (
//                   <LightModeRoundedIcon />
//                 )}
//               </IconButton>

//               <IconButton onClick={() => setOpen(true)} color="inherit">
//                 <MenuRoundedIcon />
//               </IconButton>

//               <Drawer
//                 anchor="left"
//                 open={open}
//                 onClose={() => setOpen(false)}
//                 PaperProps={{
//                   sx: {
//                     width: 280,
//                     p: 2,
//                     bgcolor: "background.paper",
//                   },
//                 }}
//               >
//                 <Stack spacing={1.25}>
//                   {navItems.map((item) => {
//                     const active = location.pathname === item.to;
//                     return (
//                       <Button
//                         key={item.to}
//                         component={RouterLink}
//                         to={item.to}
//                         onClick={() => setOpen(false)}
//                         color={active ? "primary" : "inherit"}
//                         variant={active ? "contained" : "text"}
//                         sx={{ justifyContent: "flex-start" }}
//                       >
//                         {item.label}
//                       </Button>
//                     );
//                   })}
//                 </Stack>
//               </Drawer>
//             </>
//           )}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

const navItems = [
  { label: "الرئيسية", to: "/" },
  { label: "من نحن", to: "/about" },
  { label: "خدماتنا", to: "/services" },
  { label: "تواصل معنا", to: "/contact" },
];

export default function Navbar({ mode, toggleMode }) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar sx={{ minHeight: 80, gap: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 900 }}>
              سمـــا الأمل
            </Typography>
            <Typography
              className="english-brand"
              sx={{ fontSize: 18, opacity: 0.85, lineHeight: 1.1 }}
            >
              SAMA AL AMIL
            </Typography>
          </Box>

          {isMdUp ? (
            <Stack direction="row" spacing={1} alignItems="center">
              {navItems.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <Button
                    key={item.to}
                    component={RouterLink}
                    to={item.to}
                    color={active ? "primary" : "inherit"}
                    variant={active ? "contained" : "text"}
                  >
                    {item.label}
                  </Button>
                );
              })}

              <IconButton onClick={toggleMode} color="inherit">
                {mode === "light" ? (
                  <DarkModeRoundedIcon />
                ) : (
                  <LightModeRoundedIcon />
                )}
              </IconButton>
            </Stack>
          ) : (
            <>
              <IconButton onClick={toggleMode} color="inherit">
                {mode === "light" ? (
                  <DarkModeRoundedIcon />
                ) : (
                  <LightModeRoundedIcon />
                )}
              </IconButton>

              <IconButton onClick={() => setOpen(true)} color="inherit">
                <MenuRoundedIcon />
              </IconButton>

              <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                  sx: {
                    width: 280,
                    p: 2,
                    bgcolor: "background.paper",
                  },
                }}
              >
                <Stack spacing={1.25}>
                  {navItems.map((item) => {
                    const active = location.pathname === item.to;
                    return (
                      <Button
                        key={item.to}
                        component={RouterLink}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        color={active ? "primary" : "inherit"}
                        variant={active ? "contained" : "text"}
                        sx={{ justifyContent: "flex-start" }}
                      >
                        {item.label}
                      </Button>
                    );
                  })}
                </Stack>
              </Drawer>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
