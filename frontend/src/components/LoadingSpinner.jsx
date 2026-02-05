import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className="w-12 h-12 border-4 border-gray-300 border-t-el-blue-600 rounded-full"
    />
  );
}
