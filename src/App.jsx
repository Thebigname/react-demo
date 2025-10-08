import { Route, Routes } from "react-router";
import { Link } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

import Login from "./components/Login";

import Error from "./Error";
import Home from "./Home";
import ForgetPassword from "./components/ForgetPassword";
import CreateAccount from "./components/CreateAccount";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Company from "./Company";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div>
      
      <Routes>
        <Route element={<Navbar />}>
        <Route element={<Footer />}></Route>
          <Route path="/*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/Company" element={<Company />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/REsources" element={<Resources />}/>npm
          <Route path="/Login" element={<Login />} />
          <Route path="/forgot" element={<ForgetPassword />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/Privacy-Policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />}/>
        </Route>
      </Routes>

       <Footer />

      <h3 className="text-white">
        <Link to="/cards">CArds</Link>
      </h3>

      <h1 className="text-white"> If i sabi this react thing ehn,, Mark</h1>
    </div>
  );
}

export default App;
