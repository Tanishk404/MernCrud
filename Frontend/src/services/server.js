import axios from "axios";

const getData = async () => {
    try {
        const res = await axios.get("http://localhost:3005/");
        const allData = res.data.data;
        return allData;

    }catch (error) {
        console.log(error, "not getting data from backend");
    }
} 