"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ScrollToTop from "./ScrollToTop";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <ScrollToTop />
      <motion.div
        key={pathname}
        initial={{ opacity: isHomePage ? 1 : 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: isHomePage ? 0 : 0.15,
          ease: "easeInOut" 
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition; 