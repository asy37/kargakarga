import axios from "axios";
import { DATA_URL } from "@/constants/API_URL";


const taskData = async () => {

    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Token not found in localStorage");
            return;
        }

        const response = await axios.get(DATA_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });        
        return response.data.data;
    } catch (error) {
        console.error('Error:', error);
    }
};

export default taskData;
