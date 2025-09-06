import {
  Box,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  styled,
  useTheme,
  Typography,

} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { alpha } from "@mui/material/styles";
import { Delete } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ReactCountryFlag from "react-country-flag";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#fff",   
  color: theme.palette.grey[500],
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 15,
  minWidth:350,
  maxWidth:370,
  backgroundColor: alpha(theme.palette.grey[500], 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[500], 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const TopBar = ({ open, handleDrawerOpen, setMode }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box flexGrow={1} />

        <Stack direction={"row"}>

          <IconButton color="inherit" onClick={() => navigate("mail")}>
            <MailOutlineIcon />
          </IconButton>

          <IconButton color="inherit">
            <NotificationsOutlinedIcon />
          </IconButton>
          

          

          <IconButton color="inherit"
           sx={{
      marginRight :2,}}
      >
            <Person2OutlinedIcon />
            <div style={{ display: "flex", gap: "15px" }}>
          
          <ReactCountryFlag 
          countryCode="US" svg style={{ width: "1.5em",marginRight:"4", height: "1.5em" }} />
        
      <ReactCountryFlag countryCode="EG" svg style={{ width: "1.5em",marginLeft:"4", height: "1.5em" }} />
      </div>
      <Typography
       align="center"
    sx={{
      fontSize: 15,
      marginLeft :2,
      transition: "0.25s",
      overflow: "hidden",   
      whiteSpace: "nowrap",
    }} 
      >
        
        Randa Erfan
      </Typography>
      </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
