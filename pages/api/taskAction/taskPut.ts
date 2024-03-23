import axios from "axios";
import { PUT_TASK__URL } from "@/constants/API_URL";

const taskPut = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Token not found in localStorage");
            return;
        }

        const response = await axios.get(PUT_TASK__URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('flag:', response);
    } catch (error) {
        console.error('Error:', error);
    }
};

export default taskPut;
