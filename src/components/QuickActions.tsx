import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Upload, TrendingDown, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QuickActions = () => {
  const { toast } = useToast();

  const handleAddExpense = () => {
    toast({
      title: "Add Expense",
      description: "Expense tracking feature coming soon!",
    });
  };

  const handleUploadReceipt = () => {
    toast({
      title: "Upload Receipt",
      description: "Receipt scanning feature coming soon!",
    });
  };

  const handleSetBudget = () => {
    toast({
      title: "Set Budget",
      description: "Budget management feature coming soon!",
    });
  };

  const handleViewAlerts = () => {
    toast({
      title: "Budget Alerts",
      description: "You have 2 budget alerts to review!",
      variant: "destructive",
    });
  };

  return (
    <Card className="shadow-[var(--shadow-soft)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
        <p className="text-sm text-muted-foreground">Manage your finances efficiently</p>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        <Button 
          onClick={handleAddExpense}
          className="flex flex-col items-center gap-2 h-auto py-4 bg-gradient-to-r from-primary via-primary to-blue-600 hover:shadow-[var(--shadow-medium)] transition-all"
        >
          <Plus className="h-5 w-5" />
          <span className="text-sm">Add Expense</span>
        </Button>
        
        <Button 
          onClick={handleUploadReceipt}
          variant="secondary"
          className="flex flex-col items-center gap-2 h-auto py-4 bg-gradient-to-r from-secondary via-secondary to-green-600 hover:shadow-[var(--shadow-medium)] transition-all"
        >
          <Upload className="h-5 w-5" />
          <span className="text-sm">Upload Receipt</span>
        </Button>
        
        <Button 
          onClick={handleSetBudget}
          variant="outline"
          className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-accent hover:shadow-[var(--shadow-soft)] transition-all"
        >
          <TrendingDown className="h-5 w-5" />
          <span className="text-sm">Set Budget</span>
        </Button>
        
        <Button 
          onClick={handleViewAlerts}
          variant="outline"
          className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-warning/10 hover:text-warning hover:border-warning hover:shadow-[var(--shadow-soft)] transition-all"
        >
          <AlertCircle className="h-5 w-5" />
          <span className="text-sm">View Alerts</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickActions;