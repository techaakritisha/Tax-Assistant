
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-3xl">About DhanRakshak</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert">
              <p>
                DhanRakshak is your AI-powered tax assistant, designed to make tax
                planning and management simpler and more accessible for everyone.
                Our platform combines cutting-edge artificial intelligence with
                expert tax knowledge to provide you with personalized guidance and
                support.
              </p>
              <h3>Our Mission</h3>
              <p>
                We strive to demystify the complex world of taxation and empower
                individuals and businesses to make informed financial decisions. Our
                goal is to make tax planning accessible, understandable, and
                stress-free for everyone.
              </p>
              <h3>Why Choose DhanRakshak?</h3>
              <ul>
                <li>AI-powered tax calculations and recommendations</li>
                <li>Real-time assistance through our chatbot</li>
                <li>Comprehensive resource library</li>
                <li>User-friendly interface</li>
                <li>Secure and confidential</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
