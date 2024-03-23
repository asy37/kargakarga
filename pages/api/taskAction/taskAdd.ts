import axios from "axios";
import { ADD_TASK_URL } from "@/constants/API_URL";

const taskAdd = async (params:any) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Token not found in localStorage");
            return;
        }

        const response = await axios.post(ADD_TASK_URL, params, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('taskadd:', response);
    } catch (error) {
        console.error('Error:', error);
    }
};


export default taskAdd;
