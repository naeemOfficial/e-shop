"use client";
import { useState } from "react";

const PaymentForm: React.FC = () => {
  const [paymentPeriod, setPaymentPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [packageType, setPackageType] = useState<
    "starter" | "advanced" | "pro"
  >("starter");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [street1, setStreet1] = useState("");
  const [street2, setStreet2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [signature, setSignature] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsProcessing(true);

    // Simulate a payment process
    setTimeout(() => {
      setPaymentStatus("Payment Successful!");
      setIsProcessing(false);
    }, 2000);
  };

  const handleSignatureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      setSignature(event.target.files[0]);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 py-[60px]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-md max-w-lg w-full border border-gray-200"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Payment Form
        </h2>

        {/* Payment Period Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Payment Period
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="monthly"
                checked={paymentPeriod === "monthly"}
                onChange={() => setPaymentPeriod("monthly")}
                className="mr-2"
              />
              Monthly
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="yearly"
                checked={paymentPeriod === "yearly"}
                onChange={() => setPaymentPeriod("yearly")}
                className="mr-2"
              />
              Yearly
            </label>
          </div>
        </div>

        {/* Package Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Select Package
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="starter"
                checked={packageType === "starter"}
                onChange={() => setPackageType("starter")}
                className="mr-2"
              />
              Starter
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="advanced"
                checked={packageType === "advanced"}
                onChange={() => setPackageType("advanced")}
                className="mr-2"
              />
              Advanced
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="pro"
                checked={packageType === "pro"}
                onChange={() => setPackageType("pro")}
                className="mr-2"
              />
              Pro
            </label>
          </div>
        </div>

        {/* Credit Card Details */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Name on Card
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
          />
          <label className="block text-gray-700 font-medium mt-4 mb-2">
            Card Number
          </label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
          />
          <div className="flex space-x-4 mt-4">
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-2">
                Expiration Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-2">
                CVV
              </label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
              />
            </div>
          </div>
        </div>

        {/* Organization and Email */}
        <div className="flex space-x-4 mb-6">
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium mb-2">
              Organization
            </label>
            <input
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            />
          </div>
        </div>

        {/* Billing Address */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Street Address
          </label>
          <input
            type="text"
            placeholder="Address Line 1"
            value={street1}
            onChange={(e) => setStreet1(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow mb-2"
          />
          <input
            type="text"
            placeholder="Address Line 2 (Optional)"
            value={street2}
            onChange={(e) => setStreet2(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
          />
        </div>

        <div className="flex space-x-4 mb-6">
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium mb-2">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium mb-2">
              State
            </label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Postal/Zip Code
          </label>
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
          />
        </div>

        {/* Confirmation and Signature */}
        <div className="mb-6">
          <p className="text-gray-600">
            By submitting this form, you agree to our terms and conditions and
            authorize us to process your payment.
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Authorization Signature
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleSignatureChange}
            className="w-full border border-gray-300 rounded-lg p-3 cursor-pointer"
          />
          {signature && (
            <div className="mt-2 text-gray-600">
              Selected file: {signature.name}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-primary text-white font-bold p-3 rounded-lg hover:bg-primary-dark transition-colors"
        >
          {isProcessing ? "Processing..." : "Submit"}
        </button>

        {paymentStatus && (
          <div className="mt-5 text-green-600 font-semibold text-center">
            {paymentStatus}
          </div>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;
