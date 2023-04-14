import {useState, useRef} from "react";
export default function CardCheck() {

function validCard(num) {
      let arr = (num + "")
        .split("")
        .reverse()
        .map((x) => parseInt(x));
      let lastDigit = arr.splice(0, 1)[0];
      let sum = arr.reduce(
        (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
        0
      );
      sum += lastDigit;
      return sum % 10 === 0
        
    }
  const [userInput, setUserInput] = useState(0);
  const [status, setStatus] = useState("");

  const contentInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    let res = validCard(userInput);
    res ? (res = "Valid Card") : (res = "Invalid Card ");
    setStatus(res);
    contentInput.current.value = "";
  };

  return (
    <div>
    <br/><br/><br/>
      <h2>Enter you Credit Card Details: </h2><br/>
      <form>
        
        <input onChange={(e) => {setUserInput(e.target.value);}}
          ref={contentInput}/><br/><br/>
        <button onClick={(e) => handleSubmit(e)}>Check Validity</button>
      </form><br/>
      <h2 className="blink">{status}</h2>
    </div>
  );
}
