import React from 'react';

function Contact() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          We'd love to hear from you. Whether you have a question or need support, feel free to reach out to us.
        </p>
        <p className="mt-2 text-lg text-blue-600">
          Email: contact@prioritasgroup.com
        </p>
        <p className="mt-2 text-lg text-blue-600">
          Phone: +62 123 4567 890
        </p>
      </div>
    </div>
  );
}

export default Contact;
