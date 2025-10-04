import React from 'react';
import { motion } from 'framer-motion';

export const PressPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-4">
          Press & Media
        </h1>
        <p className="text-lg text-slate-300 font-roboto max-w-2xl mx-auto">
          Explore official news, media resources, and brand information about GlobalMart.
        </p>
      </div>

      <div className="prose prose-invert prose-lg mx-auto text-slate-300 font-roboto space-y-6 bg-slate-800/50 p-8 rounded-lg border border-slate-700">
        <h2>Press Inquiries</h2>
        <p>
          Members of the media are welcome to contact our public relations team for interviews, statements,
          or details about our latest initiatives. We’re happy to collaborate with journalists, bloggers,
          and industry experts covering the e-commerce and retail sectors.
        </p>

        <p>
          <strong>Contact:</strong><br />
          Email: <a href="mailto:press@globalmart.com" className="text-primary-accent hover:underline">press@globalmart.com</a><br />
          Phone: <a href="tel:+923001234567" className="text-primary-accent hover:underline">+92 300 1234567</a>
        </p>

        <h2>Brand Assets & Media Kit</h2>
        <p>
          For access to our official logo, product imagery, or brand guidelines, please reach out to our media team.
          We’ll provide our approved media kit containing high-quality visuals, color palettes, and company background
          for press use.
        </p>

        <h2>Recent Announcements</h2>
        <p>
          Stay tuned for upcoming press releases about new partnerships, product launches, and GlobalMart’s community
          initiatives. You can also follow us on our social media platforms for real-time updates and stories.
        </p>

        <h2>About GlobalMart</h2>
        <p>
          GlobalMart is one of Pakistan’s fastest-growing e-commerce platforms, combining innovative technology with
          customer-first values. We’re redefining how people shop by offering quality, affordability, and convenience—all
          in one place.
        </p>
      </div>
    </motion.div>
  );
};
