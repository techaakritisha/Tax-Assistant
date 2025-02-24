
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

export const TaxCalculator = () => {
  const [income, setIncome] = useState("");
  const [taxData, setTaxData] = useState<{ name: string; value: number }[]>([]);

  const calculateTax = () => {
    const incomeValue = parseFloat(income);
    if (!isNaN(incomeValue)) {
      const taxAmount = incomeValue * 0.2; // Simplified tax calculation
      const takeHome = incomeValue - taxAmount;
      setTaxData([
        { name: "Tax Amount", value: taxAmount },
        { name: "Take Home", value: takeHome },
      ]);
    }
  };

  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto p-6"
    >
      <Card className="glass-panel p-6 space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Tax Calculator</h2>
          <p className="text-muted-foreground">
            Calculate your taxes with ease
          </p>
        </div>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="income" className="text-right">
              Annual Income
            </Label>
            <Input
              id="income"
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="col-span-3"
              placeholder="Enter your annual income"
            />
          </div>
        </div>

        <Button onClick={calculateTax} className="w-full">
          Calculate Tax
        </Button>

        {taxData.length > 0 && (
          <div className="h-[300px] w-full mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={taxData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    value,
                    name,
                  }) => {
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                    return (
                      <text
                        x={x}
                        y={y}
                        fill="white"
                        textAnchor={x > cx ? "start" : "end"}
                        dominantBaseline="central"
                      >
                        {`${name} (₹${value.toLocaleString()})`}
                      </text>
                    );
                  }}
                  outerRadius={80}
                  dataKey="value"
                >
                  {taxData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </Card>
    </motion.div>
  );
};
