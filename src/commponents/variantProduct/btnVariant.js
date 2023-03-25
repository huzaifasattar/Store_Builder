import { Box, Typography } from "@mui/material";
import BtnOption from "./btnOption";

const BtnVariant = ({productList}) => {
  return (
    
      productList.varients.map((item, i) => {
        return (
          <Box component={"div"} style={{textAlign:"center"}} key={i}>
            <Typography fontSize={"20px"} fontWeight={600}>{item.type }</Typography>
         { <BtnOption/>}
        </Box>
      )
    })
  )
};
export default BtnVariant;
