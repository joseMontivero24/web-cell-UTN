
// import './App.css'
// import { Home } from './pages/Home'
// import { Contact } from './components/Contact'




// function App() {


//   return (
//     <>
//       <Home/>
//       <Contact/>
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {Catalogo} from "./pages/Catalogo";
import {Contact} from "./pages/Contact";
import { Header } from "./components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;