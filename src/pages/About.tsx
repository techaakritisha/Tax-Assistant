
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const About = () => {
  const taxGrowthData = [
    {
      year: '2022',
      'Direct Tax': 14.1,
      'Indirect Tax': 12.3,
      'Total Collections': 13.2,
    },
    {
      year: '2023',
      'Direct Tax': 15.8,
      'Indirect Tax': 13.9,
      'Total Collections': 14.85,
    },
    {
      year: '2024',
      'Direct Tax': 17.2,
      'Indirect Tax': 15.1,
      'Total Collections': 16.15,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="card-gradient mb-8">
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
              <h3>Growth and Impact</h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={taxGrowthData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Direct Tax" fill="#8884d8" />
                    <Bar dataKey="Indirect Tax" fill="#82ca9d" />
                    <Bar dataKey="Total Collections" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <h3>Our Values</h3>
              <ul>
                <li>Transparency in all our operations</li>
                <li>Commitment to accuracy and compliance</li>
                <li>Innovation in tax solutions</li>
                <li>Customer-first approach</li>
                <li>Continuous learning and improvement</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
