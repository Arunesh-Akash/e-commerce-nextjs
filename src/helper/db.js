import mongoose from "mongoose";

const config={
    isConnected:0
}
export async function connectDb(){
    if(config.isConnected){
        return;
    }
    try {
       const {connection}=await mongoose.connect('mongodb+srv://akashkr099:6EMpjvkWKY4BaZJ0@cluster0.805xdvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
       console.log('Database connected');
       console.log(connection.readyState);
       config.isConnected=connection.readyState;
    } catch (err) {
        console.log('Failed to connect',err);
    }
} 