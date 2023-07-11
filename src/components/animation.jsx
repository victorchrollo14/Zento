import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

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
      { threshold: 0.3 } // Adjust the threshold as needed
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
      transition={{ duration: 0.5, ease: "easeIn" }} // Adjust the duration as needed
    >
      {children}
    </motion.div>
  );
}

export const ScaleAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export const RightSlideAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ translateY: 500 }}
      whileInView={{ translateY: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const AnimateHeader = ({ children }) => {
  return (
    <motion.div
      initial={{ translateY: "100px", opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
};

export const AnimateSub = ({ children }) => {
  return (
    <motion.div
      className="w-full flex justify-center"
      initial={{ translateY: "100px", opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn", delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export const SlideInAnime = ({ children, translate }) => {
  return (
    <motion.div
      initial={{ translateX: translate, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="image-section w-full h-auto mb-10 max-w-[400px]"
    >
      {children}
    </motion.div>
  );
};
