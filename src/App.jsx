import { useState } from "react";
import "./App.css";
import Home from "../Componet/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../Componet/Form";
import AxisData from "../Componet/AxisData";
import MessagesRecive from "../Componet/MessagesRecive";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/axisdata" element={<AxisData />} />
        <Route path="/axismessage" element={<MessagesRecive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
