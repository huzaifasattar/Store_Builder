import { Box, Typography } from "@mui/material";
import BtnOption from "./btnOption";

const BtnVariant = ({ productList, changePrice, variantName }) => {
  return productList.varients.map((item, index) => {
    return (
      <Box component={"div"} style={{ textAlign: "center" }} key={index}>
        <Typography fontSize={"20px"} fontWeight={600}>
          {item.type}
        </Typography>
        {
          <BtnOption
            option={item.option}
            type={item.type}
            index={index}
            changePrice={changePrice}
            variantName={variantName}
          />
        }
      </Box>
    );
  });
};
export default BtnVariant;
