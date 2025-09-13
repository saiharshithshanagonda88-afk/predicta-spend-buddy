import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const spendingData = [
  { month: "Jan", amount: 850 },
  { month: "Feb", amount: 920 },
  { month: "Mar", amount: 780 },
  { month: "Apr", amount: 1100 },
  { month: "May", amount: 950 },
  { month: "Jun", amount: 1250 },
];

const SpendingChart = () => {
  return (
    <Card className="col-span-2 shadow-[var(--shadow-soft)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Spending Trend</CardTitle>
        <p className="text-sm text-muted-foreground">Your spending pattern over the last 6 months</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={spendingData}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              className="text-muted-foreground"
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              className="text-muted-foreground"
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
              formatter={(value) => [`$${value}`, 'Spending']}
            />
            <Line 
              type="monotone" 
              dataKey="amount" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: 'hsl(var(--primary))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SpendingChart;