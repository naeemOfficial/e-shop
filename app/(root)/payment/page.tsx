"use client"
import { useState } from 'react';

const PaymentForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsProcessing(true);

    // Simulate a payment process
    setTimeout(() => {
      setPaymentStatus('Payment Successful!');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Payment Information</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name on Card</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Expiration Date</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-primary text-white font-semibold p-3 rounded-lg transition-colors"
        >
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </button>

        {paymentStatus && <div className="mt-4 text-green-600 font-semibold text-center">{paymentStatus}</div>}
      </form>
    </div>
  );
};

export default PaymentForm;
