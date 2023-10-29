import React, { useState } from 'react';
import Brief from './Brief';
import { db } from './firebase'; 

const Checkout = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const handlePlaceOrder = () => {
    
    const orderData = {
      firstName,
      lastName,
      phone,
      email,
      
    };

    // Envía los datos del pedido a Firebase
    db.collection('orders').add(orderData)
      .then((docRef) => {
        console.log('Order placed with ID:', docRef.id);

        
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
        setConfirmEmail('');
      })
      .catch((error) => {
        console.error('Error placing order:', error);
      });
  };

  return (
    <div className="checkout">
      <Brief />
      <h2>Complete su pedido</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">Nombre:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmEmail">Confirmar Correo Electrónico:</label>
          <input
            type="email"
            id="confirmEmail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
        </div>
        <button onClick={handlePlaceOrder}>Realizar Pedido</button>
      </form>
    </div>
  );
}

export default Checkout;



