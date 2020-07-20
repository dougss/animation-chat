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
} from "./components/StyledComponents";
import { _MESSAGES } from "./messages";

function App() {
  const [messages, setMessages] = useState([]);
  const [currentyIndex, setCurrentyIndex] = useState();
  const [activeInput, setActiveInput] = useState();
  const [form, setForm] = useState({});

  const messagesRef = useRef();

  useEffect(() => {
    setCurrentyIndex(0);
  }, []);

  useEffect(() => {
    insertMessage({ ..._MESSAGES[currentyIndex] });
  }, [currentyIndex]);

  useEffect(() => {
    messagesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
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

  const setValueInput = () => {
    insertMessage(activeInput);
    setActiveInput(null);
    setForm({ ...form, [activeInput.variable]: "DOuglas" });
    setCurrentyIndex(currentyIndex + 2);
  };

  return (
    <Container className="App">
      <Page>
        <Title>Chat</Title>

        <MessagesBlock ref={messagesRef}>
          <MessagesList>
            {messages.map((item, index) => {
              if (item.createMessage && item.variable) {
                item.message = item.createMessage(form[item.variable]);
              }

              if (item.type === "user") {
                return (
                  <ItemMessage right key={index}>
                    {item.message}
                  </ItemMessage>
                );
              }

              return (
                <ItemMessage left key={index}>
                  <Typewriter
                    text={item.message}
                    onComplete={() => onComplete(item)}
                  />
                </ItemMessage>
              );
            })}
          </MessagesList>
        </MessagesBlock>

        {activeInput && (
          <Footer>
            sdaadadsa
            <button onClick={setValueInput}>Click!</button>
          </Footer>
        )}
      </Page>
    </Container>
  );
}

export default App;
