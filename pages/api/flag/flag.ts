import axios from "axios";
import { FLAG_URL } from "@/constants/API_URL";

const flagData = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Token not found in localStorage");
            return;
        }

        const response = await axios.get(FLAG_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
        
    } catch (error) {
        console.error('Error:', error);
    }
};

export default flagData;
