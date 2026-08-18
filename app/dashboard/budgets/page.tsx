"use client";

import { useState } from "react";
import { Plus, Wallet, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const initialBudgets = [
    { id: "1", category: "Groceries", spent: 450, limit: 600, color: "bg-emerald-500" },
    { id: "2", category: "Software & Subscriptions", spent: 180, limit: 200, color: "bg-blue-500" },
    { id: "3", category: "Dining Out", spent: 320, limit: 300, color: "bg-amber-500" }, // Over budget example
    { id: "4", category: "Utilities", spent: 150, limit: 250, color: "bg-indigo-500" },
    { id: "5", category: "Entertainment", spent: 90, limit: 150, color: "bg-purple-500" },
];

export default function BudgetsPage() {
    const [budgets] = useState(initialBudgets);

    return (
        <div className="flex flex-col gap-6 p-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Budgets</h1>
                    <p className="text-muted-foreground">Monitor and manage your monthly category spending limits.</p>
                </div>
                <Button className="gap-2 bg-[#E35335] hover:bg-[#FF4433]">
                    <Plus className="h-4 w-4" /> Create Budget
                </Button>
            </div>

            {/* Budget Cards Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {budgets.map((budget) => {
                    const percentage = Math.round((budget.spent / budget.limit) * 100);
                    const isOverBudget = budget.spent > budget.limit;

                    return (
                        <Card key={budget.id} className="relative overflow-hidden">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-medium">{budget.category}</CardTitle>
                                <Wallet className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent className="flex flex-col gap-3">
                                <div className="flex justify-between items-baseline">
                                    <span className="text-2xl font-bold">${budget.spent}</span>
                                    <span className="text-sm text-muted-foreground">of ${budget.limit} limit</span>
                                </div>

                                <Progress value={percentage > 100 ? 100 : percentage} className="h-2" />

                                <div className="flex items-center justify-between text-xs">
                                    <span className={isOverBudget ? "text-destructive font-semibold flex items-center gap-1" : "text-muted-foreground"}>
                                        {isOverBudget && <AlertCircle className="h-3 w-3" />}
                                        {percentage}% spent
                                    </span>
                                    <span className="text-muted-foreground">
                                        {isOverBudget ? `+$${budget.spent - budget.limit} over` : `$${budget.limit - budget.spent} left`}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}