import { useState } from "react";

export default function UserInputs() {
    
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 5,
        duration: 10
    })

    function userInputChangeHandler (propertyChanged, newValue) {
        setUserInput(previousValue => {
            return  {
                ...previousValue,
                [propertyChanged] : newValue
            }
            
        })
    }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input required type="number" value={userInput.initialInvestment} onChange={(event) => userInputChangeHandler('initialInvestment', event.target.value)}></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input required type="number" value={userInput.annualInvestment} onChange={(event) => userInputChangeHandler('annualInvestment', event.target.value)}></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input required type="number" value={userInput.expectedReturn} onChange={(event) => userInputChangeHandler('expectedReturn', event.target.value)}></input>
        </p>
        <p>
          <label>DURATION</label>
          <input required type="number" value={userInput.duration} onChange={(event) => userInputChangeHandler('duration', event.target.value)}></input>
        </p>
      </div>
    </section>
  );
}
