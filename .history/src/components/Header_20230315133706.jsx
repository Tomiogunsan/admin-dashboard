import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography variant='h2' color={colors.grey[100]}>{title}</Typography>
      <Typography>{subtitle}</Typography>
    </Box>
  );
};

export default Header;
