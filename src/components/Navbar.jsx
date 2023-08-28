import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => (
  //sx for styling material ui component
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
      borderBottom: "1px solid #3d3d3d",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <p style={{ color: "#f31503", fontWeight: "bolder", fontSize: "1.5rem" }}>
        Youtube 2.0
      </p>
      {/* <img src={logo} alt="logo" height={45} /> */}
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
