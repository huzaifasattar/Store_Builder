import { Box, Typography } from "@mui/material";
import BtnOption from "./btnOption";

const BtnVariant = () => {
  return (
    <Box component={"div"} style={{textAlign:"center"}}>
      <Typography>type btn</Typography>
      <BtnOption/>
    </Box>
  );
};
export default BtnVariant;
