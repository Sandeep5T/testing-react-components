import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const textChangeHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && <p>Its good to see you!</p>}
      {changedText && <p>Text Changed</p>}
      <button onClick={textChangeHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
