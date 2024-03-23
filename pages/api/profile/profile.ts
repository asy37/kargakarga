import axios from "axios";
import { PROFILE_URL } from "@/constants/API_URL";

const profileData = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Token not found in localStorage");
            return;
        }

        const response = await axios.get(PROFILE_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('Response:', response);
    } catch (error) {
        console.error('Error:', error);
    }
};

export default profileData;
