//import { Button } from "./ui/button";
//import logo from "@/assets/logo.svg"
import github from "../assets/github.svg"

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between p-5">
      {/* <h1 className="text-2xl">Cardify</h1> */}
      <h1 className="text-2xl text-white">
        {/* <img src={logo} alt="logo" className="h-6" /> */}
        Quotegen//
        </h1>
      <div className="flex items-center">
         <a href="#">
         <img src={github} className="h-8 w-8" />
         </a>
      </div>
    </nav>
  );
};

export default Navbar;
