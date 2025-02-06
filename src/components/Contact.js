import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out to us!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-6">
          Have any questions or feedback? Get in touch with us!
        </p>

        <form onSubmit={handleSubmit}>

          <FormField
            id="name"
            label="Full Name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />

          <FormField
            id="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <FormField
            id="message"
            label="Your Message"
            type="textarea"
            value={formData.message}
            onChange={handleInputChange}
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const FormField = ({ id, label, type, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        name={id}
        rows="4"
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
      />
    )}
  </div>
);

export default Contact;
