import React from "react";
import TypewriterComponent from "typewriter-effect";

const Typewriter = ({ text, onComplete }) => {
  return (
    <TypewriterComponent
      onInit={(typewriter) => {
        typewriter.typeString(text).start().callFunction(onComplete);
      }}
      options={{
        devMode: false,
        delay: 10,
        cursor: null,
      }}
    />
  );
};

export default Typewriter;
