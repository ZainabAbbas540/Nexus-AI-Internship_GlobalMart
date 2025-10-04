import React from 'react';
import { motion } from 'framer-motion';

export const ShippingInfoPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-4">
          Shipping Information
        </h1>
        <p className="text-lg text-slate-300 font-roboto max-w-2xl mx-auto">
          Learn about our delivery options, estimated timelines, and shipping policies.
        </p>
      </div>

      <div
        className="
          prose prose-invert prose-lg mx-auto font-roboto space-y-6 
          bg-slate-800/50 p-8 rounded-lg 
          border border-slate-700 
          shadow-lg shadow-black/40
          [&_*]:text-slate-300
          [&_*]:border-slate-700
        "
      >
        <h2>Order Processing</h2>
        <p>
          All orders are carefully packed and processed within <strong>1–2 business days</strong>.
          Orders placed on weekends or public holidays will be processed the next working day.
          In case of unexpected delays, we will notify you promptly via email.
        </p>

        <h2>Shipping Options & Delivery Time</h2>
        <p>
          We currently offer <strong>standard shipping</strong> across Pakistan.
          Estimated delivery time is <strong>3–6 business days</strong> depending on your location.
          Express delivery options will be introduced soon for select cities.
        </p>

        <h2>Free Delivery Threshold</h2>
        <p>
          Enjoy <strong>free shipping</strong> on all orders over{' '}
          {new Intl.NumberFormat('en-PK', {
            style: 'currency',
            currency: 'PKR',
            minimumFractionDigits: 0,
          }).format(15000)}.
          Orders below this amount will have a minimal delivery fee shown at checkout.
        </p>

        <h2>Tracking Your Order</h2>
        <p>
          Once your package is dispatched, you’ll receive a confirmation email containing a tracking number.
          You can track your order’s status on our website or the courier’s tracking page within 24 hours.
        </p>

        <h2>Delivery Issues</h2>
        <p>
          If your order hasn’t arrived within the expected time frame,
          please contact our support team at <strong>support@globalmart.pk</strong>.
          We’ll work with our courier partners to resolve the issue as quickly as possible.
        </p>
      </div>
    </motion.div>
  );
};
