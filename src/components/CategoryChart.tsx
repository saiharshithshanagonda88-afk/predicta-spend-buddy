import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const categoryData = [
  { name: "Food & Dining", value: 450, color: "hsl(var(--primary))" },
  { name: "Transportation", value: 280, color: "hsl(var(--secondary))" },
  { name: "Entertainment", value: 180, color: "hsl(var(--accent-foreground))" },
  { name: "Shopping", value: 320, color: "hsl(var(--warning))" },
  { name: "Education", value: 520, color: "hsl(var(--success))" },
];

const CategoryChart = () => {
  const total = categoryData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="shadow-[var(--shadow-soft)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Spending by Category</CardTitle>
        <p className="text-sm text-muted-foreground">This month's breakdown</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <ResponsiveContainer width="60%" height={200}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Amount']}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 flex-1 ml-4">
            {categoryData.map((category) => (
              <div key={category.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-muted-foreground">{category.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold">${category.value}</div>
                  <div className="text-xs text-muted-foreground">
                    {((category.value / total) * 100).toFixed(0)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryChart;