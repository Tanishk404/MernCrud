import { SchemaModel } from "../models/Schema.js";
import bcrypt from "bcrypt"

export const Home = async (req, res) => {
    try {
        const DbData = await SchemaModel.find()
        res.status(200).json({
            message: "Get Route is works",
            data: DbData
        });
   
    } catch (er) {
        console.log(er, "Getting error in finding data from database collection");
        res.status(500).json({error: "Server error"});
    }
}

export const HomePOST = async (req, res) => {
    try {
        const { name, country, email, password} = req.body
        const hashPass = await bcrypt.hash(password, 10)
        const saved = await SchemaModel.insertOne({
            name,
            country,
            email,
            password: hashPass
        })

        res.status(201).json({
            success: true,
            message: "Data saved successfully",
            data: saved
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error saving data"
        })
    }
}


export const EditData = async (req, res) => {
    try {
        const { id } = req.params;
        const model = await SchemaModel.findByIdAndUpdate(id);
    
        res.status(200).json({
            message: "Data updated",
            data: model
        })
        
    } catch (error) {
        res.status(500).json({
            error: "not updated data"})
        console.log(error.message, "not update data")
    }
}


export const GetUpdatedData = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, country, email } = req.body;

        const ModelData = await SchemaModel.findByIdAndUpdate((id), {
            name,
            country,
            email
        })
        res.status(200).json({
            message: "Data updated",
        })
        console.log("data upadation successfully");
        
    } catch (error) {
        res.status(500).json({
        error: "not updated data"})

        console.log(error.message, "getting error in updating data");
    }
}




export const DeleteData = async (req, res) => {
    try {
        const { id } = req.params;
        
        const delData = await SchemaModel.findByIdAndDelete(id)

        res.status(201).json({
            message: "deleted succssfully"
        })
        
    } catch (error) {
        res.status(500).json({
            message: "delete failed"
        })
        console.log(error.message);
    }
}