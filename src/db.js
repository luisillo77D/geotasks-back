import mongoose from 'mongoose';
const url = 'mongodb+srv://luisillo77:sapo2002@geotasks.ktiukhb.mongodb.net/?retryWrites=true&w=majority'

export const connectdb = async () =>{
    try {
        await mongoose.connect(url);
        console.log("conexion exitosa")
    } catch (error) {
        console.log(error)
    }
}