import './App.css';
import CardCheck from './Components/CardCheck';

function App() {
  // function validationCheck(num) {
  //   let arr = (num + "")
  //     .split("")
  //     .reverse()
  //     .map((x) => parseInt(x));
  //   let lastDigit = arr.splice(0, 1)[0];
  //   let sum = arr.reduce(
  //     (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
  //     0
  //   );
  //   sum += lastDigit;
  //   return sum % 10 === 0
      
  // }
  return (
    <div className="App">
      <CardCheck></CardCheck>
    </div>
  );
}

export default App;
