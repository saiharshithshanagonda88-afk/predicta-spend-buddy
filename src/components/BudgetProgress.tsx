import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface BudgetProgressProps {
  category: string;
  spent: number;
  budget: number;
  color?: string;
}

const BudgetProgress = ({ category, spent, budget, color = "primary" }: BudgetProgressProps) => {
  const percentage = (spent / budget) * 100;
  const remaining = budget - spent;
  const isOverBudget = percentage > 100;
  
  return (
    <Card className="shadow-[var(--shadow-soft)]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-base font-semibold">{category}</CardTitle>
        <Badge variant={isOverBudget ? "destructive" : percentage > 80 ? "secondary" : "default"}>
          {isOverBudget ? "Over Budget" : percentage > 80 ? "Near Limit" : "On Track"}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Spent</span>
          <span className="font-semibold">${spent.toLocaleString()}</span>
        </div>
        <Progress 
          value={Math.min(percentage, 100)} 
          className="h-2"
        />
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Budget</span>
          <span className="font-semibold">${budget.toLocaleString()}</span>
        </div>
        <div className="text-right">
          <span className={`text-sm font-medium ${remaining >= 0 ? 'text-success' : 'text-destructive'}`}>
            ${Math.abs(remaining).toLocaleString()} {remaining >= 0 ? 'remaining' : 'over budget'}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetProgress;