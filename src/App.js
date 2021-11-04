import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword1(value);
  };
  const handlePasswordConfirm = (event) => {
    const value = event.target.value;
    setPassword2(value);
  };
  const handleSubmit = (event) => {
    if (password1 === password2) {
      event.preventDefault();
      console.log(name, email, password1, password2);
    } else {
      alert("mdp pas pareils");
      event.preventDefault();
    }
  };

  return (
    <Form
      name={name}
      handleNameChange={handleNameChange}
      email={email}
      handleEmailChange={handleEmailChange}
      password1={password1}
      password2={password2}
      handlePasswordChange={handlePasswordChange}
      handlePasswordConfirm={handlePasswordConfirm}
      handleSubmit={handleSubmit}
    />
  );
}

export default App;
