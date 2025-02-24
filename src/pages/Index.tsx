
import { Header } from "@/components/Header";
import { TaxCalculator } from "@/components/TaxCalculator";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with DhanRakshak name */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 mb-12"
          >
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              DhanRakshak
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your AI-powered tax assistant. Calculate taxes, get personalized advice,
              and make informed financial decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center space-y-4 mb-8"
          >
            <h2 className="text-3xl font-semibold">Tax Calculator</h2>
            <p className="text-muted-foreground">
              Calculate your taxes with real-time updates and visualizations
            </p>
          </motion.div>
          <TaxCalculator />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
