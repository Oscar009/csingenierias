'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface AnimatedTextProps {
  children: React.ReactNode; // Contenido que se va a animar
  direction?: 'left' | 'right'; // Dirección de la animación
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, direction = 'left' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Definición de las variantes de animación
  const variants: Variants = {
    hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 }, // Estado inicial
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }, // Estado final
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;