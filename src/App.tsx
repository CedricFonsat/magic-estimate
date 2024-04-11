import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
// import DevisComponent from "./components/DevisComponent";
// import { TableDevis } from "./components/TableDevis";
import Home from "./screens/Home";

function App() {

  return (
    <div className="bg-neutral-950">
      <Navbar />
      <Header />
      <Home />
    </div>
  )

  // return (
  //   <div>
  //     <TableDevis/>
  //     <DevisComponent />
  //   </div>
  // );
}

export default App;
