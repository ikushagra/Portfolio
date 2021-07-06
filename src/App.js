import React, { useState, useEffect } from "react";
import DisplayPic from "./components/DisplayPic/DisplayPic";
import "./styles.css";

export default function App() {
  const [details, setDetails] = useState({});
  useEffect(() => {
    foo;
  }, [foo]);
  async function foo() {
    const userData = await fetch(
      "https://api.github.com/users/ikushagra/repos"
    );
    const user = await userData.json();
    setDetails(user);
    console.log(details);
  }
  console.log(details);

  return (
    <div className="App">
      <DisplayPic />
      <button onClick={() => foo}>generate</button>
    </div>
  );
}
