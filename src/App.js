import React from "react";
import './App.css';
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"


const user =  {
    name: "Miguel",
    surname: "Herrera",
    age: 32
  }

function App() {
  return (
    <div className="App">
      <Header user={user} />
      <Home user={user} />

    </div>
  );
}

export default App;
