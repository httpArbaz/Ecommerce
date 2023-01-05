import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddHomeWorkSharpIcon from "@mui/icons-material/AddHomeWorkSharp";
import LocalGroceryStoreSharpIcon from "@mui/icons-material/LocalGroceryStoreSharp";
import AutoAwesomeSharpIcon from "@mui/icons-material/AutoAwesomeSharp";
import ConnectWithoutContactSharpIcon from "@mui/icons-material/ConnectWithoutContactSharp";
import "./navbar.css";
import { Link } from "react-router-dom";
import Etrolly from "../../content/images/etr.png";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import { useSelector } from "react-redux";
import { selectCount } from "../../features/counter/counterSlice";

function Hamburger() {
  const [open, setState] = useState(false);
  const { value } = useSelector(selectCount);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (
    <div >
      <Container
        style={{ position: "absolute", zIndex: "1" }}
        maxWidth="lg"
        disableGutters="true"
      >
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            width: "95%",
            paddingRight: "0px",
            background: "transparent",
            position: "absolute",
            justifyContent: "space-between",
            alignItems: "center",
            Margin: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "10px" }}>
              <Link to="/cart">
              <AddShoppingCartSharpIcon
                className="anchor"
                style={{
                  color: "#406caa",
                  // border: "2px solid",
                  padding: "3px",
                  marginTop:"4px"
                }}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: "40px",
                  marginLeft: "2.5vh",
                  color: "black",
                  fontSize: "16px",
                  fontWeight: "bolder",
                }}
              >
                {value.length}
              </p>
              </Link>
            </div>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              style={{
                display: "flex",
                //   width: "100%",
                justifyContent: "space-between",
                flexDirection: "row-reverse",
                width: "auto",
                color: "#406caa",
              }}
              sx={{
                mr: 2,
                display: {
                  md: "block",
                },
              }}
            >
              <div style={{ display: "flex", alignItems: "self-end" }}>
                <MenuIcon sx={{ fontSize: "40px" }} />
              </div>
            </IconButton>
          </div>

          {/* <h2>Etrolly</h2> */}
          <Link to="/">
          <img style={{marginLeft:"-20px"}} alt="etrolly" src={Etrolly} height={100} width={100} />
          </Link>
          {/* The outside of the drawer */}

          {/* <div style={{ backgroundColor: "white)" }}> */}
          <Drawer
            PaperProps={{
              sx: {
                backgroundColor: "white",
              },
            }}
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                // backgroundColor: "#dbc8ff"
              }}
              className="hamburgerMenu"
              style={{
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <Box>
                <IconButton sx={{ mb: 2 }}>
                  <CloseIcon onClick={toggleDrawer(false)} />
                </IconButton>

                <Divider sx={{ mb: 2 }} />

                <Box sx={{ mb: 2 }}>

                  <Link  onClick={toggleDrawer(false)}     style={{ textDecoration: "none", color: "black" }} to="/">
                  <ListItemButton>
                    <ListItemIcon>
                      <AddHomeWorkSharpIcon sx={{ color: "darkGray" }} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                  </Link>

                  <Link
                  onClick={toggleDrawer(false)}
                    style={{ textDecoration: "none", color: "black" }}
                    to="/store"
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <LocalGroceryStoreSharpIcon
                          sx={{ color: "darkGray" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Store" />
                    </ListItemButton>
                  </Link>
                  <Link
                  onClick={toggleDrawer(false)}
                    style={{ textDecoration: "none", color: "black" }}
                    to="/about"
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <AutoAwesomeSharpIcon sx={{ color: "darkGray" }} />
                      </ListItemIcon>
                      <ListItemText primary="About Us" />
                    </ListItemButton>
                  </Link>
                  <Link
                  onClick={toggleDrawer(false)}
                    style={{ textDecoration: "none", color: "black" }}
                    to="/contact"
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <ConnectWithoutContactSharpIcon
                          sx={{ color: "darkGray" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Contact Us" />
                    </ListItemButton>
                  </Link>
                </Box>
              </Box>
              <img src={Etrolly} alt="etrolly" height={100} width={100}/>
              {/* <h2>Etrolly</h2> */}
              {/* {search} */}
            </Box>
          </Drawer>
          {/* </div> */}
        </Toolbar>
      </Container>
    </div>
  );
}

export default Hamburger;
