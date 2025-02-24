
import { Header } from "@/components/Header";
import { TaxCalculator } from "@/components/TaxCalculator";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center space-y-4 mb-8"
        >
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to DhanRakshak
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your AI-powered tax assistant. Calculate taxes, get personalized advice,
            and make informed financial decisions.
          </p>
        </motion.div>
        <TaxCalculator />
      </main>
    </div>
  );
};

export default HomePage;
