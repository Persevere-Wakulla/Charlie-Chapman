import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    order: Object,
    firstName: String,
    lastName:String,
    telephone: String,
    email:String,
    cardNumber: String,
    cardCvc: String,
    exDate: Date,

})

const Orders = mongoose.model('foodOrder', orderSchema)

export default Orders