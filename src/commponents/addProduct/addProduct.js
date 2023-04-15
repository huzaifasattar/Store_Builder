import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  NativeSelect,
} from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import VarientOt from "./varient";
import { useDispatch } from "react-redux";
import { productAdd } from "../redux/state";
const AddProduct = () => {
  
    
   const dispatch = useDispatch();
  const [productValue, setProductValue] = useState({
    category: "Cloths",
    name: "",
    price: "",
    id: nanoid(),
    varients: [],
  });
    

  console.log(productValue);
  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "price") {
      value = +value;
    }

    setProductValue((val) => {
      const clone = { ...val };
      clone[e.target.name] = value;
      return clone;
    });
  };
  const deleteVarient = (index) => {
    setProductValue((pre) => {
      const clone = { ...pre };
      const newArr = [...pre.varients];
      newArr.splice(index, 1);
      clone.varients = newArr;
      return clone;
    });
  };
  const addButton = () => {
    dispatch(productAdd(productValue));
    setProductValue((pre) => ({
        ...pre,
        varients: []
    }))

}
  const categoryArr = ["Cloths", "Shoes", "BackPack", "Accessories"];

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            marginTop: 8,
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              marginLeft: "20%",
            }}
          >
            ADD PRODUCT
          </Typography>

          <Box component={"form"} mt={5}>
            <Grid container>
              <Grid item xs={12} sm={2} md={2}>
                <Typography
                  mt={1}
                  component={"h3"}
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                  }}
                >
                  CATEGORY
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <NativeSelect
                  defaultValue={30}
                  name="category"
                  style={{ width: "100%" }}
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    color: "#1976d2",
                  }}
                  onChange={(e) => handleChange(e)}
                >
                  {categoryArr.map((cat, i) => (
                    <option key={i}>{cat}</option>
                  ))}
                </NativeSelect>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={2} md={2}>
                <Typography
                  component={"h3"}
                  mt={3}
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                  }}
                >
                  Name
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="Product Name"
                  type="text"
                  autoFocus
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={2} md={2}>
                <Typography
                  component={"h3"}
                  mt={3}
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                  }}
                >
                  Price
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  type={"number"}
                  name="price"
                  label="Product Price"
                  //   type="text"
                  autoFocus
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
            </Grid>
            {productValue.varients.map((varient, index) => (
              <VarientOt
                key={index}
                index={index}
                varient={varient}
                inputVal={varient.type}
                deleteVarient={deleteVarient}
                onChange={(value) => {
                  setProductValue((val) => {
                    const clone = { ...val };
                    clone.varients[index] = value;
                    return clone;
                  });
                }}
              />
            ))}
            <Grid container>
              <Grid item xs={12} sm={2} md={2}>
                <Typography
                  component={"h3"}
                  mt={3}
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                  }}
                >
                  Varients
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Button
                  variant="contained"
                  style={{ marginTop: "15px" }}
                  startIcon={<AddIcon />}
                  onClick={() =>
                    setProductValue((prev) => ({
                      ...prev,
                      varients: [
                        ...prev.varients,
                        { type: "", options: [], id: nanoid() },
                      ],
                    }))
                  }
                >
                  Add Varients
                </Button>
              </Grid>
            </Grid>

            <br />
            <Grid container>
              <Grid item xs={6} sm={2} md={2}>
                <Button
                  variant="contained"
                  style={{ marginTop: "15px" }}
                  startIcon={<RestartAltIcon />}
                  onClick={() =>
                    setProductValue((pre) => ({
                      ...pre,
                      varients: [],
                    }))
                  }
                >
                  Reset
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Button
                  variant="contained"
                  style={{ marginTop: "15px" }}
                  startIcon={<DownloadDoneIcon />}
                  onClick={() => addButton()}
                  disabled={
                    !(
                      productValue.category &&
                      productValue.name &&
                      productValue.price
                    )
                  }
                >
                  Done
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default AddProduct;
