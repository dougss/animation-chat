import React, { useState, useEffect, useRef } from "react";
import { Input, InputFormRoot } from "./styles";
import { Button } from "../StyledComponents";

const labels = {
  name: "Informe seu nome",
  email: "Informe seu email",
  phone: "Informe seu celular",
  document: "Informe seu CNPJ",
  partner: "Informe a quantidade de sócios",
  employee: "Informe a quantidade de funcionários",
};

const InputForm = ({ label, confirmAction }) => {
  const [value, setValue] = useState();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <InputFormRoot onSubmit={() => confirmAction(value)}>
      <Input
        ref={inputRef}
        placeholder={labels[label]}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button disabled={!value} onClick={() => confirmAction(value)}>
        Ok
      </Button>
    </InputFormRoot>
  );
};

export default InputForm;
