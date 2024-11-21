import mongoose from "mongoose";


const dbCConnect = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL!);
        console.log("Db Connection Successful")
    } catch(error){
        console.log("Db Connection Failed");
        console.error(error);
        process.exit(1);
    }
}

export default dbCConnect;