import { Grid, Typography, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import OptionVa from "./options";
import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

const VarientOt = ({ index, onChange, inputVal, deleteVarient, id }) => {
  const [formValues, setFormValues] = useState({
    type: "",
    option: [],
    id,
  });

  const handleChange = (e) => {
    let value = e.target.value;

    setFormValues((val) => {
      const clone = { ...val };
      clone[e.target.name] = value;
      return clone;
    });
  };
  useEffect(() => {
    onChange(formValues);
  }, [formValues]);

  const deleteOptions = (index) => {
    setFormValues((pre) => {
      const clone = { ...pre };
      const newArr = [...pre.option];
      newArr.splice(index, 1);
      clone.option = newArr;
      return clone;
    });
  };
  return (
    <>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={2} md={2}>
          <Typography
            mt={3}
            component={"h3"}
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            Varient Name
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            label="Varient Name"
            type="text"
            autoFocus
            defaultValue={inputVal}
            onChange={(e) => handleChange(e)}
          />
        </Grid>

        <Grid item xs={12} sm={2} md={2}>
          <Button
            variant="contained"
            style={{ marginTop: "25px" }}
            startIcon={<AddIcon />}
            onClick={() =>
              setFormValues((val) => ({
                ...val,
                option: [...val.option, { name: "", price: "", id: nanoid() }],
              }))
            }
          >
            Option
          </Button>
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
          <Button
            variant="contained"
            style={{ marginTop: "25px" }}
            startIcon={<ClearIcon />}
            onClick={() => deleteVarient(index)}
          >
            Delete
          </Button>
              </Grid>
             
      </Grid>
      {formValues.option.map((val, index) =>
                <OptionVa
                    key={index}
                    index={index}
                    id={val.id}
                    deleteOptions={deleteOptions}
                    onChange={(value) => {
                        setFormValues((val) => {
                            const clone = { ...val }
                            clone.option[index] = value;
                            return clone
                        })
                    }}
                />)}
    </>
  );
};
export default VarientOt;
