import mongoose from "mongoose";


const Schema = new mongoose.Schema({
    name : {
        type: String,
    },
    country : {
        type: String,
    },
    email: {
        type: String
    },
    password: {
        type: String,
        select: false
    } 
})

export const SchemaModel = mongoose.model("Schemamodels", Schema);