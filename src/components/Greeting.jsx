import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const textChangeHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && <Output>Its good to see you!</Output>}
      {changedText && <p>Text Changed</p>}
      <button onClick={textChangeHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
