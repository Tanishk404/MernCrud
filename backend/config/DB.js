import mongoose from "mongoose";

export const DBCONNECTION = async () => {
    try {
    const db = await mongoose.connect(process.env.MONGODB_URL)
    console.log("DataBase connection success");

    } catch (error) {
    console.log("Connection failed with data base", error.message);
    }
}