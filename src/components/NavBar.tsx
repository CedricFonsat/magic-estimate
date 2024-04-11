import github from "../assets/github.svg"

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5">
      <h1 className="text-2xl text-white">
        Quote Magic
        </h1>
      <div className="flex items-center">
         <a target="_blank" href="https://github.com/CedricFonsat/quote-magic">
         <img src={github} className="h-8 w-8" />
         </a>
      </div>
    </nav>
  );
};

export default Navbar;
