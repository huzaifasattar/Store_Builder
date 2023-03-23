import { Grid, Container } from "@mui/material";
import { useSelector } from "react-redux";
import OptionCategory from "./category";
import ProductCard from "./product";

const GridCard = () => {
  const productDis = useSelector((state) => state.Products.data);
  const productCategory = useSelector((state) => state.Products.categories);

  return (
    <Container>
      <Grid container spacing={1}>
        <OptionCategory />
        <Grid container item spacing={1}>
          {productDis &&
            productDis.map(
              (pro, i) =>
                (productCategory === "All Category" ||
                  pro.category === productCategory) && (
                  <ProductCard pro={pro} key={i} />
                )
            )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default GridCard;
