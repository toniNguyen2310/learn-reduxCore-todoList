import React from "react";
import Filters from "./components/Filters/Filters";
import TodoList from "./components/TodoList/TodoList";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Typography, Divider } from "antd";
import "./App.css";
const { Title } = Typography;
function App(props) {
  return (
    <div
      style={{
        width: 600,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
      }}
    >
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <Title style={{ textAlign: "center" }}>TODO APP with REDUX CORE</Title>
        <Filters />
        <br />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
