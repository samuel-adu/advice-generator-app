import { useState } from "react";
import divider from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";

function App() {
  const [adviceSlip, setAdviceSlip] = useState({});

  // useEffect(() => {
  //   fetch("https://api.adviceslip.com/advice")
  //     .then((res) => res.json())
  //     .then((data) => setAdviceSlip(data.slip));
  // }, []);

  function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdviceSlip(data.slip));
  }

  return (
    <div className="container">
      <div className="box">
        <h1 className="advice-heading">Advice #{adviceSlip.id}</h1>
        <p className="advice-text">"{adviceSlip.advice}"</p>
        <img src={divider} alt="" />
        <button className="cta" onClick={getAdvice}>
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
