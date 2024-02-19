import { useEffect,useState } from "react"
import { Menu_API } from "../utils/constant";


const useRestaurantMenu= (resId)  => {

    const [resInfo,setResInfo] = useState(null);

    useEffect(() =>{
        fetchdata();
    },[]);

    const fetchdata= async () =>{
        const data = await fetch( Menu_API+resId);
        const json = await data.json();

        setResInfo(json.data);
    };

    return resInfo;

}

export default useRestaurantMenu;