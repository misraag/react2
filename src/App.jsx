import { useState } from "react";
import UserInputs from "./components/UserInputs";
import Result from "./components/Result";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 10
})

const inputIsValid = userInput.duration >=1;

function userInputChangeHandler (propertyChanged, newValue) {
    setUserInput(previousValue => {
        return  {
            ...previousValue,
            [propertyChanged] : newValue
        }
        
    })
}

  return (
    <>
      <UserInputs inputs={userInput} onChangeInputs={userInputChangeHandler}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
      {inputIsValid && <Result data={userInput}/> }
    </>
  );
}

export default App;
