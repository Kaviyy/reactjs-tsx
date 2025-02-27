import { useEffect,useState } from "react";
import axios from "axios"
function useFetch(URL){
    const [products, setProducts] = useState([]);
     let [error,setError]=useState("");
     let [isLoading,setIsloading]=useState(true); 
     useEffect(()=>{
        let fecthApi=async()=>{
           try{
           // let response=await fetch(URL);
           let response = await axios.get(URL)
           //console.log(response.data);
           setProducts(response.data)
           
            // if(response.ok){
            //     let data=await response.json();
            //     setProducts(data)
            // }
            // else{
            //     throw new Error("Data not found")
            // }
           }
           catch(error){
              setError(error.message);
              
           }
           finally{
                setIsloading(false)
           }
        };
        fecthApi();
     },[URL])
     return{products,error,isLoading}

}
export default useFetch