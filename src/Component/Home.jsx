import { useState } from "react";
import Form from "./Form";

export default function Home(){
    const[image , setimage] = useState();


    return(
       <div className="bg-gradient-to-b from-blue-200 to-white  py-10 flex items-center justify-center  
        mx-auto overflow-hidden ">
         <div className="   lg:flex flex-1 item-center 
         justify-evenly gap-45 my-38
         md:ms-28 ms-auto   
          ml-3 pl-0">
<Form setimage = {setimage}/>

<div className=" border-1 md:w-[450px] w-full h-[485px] flex items-center justify-center mx-auto
 bg-blue-100  lg:mt-0 mt-5 shadow-xl shadow-gray-600 ">
   <img src={image} alt="generatedimage"  className="md:w-[450px] w-full h-[485px]"/>

</div>


        </div>
       </div>
    )
}