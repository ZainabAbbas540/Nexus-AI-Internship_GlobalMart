import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

const headlineContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const headlineChildVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-bg via-slate-900 to-primary-bg overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 0.9, 1.2], opacity: [0.5, 0.3, 0.5], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side — Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={headlineContainerVariants}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={headlineChildVariants}
              className="inline-flex items-center px-4 py-2 bg-primary-accent/10 border border-primary-accent/20 rounded-full text-primary-accent text-sm font-roboto mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              Rated #1 Online Store 2025
            </motion.div>

            <motion.h1
              variants={headlineContainerVariants}
              className="text-4xl lg:text-6xl font-poppins font-bold text-primary-text mb-6"
            >
              <motion.span className="block" variants={headlineChildVariants}>
                Discover Amazing
              </motion.span>
              <motion.span
                className="block text-primary-accent"
                variants={headlineChildVariants}
              >
                Products
              </motion.span>
            </motion.h1>

            <motion.p
              variants={headlineChildVariants}
              className="text-lg text-slate-300 font-roboto mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Shop the latest trends with unbeatable prices, fast shipping, and exceptional customer service at GlobalMart.
            </motion.p>

            <motion.div
              variants={headlineChildVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/products">
                <Button 
                  size="lg" 
                  className="group w-full sm:w-auto bg-primary-accent text-white hover:bg-primary-accent/90 transition-all duration-300 shadow-lg shadow-primary-accent/20"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              
              <Link to="/categories">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-white transition-all duration-300"
                >
                  View Categories
                </Button>
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12"
            >
              {[
                { icon: Truck, text: 'Free Shipping' },
                { icon: Shield, text: 'Secure Payment' },
                { icon: RefreshCw, text: 'Easy Returns' }
              ].map((feature) => (
                <motion.div
                  key={feature.text}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-slate-300 font-roboto text-sm"
                >
                  <feature.icon className="w-5 h-5 text-primary-accent mr-2" />
                  {feature.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side — Floating Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src="https://i.pinimg.com/1200x/54/9a/54/549a54ab29422b393dcf9e41274c7c64.jpg"
                alt="A stylish modern product available at GlobalMart"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-primary-accent/10"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
