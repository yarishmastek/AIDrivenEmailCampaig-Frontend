import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login/Login";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Bounce, ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Login />} />
        </Routes>
        <ToastContainer
          style={{
            background: "transparent",
            marginLeft: "130px",
          }}
          toastStyle={{
            padding: "20px",
          }}
          position="top-center"
          transition={Bounce}
          limit={3}
        />
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
