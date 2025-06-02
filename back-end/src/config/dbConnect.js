import mongoose, {mongo} from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function conectaNaDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

console.log("🔧 String de conexão:", process.env.DB_CONNECTION_STRING);
export default conectaNaDatabase;