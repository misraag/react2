export default function UserInputs({ inputs, onChangeInputs }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            required
            type="number"
            value={inputs.initialInvestment}
            onChange={(event) =>
              onChangeInputs("initialInvestment", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            required
            type="number"
            value={inputs.annualInvestment}
            onChange={(event) =>
              onChangeInputs("annualInvestment", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            required
            type="number"
            value={inputs.expectedReturn}
            onChange={(event) =>
              onChangeInputs("expectedReturn", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>DURATION</label>
          <input
            required
            type="number"
            value={inputs.duration}
            onChange={(event) => onChangeInputs("duration", event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
