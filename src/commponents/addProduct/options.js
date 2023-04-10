import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import { useEffect, useState } from "react";

const OptionVa = ({ index, onChange, deleteOptions, id }) => {
  const [valueOption, setValueOption] = useState({
    name: "",
    price: "",
    id,
  });

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "price") {
      value = +value;
    }

    setValueOption((val) => {
      const clone = { ...val };
      clone[e.target.name] = value;
      return clone;
    });
  };

  useEffect(() => {
    onChange(valueOption);
  }, [valueOption]);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2} md={2}>
          <Box sx={{ marginLeft: "30px" }}>
            <Typography
              mt={3}
              component={"h3"}
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
              }}
            >
              Name
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            label="Name"
            type="text"
            autoFocus
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={1} md={1}>
          <Typography
            mt={3}
            component={"h3"}
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            Price
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="price"
            label="Pice"
            type="text"
            autoFocus
            onChange={(e) => handleChange(e)}
          />
        </Grid>

        <Grid item xs={12} sm={2} md={2}>
          <Button
            variant="contained"
            style={{ marginTop: "25px" }}
            startIcon={<DeleteIcon />}
            onClick={() => deleteOptions(index)}
          >
            Options
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default OptionVa;
