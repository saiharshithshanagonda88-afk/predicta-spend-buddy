import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp } from "lucide-react";

const goals = [
  {
    id: 1,
    name: "Emergency Fund",
    current: 3200,
    target: 5000,
    deadline: "Dec 2024",
    priority: "high"
  },
  {
    id: 2,
    name: "New Laptop",
    current: 650,
    target: 1200,
    deadline: "Mar 2025",
    priority: "medium"
  },
  {
    id: 3,
    name: "Spring Break Trip",
    current: 300,
    target: 800,
    deadline: "Feb 2025",
    priority: "low"
  }
];

const GoalTracker = () => {
  return (
    <Card className="shadow-[var(--shadow-soft)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Target className="h-5 w-5" />
          Financial Goals
        </CardTitle>
        <p className="text-sm text-muted-foreground">Track your savings progress</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal) => {
          const percentage = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          
          return (
            <div key={goal.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{goal.name}</h4>
                  <Badge 
                    variant={goal.priority === 'high' ? 'destructive' : goal.priority === 'medium' ? 'secondary' : 'default'}
                    className="text-xs"
                  >
                    {goal.priority}
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">{goal.deadline}</span>
              </div>
              
              <Progress value={percentage} className="h-2" />
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                </span>
                <span className="font-medium text-primary flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  ${remaining.toLocaleString()} to go
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default GoalTracker;