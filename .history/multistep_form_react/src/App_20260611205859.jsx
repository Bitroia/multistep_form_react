//! Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import { useState } from "react";

//! Hooks

import { useForm } from "./hooks/UseForm";

import "./App.css";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const { currentStep, currentComponent } = useForm(formComponents);

  return (
    <div className="App">
      <h1>React Multistep</h1>
      <div className="header">
        <h2>Deixe sua avalização</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form onSubmit={(e) => }>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
