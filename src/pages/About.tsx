import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Globe, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

// Updated values for new look
const values = [
  {
    icon: Lightbulb,
    title: 'Innovation at the Core',
    description: 'We constantly explore new ideas and technologies to stay ahead and deliver fresh, forward-thinking solutions to our customers.'
  },
  {
    icon: Users,
    title: 'Building Trust Together',
    description: 'Our community is at the heart of everything we do. We believe in fostering meaningful relationships built on trust and transparency.'
  },
  {
    icon: Globe,
    title: 'Connecting Beyond Borders',
    description: 'We embrace diversity and bring global opportunities to local markets, ensuring that everyone can benefit from world-class products.'
  },
];

export const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* --- HERO SECTION --- */}
      <motion.section variants={itemVariants} className="text-center mb-24">
        <h1 className="text-4xl lg:text-6xl font-poppins font-extrabold text-primary-accent mb-4">
          Who We Are
        </h1>
        <p className="text-lg text-primary-text/80 font-roboto max-w-3xl mx-auto">
          At GlobalMart, we reimagine the way people shop online. Our journey is driven by a passion for design, technology, and the belief that everyone deserves access to innovative and affordable products.
        </p>
      </motion.section>

      {/* --- MISSION & VISION SECTION --- */}
      <motion.section variants={containerVariants} className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div variants={itemVariants}>
          <img
            src="https://i.pinimg.com/736x/a3/64/08/a364087a92eb00d2d81f5d078b1091a2.jpg"
            alt="Creative workspace with modern technology"
            className="rounded-2xl shadow-2xl shadow-brand/20"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-poppins font-bold text-brand mb-4 flex items-center gap-3">
            <Target className="w-8 h-8 text-brand" /> Our Vision
          </h2>
          <p className="text-primary-text/80 font-roboto leading-relaxed text-lg">
            We envision a connected marketplace where technology empowers people to discover, connect, and grow. Our vision is to inspire innovation, create value, and build a sustainable future through every product we offer.
          </p>
        </motion.div>
      </motion.section>

      {/* --- OUR CORE PRINCIPLES SECTION --- */}
      <motion.section variants={itemVariants} className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-white">
            What We Stand For
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-surface p-8 rounded-xl border border-surface-border text-center"
              whileHover={{ y: -8, scale: 1.04, boxShadow: '0 14px 28px rgba(255, 107, 107, 0.15)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-accent/10 rounded-full border border-primary-accent/20">
                  <value.icon className="w-8 h-8 text-primary-accent" />
                </div>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-primary-text/60 font-roboto">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- EXPLORE PRODUCTS CTA SECTION --- */}
      <motion.section
        variants={itemVariants}
        className="bg-gradient-to-r from-brand to-secondary rounded-2xl p-12 text-center flex flex-col items-center"
      >
        <h2 className="text-3xl font-poppins font-bold text-white mb-4">
          Start Your Journey With Us
        </h2>
        <p className="text-lg text-primary-text/80 max-w-2xl mx-auto mb-8">
          Explore a marketplace where creativity meets quality. Whether you’re looking for everyday essentials or unique finds, we’re here to bring it closer to you.
        </p>
        <Link to="/products">

          <Button
            size="lg"
            className="group bg-gradient-to-r from-primary-accent to-brand hover:opacity-90 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            Explore Now
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>



        </Link>
      </motion.section>
    </motion.div>
  );
};
