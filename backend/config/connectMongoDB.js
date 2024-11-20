import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
        } catch (error) {
            console.log("Error connecting to mongodb",error.message);
            process.exit(1);
        }
}

export default connectMongoDB;