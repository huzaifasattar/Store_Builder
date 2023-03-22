import {
    Grid,
    Container,
    
    
  } from "@mui/material";
import { useSelector } from "react-redux";
import OptionCategory from "./category";
import ProductCard from "./product";
  
  
  
  const GridCard = () => {
    const productDis = useSelector((state) => state.Products.data)
      

    return (
      <Container>
            <Grid container spacing={1}>
            <OptionCategory/>
                <Grid container item spacing={1}>
                    
                    {productDis.map((pro, i) => <ProductCard pro={pro } key={i} />
)}
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  export default GridCard;
  