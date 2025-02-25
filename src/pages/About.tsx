
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      description: "Expert in tax law and financial planning with 15+ years of experience",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
    },
    {
      name: "Our Team",
      role: "Tax Experts & Developers",
      description: "A dedicated team of tax professionals and technology experts",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    }
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
              <h3>Why Choose DhanRakshak?</h3>
              <ul>
                <li>AI-powered tax calculations and recommendations</li>
                <li>Real-time assistance through our chatbot</li>
                <li>Comprehensive resource library</li>
                <li>User-friendly interface</li>
                <li>Secure and confidential</li>
              </ul>
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

          <div className="grid gap-6 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="card-gradient">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-primary mb-2">{member.role}</p>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
