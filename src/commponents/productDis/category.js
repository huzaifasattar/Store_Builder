import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectedCategory } from "../redux/state";
const OptionCategory = () => {
  const dispatch = useDispatch();
  const [selecteditemCategory, setSelecteditemCategory] =useState("All category");

  const show = (e) => {
    setSelecteditemCategory(e.target.value);
  };

  const selectedChange = (e) => {
    dispatch(selectedCategory(e));
  };

  return (
    <>
      <Select
        value={selecteditemCategory}
        displayEmpty
        style={{ marginTop: "13px", width: "100%",textAlign:"center" }}
        onChange={show}
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          color: "#1976d2",
        }}
      >
        <MenuItem
          value={"Cloths"}
          onClick={() => selectedChange("cloths")}
          style={{ display: "flex", justifyContent: "center" }}
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "#1976d2",
          }}
        >
          CLOTHS
        </MenuItem>
        <MenuItem
          value={"Shoes"}
          onClick={() => selectedChange("shoes")}
          style={{ display: "flex", justifyContent: "center" }}
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "#1976d2",
          }}
        >
          SHOES
        </MenuItem>
        <MenuItem
          value={"BackPack"}
          onClick={() => selectedChange("backPack")}
          style={{ display: "flex", justifyContent: "center" }}
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "#1976d2",
          }}
        >
          BACKPACK
        </MenuItem>
        <MenuItem
          value={"Accessories"}
          onClick={() => selectedChange("accessories")}
          style={{ display: "flex", justifyContent: "center" }}
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "#1976d2",
          }}
        >
          ACCESSORIES
        </MenuItem>
        <MenuItem
          value="All category"
          onClick={() => selectedChange("All Category")}
          style={{ display: "flex", justifyContent: "center" }}
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "#1976d2",
          }}
        >
          ALL CATEGORY
        </MenuItem>
      </Select>
    </>
  );
};
export default OptionCategory;
