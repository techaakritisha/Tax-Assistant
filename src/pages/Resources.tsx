
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
      ],
    },
    {
      title: "Financial Tools",
      description: "Tools to help you manage your taxes",
      items: [
        "Tax Calculator",
        "Investment Planner",
        "Budget Tracker",
        "GST Calculator",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {resources.map((resource, index) => (
            <Card key={index} className="card-gradient">
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
