import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What is GlobalMart and how does it work?",
    answer: "GlobalMart is an AI-powered e-commerce platform designed to make online shopping smarter, faster, and more personalized. We connect you with top-quality products and brands using intelligent search and recommendation systems."
  },
  {
    question: "Do I need an account to shop on GlobalMart?",
    answer: "You can browse freely without an account, but creating one lets you track your orders, save favorites, and receive personalized recommendations and offers."
  },
  {
    question: "How long does delivery usually take?",
    answer: "Standard delivery within Pakistan takes 3–5 working days. Orders in major cities may arrive sooner, while remote areas might take a little longer depending on courier availability."
  },
  {
    question: "Can I return or exchange an item?",
    answer: "Yes, we offer a 14-day return or exchange policy for most products, provided they are unused and in their original packaging. Simply visit your order details page to initiate a return."
  },
  {
    question: "Is my personal data safe on GlobalMart?",
    answer: "Absolutely. We use advanced encryption and follow strict privacy policies to ensure your data remains completely secure and confidential at all times."
  }
];

export const FAQPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-slate-300 font-roboto max-w-2xl mx-auto">
          Find quick answers about shopping, delivery, and security at GlobalMart.
        </p>
      </div>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
          >
            <h3 className="font-poppins font-semibold text-primary-accent text-lg mb-2">{faq.question}</h3>
            <p className="font-roboto text-slate-300">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
