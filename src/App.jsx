import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Components/Pages/error/ErrorPage";
import LoginPage from "./Components/Pages/login/LoginPage";
import OrderPage from "./Components/Pages/Order/OrderPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
