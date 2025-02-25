
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";

const Resources = () => {
  const resources = [
    {
      title: "Tax Guides",
      description: "Comprehensive guides on various tax topics",
      items: [
        "Income Tax Basics",
        "Tax Saving Investments",
        "GST Guidelines",
        "Tax Planning Strategies",
        "Deductions and Exemptions",
        "Tax Filing Deadlines",
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Financial Tools",
      description: "Tools to help you manage your taxes",
      items: [
        "Tax Calculator",
        "Investment Planner",
        "Budget Tracker",
        "GST Calculator",
        "TDS Calculator",
        "EMI Calculator",
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      title: "Educational Content",
      description: "Learn about taxes and financial management",
      items: [
        "Video Tutorials",
        "Interactive Courses",
        "Expert Webinars",
        "Case Studies",
        "FAQs",
        "Tax Updates",
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Professional Services",
      description: "Get expert help with your taxes",
      items: [
        "Tax Consultation",
        "Document Review",
        "Audit Support",
        "Legal Assistance",
        "Tax Planning",
        "Business Advisory",
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
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
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Tax Resources</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access our comprehensive collection of tax resources, tools, and educational materials
            to help you make informed financial decisions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {resources.map((resource, index) => (
            <Card key={index} className="card-gradient overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resource.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Resources;
