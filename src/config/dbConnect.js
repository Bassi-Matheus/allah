import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Bassi-Matheus:kuD1RdAGRB7cQqOn@cluster0.pfdcrgp.mongodb.net/alura-node");

let db = mongoose.connection;
export default db;