import { useState } from "react";

const OnChange = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value)
  }

  const handleshippingChange = (e) => {
    setShipping(e.target.value)
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />

      <input type="number" value={quantity} onChange={handleQuantityChange} />

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      ></textarea>
        <select 
        value={payment}
        onChange={handlePaymentChange}
        >
            <option value="">Select an option</option>
            <option value="visa">Visa</option>
            <option value="Mastercard">Master Card</option>
            <option value="Giftcard">GiftCard</option>
        </select> <br />
        <label
         htmlFor="Pickup">
            <input 
            type="radio" 
            value="Pick Up"
            checked={shipping === "Pick Up"}
            onChange={handleshippingChange}
            />
            Pick Up</label> <br />
        <label
         htmlFor="Delivery"
         >
             <input 
            type="radio" 
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleshippingChange}
            />
            Delivery</label>

      <div>
        <p>Name: {name}</p>
        <p>Quantity: {quantity}</p>
        <p>Comment: {comment}</p>
        <p>Payment:{payment}</p>
        <p>Shipping: {shipping}</p>
      </div>
    </div>
  );
};
export default OnChange;
