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
  },
];
