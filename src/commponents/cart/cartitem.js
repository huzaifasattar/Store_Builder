import { Typography, Box, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector,useDispatch } from "react-redux";
import { useMemo } from "react";
import { subQuantity,removeCart,addQuantity } from "../redux/state2";
const CartItem = ({item,index}) => {

    const dispatch = useDispatch();
    const CartCount = useSelector((state) => state.CartState.data);
    
    const amount = useMemo(() => {
        return item.price * item.quantity
    }, [item.quantity])
  return (
    <>
      <Box mt={"5px"} display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Button 
                                onClick={() => dispatch(removeCart({ index }))}>
            <ClearIcon />
          </Button>
          <Typography
            component={"span"}
            marginLeft={"30px"}
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textAlign: "center",
            }}
          >
           {item.name}
          </Typography>
          {item.variantName.map((val,index)=><Typography
            component={"span"}
            marginLeft={"30px"}
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textAlign: "center",
            }}
              key = {`${index}-${val}`}
          >
            {val}
          </Typography>)}
        </Box>
        <Box>
          <Button
            component={"span"}
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textAlign: "center",
            }}
                disabled      
          >
            x Unitprice Rs.{item.price}
          </Button>
          <Typography component={"span"} marginLeft={"30px"}>
            {" "}
            <Button variant="outlined" onClick={() => dispatch(subQuantity({ index }))}>-</Button>
            <Button variant="contained"  disabled>
            {CartCount[index].quantity}
            </Button>
            <Button variant="outlined"
                                onClick={() => dispatch(addQuantity({ index }))}>+</Button>
          </Typography>
        </Box>
        <Typography
          component={"span"}
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "inherit",
            textAlign: "center",
            marginLeft: "15px",
          }}
        >
          Rs.{amount}
        </Typography>
      </Box>
    </>
  );
};

export default CartItem;
