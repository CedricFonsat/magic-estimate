import "./App.css";
import DevisComponent from "./components/DevisComponent";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Home from "./screens/Home";

function App() {

  return (
    <div className="bg-neutral-950 h-min-screen">
      <Navbar />
      <Header />
      <Home />
      <DevisComponent />
    </div>
  )
}

export default App;