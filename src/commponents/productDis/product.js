import {
  Grid,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import image from "../image/store.jpeg";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const ProductCard = ({ pro, i }) => {
  return (
    <Grid item xs={12} md={4} key={i}>
      <Card sx={{ maxWidth: 345 }} style={{ marginTop: "10px",textDecoration:"none" }} component={Link}
            to={`/variant/${i}`} >
        <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: "monospace",
              fontWeight: 300,
              color: "inherit",
              textAlign: "center",
            }}
          >
            {pro.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textAlign: "center",
            }}
          >
            Price:
            {pro.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#1976d2",
              textDecoration: "none",
            }}
            size="small"
            startIcon={
              <LocalMallIcon style={{ color: "#1976d2" }} fontSize={"medium"} />}
            
          >
            
            {pro.category}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
