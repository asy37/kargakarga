import axios from "axios";
import { DELETE_TASK_URL } from "@/constants/API_URL";

const deleteTask = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Token not found in localStorage");
            return;
        }

        const response = await axios.get(DELETE_TASK_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('flag:', response);
    } catch (error) {
        console.error('Error:', error);
    }
};

export default deleteTask;
