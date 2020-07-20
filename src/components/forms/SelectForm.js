import React from "react";
import { BooleanFormRoot } from "./styles";
import { Button } from "../StyledComponents";

const SelectForm = ({ confirmAction, optionSelected = {} }) => {
  return (
    <BooleanFormRoot>
      <Button
        disabled={!optionSelected.id}
        onClick={() => confirmAction(optionSelected.id)}
      >
        CONTINUAR
      </Button>
    </BooleanFormRoot>
  );
};

export default SelectForm;
