import React, { useState } from "react";

const Material = () => {
  const [height, setHeight] = useState(10);
  const [weight, setWeight] = useState(0);
  const [ans, setAns] = useState("");
  // useEffect(() => {
  //   setAns(weight / (height * height));
  // }, [weight, height]); jhfgijhfgdush
  const weightHandler = (e) => {
    setWeight(e.target.value);
  };
  const heightHandler = (e) => {
    setHeight(e.target.value);
  };
  const buttonHandler = () => {
    setAns(`BMI is ${Math.round(weight / (height * height))}`);
  };
  return (
    <>
      <form className="f1">
        <label className="l1">weight</label>
        <input className="textbox" onChange={weightHandler} type="text" />
      </form>
      <form className="f1">
        <label className="l1">height</label>
        <input className="textbox" onChange={heightHandler} type="text" />
      </form>
      <button className="f1 btn" onClick={buttonHandler} type="submit">
        Submit
      </button>
      <h2>{ans}</h2>
    </>
  );
};
export default Material;
