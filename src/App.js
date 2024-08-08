import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
import OwnPet from "./pages/OwnPet";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<OwnPet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
