import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "./components/About";
import { NavigationBar } from "./components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactUs } from "./components/ContactUs";
import { RegistrationVal } from "./components/RegistrationVal";
import { ClientList } from "./components/ClientList";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/form" element={<RegistrationVal />}></Route>
          <Route path="/client-list" element={<ClientList />}></Route>
          <Route path = "/login" element = {<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
