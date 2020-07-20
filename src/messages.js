import BooleanForm from "./components/forms/BooleanForm";
import InputForm from "./components/forms/InputForm";
import SelectForm from "./components/forms/SelectForm";

export const _MESSAGES = [
  { type: "system", message: "Olá, tudo bem?" },
  {
    type: "system",
    message:
      "Meu nome é Juliana e vou ajudar você a encontrar o plano de saúde ideal para a sua empresa. Para isso, preciso de algumas informações.",
  },
  { type: "system", message: "Primeiro, como posso te chamar?", wait: true },
  {
    type: "user",
    message: "",
    createMessage: (name) => `Meu nome é ${name}`,
    variable: "name",
    form: InputForm,
  },
  {
    type: "system",
    message: "",
    createMessage: (name) =>
      `Estamos realmente empolgados por ter você aqui, ${name}.`,
    variable: "name",
  },
  {
    type: "system",
    message:
      "Precisamos de algumas informações de cadastro. Mais não se preocupe pois só entraremos em contato caso você nos autorize.",
  },
  {
    type: "system",
    message: "Qual o seu email?",
    wait: true,
  },
  {
    type: "user",
    message: "",
    createMessage: (email) => `Meu email é ${email}`,
    variable: "email",
    form: InputForm,
  },
  {
    type: "system",
    message: "Ótimo. Agora, qual o seu telefone celular?",
    wait: true,
  },
  {
    type: "user",
    message: "",
    createMessage: (phone) => `Meu telefone celular é ${phone}`,
    variable: "phone",
    form: InputForm,
  },
  {
    type: "system",
    message:
      "Excelente. Como você sabe, a benefy só trabalha com planos de saúde empresariais, então precisamos do número do CNPJ da sua empresa.",
    wait: true,
  },
  {
    type: "user",
    message: "",
    createMessage: (cnpj) => `O CNPJ da minha empresa é ${cnpj}`,
    variable: "document",
    form: InputForm,
  },
  {
    type: "system",
    message:
      "OK! Só para você saber, todas as informações de valores dos planos estarão baseadas na localidade do seu CNPJ pois as tabelas de preços das operadoras são diferentes para cada município.",
  },
  {
    type: "system",
    message:
      "Vamos falar agora sobre o tipo de plano de saúde que você está buscando.",
  },
  {
    type: "system",
    message: "Qual a prioridade da Rede Credenciada?",
    wait: true,
  },
  {
    type: "user",
    message: "",
    createMessage: (priority) => `${priority} prioridade de Rede Credenciada`,
    variable: "priority",
    form: SelectForm,
    options: [
      {
        id: "Baixa",
        value: "Baixa - rede credenciada limitada de hospitais e laboratórios.",
      },
      {
        id: "Média",
        value:
          "Média - boa rede credenciada de hospitais e laboratórios como Oswaldo Cruz, Nove de Julho, HCor, São Luis, Copa D’or, Rio D’or entre outros.",
      },
      {
        id: "Alta",
        value:
          "Alta - conta os melhores hospitais e laboratórios como Albert Einstein, Sírio-Libanês, Copa D’or Star, Samaritano, Fleury, entre outros.",
      },
    ],
  },
  {
    type: "system",
    message: "",
    createMessage: (name) => `Ótimo ${name}, estamos quase lá!`,
    variable: "name",
  },
  {
    type: "system",
    message: "Quantos sócios a sua empresa possui?",
    wait: true,
  },
  {
    type: "user",
    message: "",
    createMessage: (size) => `${size} Sócios`,
    variable: "partner",
    form: InputForm,
  },
  {
    type: "system",
    message: "Agora, quantos funcionários a sua empresa possui?",
    wait: true,
  },
  {
    type: "user",
    message: "",
    createMessage: (size) => `${size} Funcionários`,
    variable: "employee",
    form: InputForm,
  },
  {
    type: "system",
    message: "Excelente, agora, só falta mais um passo para finalizarmos.",
  },
  {
    type: "system",
    message:
      "Existem 2 categorias de contratações de planos de saúde: compulsória e livre adesão. Qual categoria se encaixa na sua necessidade?",
    wait: true,
  },

  {
    type: "user",
    message: "",
    createMessage: (compusory) => `${compusory}`,
    variable: "compusory",
    form: SelectForm,
    options: [
      {
        id: "Compulsória",
        value:
          "Compulsória - Todos os sócios e funcionários devem obrigatoriamente aderir. Ou seja, se entrar um novo sócio ou funcionário na empresa, ele(a) deve ser incluído automaticamente no plano.",
      },
      {
        id: "Livre Adesão",
        value:
          "Livre Adesão - nesta categoria, tanto os sócios e/ ou funcionários podem optar por aderir ou não ao plano de saúde.",
      },
    ],
  },
  {
    type: "system",
    message:
      "Pronto! Já selecionamos os planos que melhor se encaixam no seu perfil.",
  },
];
