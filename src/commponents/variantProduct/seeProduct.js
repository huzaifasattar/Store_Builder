import * as React from "react";
import { styled } from "@mui/material/styles";
import image from "../image/store.jpeg";
import { Container, ButtonBase, Paper, Grid, Button, Box } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import BtnVariant from "./btnVariant";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSignInUser } from "../localstorage/localstorageCom";
import { subQuantity,addQuantity,addCart } from "../redux/state2";
import { nanoid } from "@reduxjs/toolkit";

const Img = styled("img")({
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  
  const pram = useParams();
  const productList = useSelector((state) => state.Products.data);
  const CartCount = useSelector((state) => state.CartState.data);
  const dispatch = useDispatch();
  const user = getSignInUser();
  const [totalPrice, setTotalPrice] = React.useState(
    productList[pram.id].price
  );
  const [variantPrices, setVariantPrices] = React.useState({});

  const [variantName, setVariantName] = React.useState([]);

  React.useEffect(() => {
    let obj = {};
    // productList[+pram.id].varients.forEach((variant) => {
    //   obj[variant.type] = 0;
    // });
    setVariantPrices((pre) => {
      return { ...obj };
    });
  }, []);

  const changePrice = (obj) => {
    variantPrices[obj.type] = obj.price;

    let total = productList[pram.id].price;

    for (let key in variantPrices) {
      total += variantPrices[key];
    }
    setTotalPrice(total);
  };
  const addToCart = () => {
    return {
      name: productList[pram.id].title,
      price: totalPrice,
      id: nanoid(),
      productId: productList[+pram.id].id,
      variantName,
      quantity: 1,
    };
    console.log(addCart)
  };

  const indexOfCartProduct = CartCount.findIndex((item) => {
    if (item.productId === productList[+pram.id].id) {
      let isSame = false;

      isSame = !item.variantName.some(
        (variant, idx) => variant !== variantName[idx]
      );

      return isSame;
    }
    return false;
  });

  return (
    <Container>
      <Paper
        sx={{
          p: 2,
          marginTop: "15px",
          maxWidth: 1000,
          flexGrow: 1,
          border: "solid black 1px",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase
              sx={{ width: 300, height: 200 }}
              md={{ width: 240, height: 128 }}
            >
              <Img alt="complex" src={image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid
              item
              xs
              container
              direction="column"
              spacing={2}
              style={{ textAlign: "center" }}
            >
              <Grid item xs>
                <Box variant="subtitle1" fontSize={"30px"} fontWeight={700}>
                  {productList[pram.id].category}
                </Box>
                <Box variant="body2" fontSize={"20px"} fontWeight={700}>
                  {productList[pram.id].title}
                </Box>
                <Box
                  variant="body2"
                  fontSize={"20px"}
                  fontWeight={700}
                  mt="25px"
                >
                  {totalPrice}
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ cursor: "pointer" }} variant="body2">
                  <BtnVariant
                    productList={productList[pram.id]}
                    changePrice={changePrice}
                    variantName={(value, index) => {
                      setVariantName((prev) => {
                        const clone = [...prev];
                        clone[index] = value;
                        return clone;
                      });
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            {user.admin ? (
              <></>
            ) : indexOfCartProduct >= 0 ? (
              <Grid item>
                <Button
                  variant="subtitle1"
                  component="span"
                  onClick={() =>
                    dispatch(subQuantity({ index: indexOfCartProduct }))
                  }
                >
                  -
                </Button>
                <Button variant="info" component="span">
                  {CartCount[indexOfCartProduct].quantity}
                </Button>
                <Button
                  variant="subtitle1"
                  component="span"
                  onClick={() =>
                    dispatch(addQuantity({ index: indexOfCartProduct }))
                  }
                >
                  +
                </Button>
              </Grid>
            ) : (
              <Grid item>
                <Button
                  variant="subtitle1"
                  // component="span"
                  disabled={!variantName.length}
                  onClick={() => dispatch(addCart(addToCart()))}
                >
                  ADD <LocalMallIcon style={{ color: "#1976d2" }} />
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
