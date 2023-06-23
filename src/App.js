import "./index.css";
import Header from "./component/Header";
import Employees from "./pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/customers" element={<Customers />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
