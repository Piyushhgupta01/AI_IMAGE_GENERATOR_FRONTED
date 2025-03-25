import { Link, useLocation } from "react-router-dom";
import logo from "../assets/colorful-creative-logo-design_1115474-5372.avif";


export default function Header(){
  const location=useLocation();
    return(
      <div className=" fixed w-full flex item -center justify-between p-3 
                      shadow-xl shadow-blue-50 bg-blue-200">

        <Link to ="/" className="  p-auto
        justify-center mt-1 flex"> 
          <img src={logo} alt=""className="w-16 h-16 rounded-full"/>
          <h1 className="mt-5 ml-3 font-bold font-serif ">AI IMAGE GENERATOR</h1>
        </Link>
        {
          location.pathname==="/"?(<Link to="/Generate-Image With the help of AI">
            <button type="button" className="border-none p-5 
            bg-black rounded-xl cursor-pointer shadow-xl text-white
             shadow-gray-300">  Generate-Image</button>
            </Link>):(
              <Link to="/">
        <button type="button" className="border-none p-5 text-white
        bg-black rounded-xl cursor-pointer shadow-xl
        ">  History</button>
        </Link>)
        }
      </div>
    )
  }