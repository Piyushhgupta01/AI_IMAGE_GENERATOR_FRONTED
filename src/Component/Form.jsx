import axios from "axios";
import { useState } from "react";

export default function Form({setimage}){
    const[loaded,setloaded]=useState(false);
const[data,setdata]=useState({
    author:"", 
    prompt:"",
  });
    
     const handleChange=(e)=>{
        setdata((prevData) =>({...prevData,[e.target.name]:e.target.value}));
     };
       
     const searchimage=async()=>{
        let res;
        try {
           res= await axios.post("http://localhost:3000/api/generate-image", data
               
            )
          } catch (error) {
            console.log(error);
            
          }
          console.log(res.data.image.imageUrl);
          setimage(res.data.image.imageUrl)
     }

     const handlesubmit=(e)=>{
        e.preventDefault();
         console.log(data);
        
           setloaded(true);
         searchimage();
        
     };
        


    


    return(
      <div>
          <div className="bg-blue-200   p-5 shadow-xl shadow-gray-600 md:w-[500px] w-full border-black">
            <h1 className="font-semibold text-3xl py-1 fontFamily:"Times New Roman> Generate Image with prompt</h1>
            <h3 className="font-medium text-gray-600 text-xl py-1"> Write your prompt according to the image you
                want to generate</h3>
            <form className="flex flex-col " onSubmit={handlesubmit}>
                <label htmlfor="author" className="font-semibold py-2">Author</label>

                <input 
                type="text" 
                placeholder="Author name..."
                name="author"
                className="py-3 px-5 border-2 bg-white outline-none"
                onChange={handleChange}
                ></input>

                <label htmlfor="prompt" className="font-semibold py-2">Prompt</label>
                <textarea 
                type="text" 
                placeholder="Enter your prompt here...."
                name="prompt"
                className="py-3 px-5 bg-white border-2 outline-none"
                onChange={handleChange}
                ></textarea>
                <p className="font-medium text-sm my-2">
                    * You can post the AI Generated Image to showcase in the community!
                </p>




                <div className=" flex item-center justify-between p-2 mt-3">
                <button type="submit"
                 className={
                    data.prompt !== ""
                    ?"py-3  px-7 cursor-pointer  bg-blue-600 border-2  border-gray-200  rounded-xl "
                    
                     : "py-3 px-7 border-2 border-gray-400 rounded-xl  disabled:bg-blue-400 disabled:cursor-not-allowed"
                     
                
                 }
                 disabled={data.prompt ==""? true:false}
                   >
                    Generate</button>
                <button type="button"
                 className={
                    loaded && data.prompt!=="" && data.author!==""
                    ?
                    "py-3 px-5 cursor-pointer bg-orange-400 border-2-gray -200 rounded-xl "
                
                : "py-3 px-7 border-2 border-black rounded-xl  disabled:bg-orange-400 disabled:cursor-not-allowed"}

                disabled={loaded}
                >Post </button>
                 
                </div>
            </form>
        </div>
       
      </div>
    )
}
