import React from 'react';
import { motion } from 'framer-motion';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-slate-300 font-roboto max-w-2xl mx-auto">
          Your privacy matters to us. This policy explains how we collect, use, and protect your information.  
          <br />Last updated: October 1, 2025.
        </p>
      </div>

      <div className="prose prose-invert prose-lg mx-auto text-slate-300 font-roboto space-y-6 bg-slate-800/50 p-8 rounded-lg border border-slate-700">
        <h2>1. Information We Collect</h2>
        <p>
          We collect personal details that you provide directly to us when you create an account, place an order,
          subscribe to our newsletter, or contact customer support.  
          This may include your name, email address, phone number, shipping and billing address, and payment details.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          The information we collect is used to:
        </p>
        <ul>
          <li>Process and fulfill your orders efficiently.</li>
          <li>Improve your shopping experience on our platform.</li>
          <li>Send you updates, offers, and order notifications (only with your consent).</li>
          <li>Detect and prevent fraudulent activities or security issues.</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information to third parties.  
          However, we may share your data with trusted service providers — such as payment processors,
          courier partners, and analytics tools — to help us operate and improve our services.
          These partners are obligated to keep your information secure and confidential.
        </p>

        <h2>4. Security of Your Data</h2>
        <p>
          We take reasonable precautions to protect your personal information.  
          All transactions are processed through secure gateways, and sensitive data (like payment details)
          is encrypted using industry-standard technology.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information at any time.  
          You can also opt out of marketing communications by following the unsubscribe link in our emails.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle your data, please contact us at:  
          <a href="mailto:privacy@globalmart.com" className="text-primary-accent hover:underline">
            privacy@globalmart.com
          </a>
        </p>
      </div>
    </motion.div>
  );
};
