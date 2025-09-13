import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ExpenseCard from "@/components/ExpenseCard";
import BudgetProgress from "@/components/BudgetProgress";
import SpendingChart from "@/components/SpendingChart";
import CategoryChart from "@/components/CategoryChart";
import GoalTracker from "@/components/GoalTracker";
import QuickActions from "@/components/QuickActions";
import { DollarSign, PiggyBank, TrendingUp, AlertTriangle } from "lucide-react";
import financeHero from "@/assets/finance-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Student Finance Manager</h1>
              <p className="text-muted-foreground">Take control of your finances with smart budgeting and analytics</p>
            </div>
            <img 
              src={financeHero} 
              alt="Finance Dashboard"
              className="w-full md:w-64 h-32 object-cover rounded-lg shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ExpenseCard 
            title="Total Balance" 
            amount={2847} 
            change={12.5} 
            period="last month" 
          />
          <ExpenseCard 
            title="Monthly Spending" 
            amount={1250} 
            change={-8.2} 
            period="last month" 
          />
          <ExpenseCard 
            title="Savings Goal" 
            amount={3200} 
            change={15.3} 
            period="last month" 
          />
          <ExpenseCard 
            title="Budget Remaining" 
            amount={597} 
            change={-23.1} 
            period="last month" 
          />
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <SpendingChart />
          <CategoryChart />
        </div>

        {/* Budget Progress and Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Budget Overview</h2>
            <BudgetProgress category="Food & Dining" spent={450} budget={500} />
            <BudgetProgress category="Transportation" spent={280} budget={300} />
            <BudgetProgress category="Entertainment" spent={220} budget={200} />
          </div>
          
          <div className="space-y-6">
            <GoalTracker />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <QuickActions />
          
          {/* Recent Transactions Preview */}
          <Card className="shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
              <p className="text-sm text-muted-foreground">Your latest financial activity</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Starbucks Coffee", amount: -4.85, category: "Food & Dining", date: "Today" },
                { name: "Uber Ride", amount: -12.50, category: "Transportation", date: "Yesterday" },
                { name: "Part-time Job", amount: 150.00, category: "Income", date: "2 days ago" },
                { name: "Netflix Subscription", amount: -15.99, category: "Entertainment", date: "3 days ago" },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium text-sm">{transaction.name}</p>
                    <p className="text-xs text-muted-foreground">{transaction.category} • {transaction.date}</p>
                  </div>
                  <span className={`font-semibold ${transaction.amount > 0 ? 'text-success' : 'text-foreground'}`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </span>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                View All Transactions
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
