import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface ExpenseCardProps {
  title: string;
  amount: number;
  change: number;
  period: string;
}

const ExpenseCard = ({ title, amount, change, period }: ExpenseCardProps) => {
  const isPositive = change >= 0;
  
  return (
    <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Badge 
          variant={isPositive ? "default" : "destructive"}
          className="flex items-center gap-1"
        >
          {isPositive ? (
            <ArrowUpIcon className="h-3 w-3" />
          ) : (
            <ArrowDownIcon className="h-3 w-3" />
          )}
          {Math.abs(change)}%
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-card-foreground">
          ${amount.toLocaleString()}
        </div>
        <p className="text-xs text-muted-foreground">
          vs {period}
        </p>
      </CardContent>
    </Card>
  );
};

export default ExpenseCard;