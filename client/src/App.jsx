import {BrowserRouter , Routes , Route} from "react-router-dom";
import Login from "./pages/Login";
import UserLogin from "./components/userLogin/UserLogin";
import AdminLogin from "./components/adminLog/AdminLogin";
import UserPasswordRecovery from "./components/userPasswordRecovery/UserPasswordRecovery";
import UserPasswordChange from "./components/userPasswordChange/UserPasswordChange";
import UserRegister from "./components/userRegister/UserRegister";
import './styles/Variables.scss'


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/user" element={<UserLogin/>}></Route>
        <Route exact path="/admin" element={<AdminLogin/>}></Route>
        <Route exact path="/userRecovery" element={<UserPasswordRecovery/>}></Route>
        <Route exact path="/userPassword" element={<UserPasswordChange/>}></Route>
        <Route exact path="/userRegister" element={<UserRegister/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
