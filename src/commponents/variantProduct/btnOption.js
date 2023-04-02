import { ButtonGroup, ToggleButton} from "@mui/material";
import { useState, useEffect } from "react";

const BtnOption = ({ option, type, changePrice, variantName, index }) => {
  const [radioValue, setRadioValue] = useState();

  useEffect(() => {
    if (radioValue >= 0) {
      changePrice({
        type,
        price: option[radioValue].price,
      });
      variantName(option[radioValue].name, index);
      console.log('hello')
    }
    
  }, [radioValue]);
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {option.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${type}-${idx}`}
          type="radio"
          variant={"inherit"}
          color="primary"

          name={type}
          value={radio.idx}
          checked={radioValue === idx}
          onChange={() => setRadioValue(idx)}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};
export default BtnOption;
