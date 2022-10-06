import "./App.css";
import { useMultiStepForm } from "./useMultiStepForm";

function App() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([<div>One</div>, <div>Two</div>]);
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
