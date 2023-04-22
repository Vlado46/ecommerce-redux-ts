import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { styled } from "@mui/material/styles";
import { BadgeProps } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Stack, Typography, Paper, IconButton, Badge } from "@mui/material";

const Navbar = () => {
  const num = useSelector((state: RootState) => state.badge.value);

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -2,
      top: 2,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <Paper
      elevation={5}
      square={true}
      sx={{
        backgroundColor: "#3E54AC",
        position: "sticky",
        top: 0,
        display: "flex",
        zIndex: 1,
      }}
    >
      <Stack
        direction="row"
        paddingY=".5rem"
        paddingX="3rem"
        flexGrow="1"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          gap="2rem"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Link to="/" className="navbar-link">
            <Typography>Home</Typography>
          </Link>
          <Link to="/about" className="navbar-link">
            <Typography>About</Typography>
          </Link>
        </Stack>
        <Link to="/cart">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={num} color="secondary">
              <ShoppingCartIcon sx={{ color: "white" }} />
            </StyledBadge>
          </IconButton>
        </Link>
      </Stack>
    </Paper>
  );
};

export default Navbar;
