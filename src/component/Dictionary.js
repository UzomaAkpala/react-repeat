import { useState, useEffect } from "react";

export default function Dictionary() {
  const [word, setWord] = useState("");

  useEffect(() => {
    console.log("State updated " + word);
  }, []);

  // no dependency array --> updates for any state change!
  // empty dependency array --> executes once

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <h1>Let's get the definition for {word}</h1>
    </>
  );
}
