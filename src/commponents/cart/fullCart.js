import { Box, Container, Typography } from "@mui/material"
import CartItem from "./cartitem"
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

const Cart = () => {
    const addToCart = useSelector((state) => state.CartState.data);

    const total = useMemo(() => {
        let amountTotal = 0
        addToCart.forEach((item) => {
            amountTotal += item.price * item.quantity
        })
        return amountTotal
    }, [addToCart])
    useEffect(() => {
        console.log(addToCart)
   },[])
    
    return (
        <Container>
                <Box mt={"20px"}>
          <Typography
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#1976d2",
              textDecoration: "none",
            }}
          >
            CART
          </Typography>
        </Box>
            
            {addToCart && addToCart.map((item, index) =>
                    <CartItem
                        key={item.id}
                        index={index}
                        item={item}
                    />
                )}
            <Box display={'flex'} justifyContent={'end'} mt={'20px'}>
                <Typography sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textAlign: "center",
            }}>{addToCart.length ? `Total: Rs.${total}/-` : ''}</Typography>
            </Box>

        </Container>
    )
}
export default Cart