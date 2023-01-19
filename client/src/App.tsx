import { useState } from "react";
import "./App.css";

const endpoint = "http://localhost:8000";

function App() {
  const [firstNumber, setFirstNumber] = useState<any>();
  const [secondNumber, setSecondNumber] = useState<any>();

  const submit = async () => {
    if (!firstNumber || !secondNumber) return;
    const rawResponse = await fetch(`${endpoint}/sum`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstNumber, secondNumber }),
    });
    const content = await rawResponse.json();

    if (content.result) {
      alert(content.result);
    } else {
      alert(content.error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span>Adding Two Numbers</span>
        </div>
        <div className="wrapper">
          <input
            data-testid="first_number_input"
            type="number"
            onChange={(event) => setFirstNumber(event.target.value)}
          />
        </div>
        <div className="wrapper">
          <input
            data-testid="second_number_input"
            type="number"
            onChange={(event) => setSecondNumber(event.target.value)}
          />
        </div>
        <div className="wrapper">
          <button data-testid="submit_btn" onClick={submit}>
            Add Two Numbers
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
