import { useEffect , useState } from "react";
import axios from "axios";

function useFetchData(apiEndpoint){
    const [alldata , setAlldata ] = useState([]);
    const [loading , setLoading ] = useState([true]);
    const [initialLoad , setInitialLoad] = useState(true);
    const [allMovie , setAllMovie] = useState([]);

    useEffect(() => {
        if (initialLoad){
            //set initlad load to false to prevent api call on subsequest renders
            setInitialLoad(false);
            setLoading(false);
            return; // exit useeffect
        }
        // set loading to true to indicate data fetching
        setLoading(true);
        const fetchAllData = async () => {
            try {
                const res = await axios.get(apiEndpoint)
                const alldata = res.data;
                setAlldata(alldata);
                setAllMovie(alldata);
                setLoading(false);
            } catch (error){
                console.error("error fetching movie data: " , error);
                setLoading(false); // set
            }
        };
        // fetch movie data only if category exitsts
        if (apiEndpoint){
            fetchAllData();
        }
    } , [initialLoad , apiEndpoint]);
    return {alldata ,allMovie ,  loading};
}

export default useFetchData;