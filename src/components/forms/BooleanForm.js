import React from "react";
import { Button } from "../StyledComponents";
import { BooleanFormRoot } from "./styles";

const BooleanForm = ({ confirmAction, cancelAction }) => {
  return (
    <BooleanFormRoot>
      <Button onClick={() => confirmAction(true)}>Confirmar</Button>

      <Button onClick={() => cancelAction()}>Recusar</Button>
    </BooleanFormRoot>
  );
};

export default BooleanForm;
