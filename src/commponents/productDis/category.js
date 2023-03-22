import { Typography, Select, MenuItem } from "@mui/material";
import { useState } from "react";
const OptionCategory = () => {
  const [selectedCategories, setSelectedCategories] = useState("All category");

  const selectedChange = (e) => {
    setSelectedCategories(e.target.value);
  };

  return (
    <>
      <Typography
        sx={{
          mr: 2,
          display: { xs: "flex", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          color: "inherit",
          textDecoration: "none",
        }}
        style={{ marginTop: "27px" }}
      >
        Category
      </Typography>
      <Select
        value={selectedCategories}
        displayEmpty
        style={{ marginTop: "13px" }}
        onChange={selectedChange}
      >
        <MenuItem
          value="All category"
          //   onClick={()=>selectedChange("All category")}
          //   active={Categories==="All category"}
        >
          All Category
        </MenuItem>
        <MenuItem
          value={"Cloth"}
          //   onClick={()=>selectedChange("Cloth")}
          //   active={Categories==="Cloth"}
        >
          Cloth
        </MenuItem>
        <MenuItem
          value={"Shoes"}
          //    onClick={()=>selectedChange("Shoes")}
          //   active={Categories==="Shoes"}
        >
          Shoes
        </MenuItem>
        <MenuItem
          value={"backPack"}
          //    onClick={()=>selectedChange("backPack")}
          //   active={Categories==="backPack"}
        >
          backPack
        </MenuItem>
        <MenuItem
          value={"accessories"}
          //       onClick={()=>selectedChange("accessories")}
          //   active={Categories==="accessories"}
        >
          accessories
        </MenuItem>
      </Select>
    </>
  );
};
export default OptionCategory;
