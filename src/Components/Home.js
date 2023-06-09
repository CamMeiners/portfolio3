import './Home.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Home}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="homeText">
          <p>
            A 22 year old web developer from SLC, UT. I love minimal UX design,
            interesting functionality, and getting from point A to point B in
            the most efficient way possible.
          </p>
          <p>
            Currently expanding my knowledge and preparing for my next
            professional developer role.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
