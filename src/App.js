import React, { useState, useEffect, useRef } from "react";
import Typewriter from "./components/typewriter";
import {
  Container,
  Page,
  Title,
  MessagesList,
  ItemMessage,
  Footer,
  MessagesBlock,
  ListOptions,
  OptionItem,
  CircleOption,
} from "./components/StyledComponents";
import { _MESSAGES } from "./messages";

function App() {
  const [messages, setMessages] = useState([]);
  const [currentyIndex, setCurrentyIndex] = useState();
  const [activeInput, setActiveInput] = useState();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({});

  const [optionSelected, setOptionSelected] = useState({});

  const messagesRef = useRef();

  useEffect(() => {
    setCurrentyIndex(0);
  }, []);

  useEffect(() => {
    console.log("App -> form", form);
  }, [form]);

  useEffect(() => {
    setShowForm(!!activeInput);
  }, [activeInput]);

  useEffect(() => {
    insertMessage({ ..._MESSAGES[currentyIndex] });
  }, [currentyIndex]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollIntoView(true);
    }
  }, [messages]);

  const insertMessage = (message) => {
    if (message.message || message.createMessage) {
      messages.push(message);
      setMessages([...messages]);
    }
  };

  const onComplete = (item) => {
    if (item.wait) {
      return setTimeout(() => {
        setActiveInput({ ..._MESSAGES[currentyIndex + 1] });
      }, 500);
    }

    return setCurrentyIndex(currentyIndex + 1);
  };

  const setValueInput = (value) => {
    insertMessage(activeInput);
    setActiveInput(null);
    setForm({ ...form, [activeInput.variable]: value });
    setCurrentyIndex(currentyIndex + 2);
  };

  return (
    <Container className="App">
      <Page>
        <Title>Chat</Title>

        <MessagesBlock>
          <MessagesList>
            {messages.map((item, index) => {
              if (item.createMessage && item.variable) {
                item.message = item.createMessage(form[item.variable]);
              }

              if (item.type === "user") {
                return (
                  <ItemMessage right key={index} ref={messagesRef}>
                    {item.message}
                  </ItemMessage>
                );
              }

              return (
                <ItemMessage left key={index} ref={messagesRef}>
                  <Typewriter
                    text={item.message}
                    onComplete={() => onComplete(item)}
                  />
                </ItemMessage>
              );
            })}

            {showForm && activeInput && activeInput.options && (
              <ListOptions>
                {activeInput.options.map((option, index) => (
                  <OptionItem
                    key={index}
                    ref={messagesRef}
                    onClick={() => setOptionSelected(option)}
                  >
                    <CircleOption active={optionSelected.id === option.id} />
                    <span>{option.value}</span>
                  </OptionItem>
                ))}
              </ListOptions>
            )}
          </MessagesList>
        </MessagesBlock>

        {showForm && activeInput && (
          <Footer>
            <activeInput.form
              confirmAction={setValueInput}
              label={activeInput.variable}
              optionSelected={optionSelected}
            />
          </Footer>
        )}
      </Page>
    </Container>
  );
}

export default App;
