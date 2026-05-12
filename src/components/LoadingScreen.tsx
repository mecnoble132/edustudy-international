import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo.png';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[9999] bg-[#000d1a] flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Soft Ambient Glow */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-64 h-64 bg-[#B8860B] rounded-full blur-[100px] -z-10"
        />

        {/* Minimal Logo Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-24 h-24"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full rounded-full object-cover border border-white/10 shadow-2xl"
          />
        </motion.div>

        {/* Elegant Branded Text */}
        <div className="mt-12 overflow-hidden">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-white text-2xl font-black tracking-[0.4em] uppercase"
          >
            EduStudy
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "circOut" }}
            className="h-px bg-[#B8860B] w-full mt-2 origin-center"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-[#B8860B] text-[10px] font-bold tracking-[0.6em] uppercase mt-3 block text-center"
          >
            International
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};
