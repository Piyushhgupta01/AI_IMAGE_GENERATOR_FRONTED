import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
//const history=[{
//     image,
//     author:"Arvind",
//   prompt:"Pythoon for Beginner",
// },
// {
    
//    image,
//     author:"Rohit",
//   prompt:"cat in the box",
// },{
//     image,
//     author:"Piyush",
//     prompt:"JAVA for Beginner",
// },
// {
//     image,
//     author:"Aanjali",
//    prompt:"JS for Beginner",
// }
// //]


    export const History=()=>{
        const[history,setHistory]=useState([]);
        const [search,setSearch]=useState("");
       const[loading,setLoading]=useState(false);
       const style={
        fontFamily:"Times New Roman",

    };

const handleChange=(event)=>{
    setSearch(event.target.value);
    

};
const filteredImage=history.filter((item)=>
    Object.values(item).some(value=> typeof value === "string" && value.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

);
   //download the image
   const downloadImage = async (img) => {
    setLoading(true);
    try {
      const response = await fetch(img, { mode: "cors" });
      const blob = await response.blob();
  
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "image.png"; // Default name for downloaded image
  
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
    setLoading(false);
  };
const loadimage =async()=>{
    let res;
    try {
        res = await axios.get("https://imagegeneratorbackend-ufs8.onrender.com");
        if (!res) {
            console.log("image are not found")
            
        }        
        setHistory(res.data.response);
        
    } catch (error) {
        console.log(error);
        
    }
}

useEffect(()=>{
    loadimage();
},[]);


    return(
       <>
        <div className=" bg-gradient-to-b from-blue-200 to-white flex flex-col items-center justify-center   " >
        <div className="flex flex-col items-center justify-center  py-2 mt-30" >
        <h1 className="font-bold text-3xl text-gray-950  "
        style={style}
        
        >Explore popular posts in the community</h1>
        <h2 className="font-extrabold text-3xl text-green-700 py-3"style={style}> Generated with AI </h2>

        <form className="flex items-center justify-start border-2
         rounded-lg w-full px-2 my-5">
            <button className="cursor-pointer">
                <FaSearch className="text-2xl font-bold "/>
            </button>
            <input type="text" placeholder="search prompt..."className="p-3 border-0 
            outline-none text-lg" style={style}
            onChange={handleChange}
            />
        </form>
        </div>
       
       
       
        <div className="flex flex-wrap item-center
         justify-center gap-5 
         my-5 mx-auto">

            {
                filteredImage?.slice().reverse().map((item, index) => {
                    return(
                    <div 
                    key={index}
                    className="bg-white shadow-xl 
                        border-2 border-gray-950">
                           <div className="w-72 h-72 bg-white bg-gradient-to-b from-blue-100 to-white shadow-xl shadow-gray-600">
                            <img src={item.imageUrl} alt="" className="h-[300px] w-[300px]"/>
                            </div>
                       
                        <div className="flex item-center justify-between px-4 pt-4">
                            <span className="text-lg font-semibold  p-1">Author:<span className="font-medium" >  {item.author}</span></span>
                            <span className="w-10 rounded-full h-10   flex items-center justify-center  m-2 rounded-full bg-gray-400 shadow-2xl shadow-amber-200
                            "
                            onClick={()=>downloadImage(item.imageUrl)}
                            > <IoMdDownload className="text-xl 
                            cursor-pointer 
                            font-bold text-gray-950"/></span>
                           
                        </div>
                        <div className="px-4 pb-3 w-[290px]">
                        <p className="font-semibold"> Prompt : {item.prompt}</p>
                        </div>
            
            </div>
                        )

                })
            }
            
            
           
        </div>
        </div>
        </>
    )
    }
