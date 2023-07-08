import React from "react";
// import { useSelector } from "react-redux";
import logo from "../../assets/logo.svg";

const Home = () => {
  // const data = useSelector((state) => state.app.data);

  // return (
  //   <div>
  //     <h1>Home</h1>
  //     {data && data.map((d, i) => <p key={i}>{d.length < 50 ? d : ""}</p>)}
  //   </div>
  // );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
