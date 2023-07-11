import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export function Section({ children }) {
  const ref = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1 });
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8, ease:"easeInOut" }} // Adjust the duration as needed
    >
      {children}
    </motion.div>
  );
}


