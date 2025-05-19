// Use of onChange attribute

import {useState} from "react";

function DeliveryForm() {
    const [name, setName] = useState("");
    const [qty, setQty] = useState(1);
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");
    
    function handleNameChange(event) {
        setName(event.target.value)
    }
    function handleQtyChange(event) {
        setQty(event.target.value)
    }
    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }
    function handleShippingChange(event) {
        setShipping(event.target.value)
    }
    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type="number" value={qty} onChange={handleQtyChange} />
            <p>Qty: {qty}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="UPI">UPI</option>
                <option value="Credit Card">Credit Card</option>
            </select>
            <p>Payment: {payment}</p>

            
        </div>
    )
}

export default DeliveryForm;
