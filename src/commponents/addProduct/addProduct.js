import {
  Box,
  Container,
  Select,
  Typography,
  MenuItem,
  TextField,Grid
} from "@mui/material";

const AddProduct = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
            }}
          >
            ADD PRODUCT
                  </Typography></Box>
                  <Grid container >
                  {/* <Grid item  md={2}>
                  
  </Grid> */}
  <Grid item xs={12} sm={6} md={2}>
  <Typography>Name</Typography>
  </Grid>
  <Grid item xs={12} sm={6} md={6}>
  <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              
            />
                      </Grid>
                      {/* <Grid item md={2}>
  
  </Grid> */}
</Grid>
              
           
      </Container>
    </>
  );
};
export default AddProduct;
