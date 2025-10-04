import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export const CareersPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-4">
          Careers at GlobalMart
        </h1>
        <p className="text-lg text-slate-300 font-roboto max-w-2xl mx-auto">
          Be part of a passionate team shaping the next generation of online shopping.
        </p>
      </div>

      <div className="prose prose-invert prose-lg mx-auto text-slate-300 font-roboto space-y-6 text-center bg-slate-800/50 p-8 rounded-lg border border-slate-700">
        <h2>Work With Us</h2>
        <p>
          At <strong>GlobalMart</strong>, we’re more than just an e-commerce platform — we’re a community of innovators,
          designers, and problem-solvers redefining how people shop online.  
          We value creativity, collaboration, and a drive to make an impact.
        </p>

        <h2>Our Culture</h2>
        <p>
          We believe in building a workplace where ideas are heard, growth is encouraged, and every team member feels valued.
          Whether you’re in tech, design, marketing, or logistics — your role contributes directly to shaping a better shopping experience.
        </p>

        <h2>Current Opportunities</h2>
        <p>
          We currently don’t have open positions, but we’re always on the lookout for motivated individuals who share our vision.
          If you’d like to be considered for future roles, send us your resume and tell us how you can make a difference at GlobalMart.
        </p>

        <div className="mt-8">
          <a href="mailto:careers@globalmart.com">
            <Button size="lg">Send Us Your Resume</Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
