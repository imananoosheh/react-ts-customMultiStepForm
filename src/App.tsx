import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import "./App.css";
import { useMultiStepForm } from "./useMultiStepForm";
import { Userform } from "./UserForm";

function App() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([<Userform />, <AddressForm />, <AccountForm />]);
  return (
    <div className="form-container">
      <form>
        <div className="step-number">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="button-container">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="button" onClick={next}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
