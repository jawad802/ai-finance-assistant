"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const analyticsTrendData = [
    { month: "Jan", income: 4200, expenses: 2400 },
    { month: "Feb", income: 3800, expenses: 1900 },
    { month: "Mar", income: 5100, expenses: 3800 },
    { month: "Apr", income: 4600, expenses: 2900 },
    { month: "May", income: 6900, expenses: 4800 },
    { month: "Jun", income: 5400, expenses: 3900 },
];

const categorySpendingData = [
    { category: "Groceries", amount: 450 },
    { category: "Software", amount: 180 },
    { category: "Dining", amount: 320 },
    { category: "Utilities", amount: 150 },
    { category: "Entertainment", amount: 90 },
];

export default function AnalyticsPage() {
    return (
        <div className="flex flex-col gap-6 p-6 md:p-8 max-w-7xl mx-auto w-full">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
                <p className="text-sm text-muted-foreground">Deep dive into your financial trends, cash flow, and spending habits.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {/* Trend Area Chart */}
                <Card className="border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-base font-semibold">Income vs Expenses Trend</CardTitle>
                        <CardDescription>6-month historical overview of your financial performance.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[350px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={analyticsTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="analyticsIncome" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                                        </linearGradient>
                                        <linearGradient id="analyticsExpenses" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
                                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }}
                                    />
                                    <Area type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2.5} fillOpacity={1} fill="url(#analyticsIncome)" name="Income" />
                                    <Area type="monotone" dataKey="expenses" stroke="#3b82f6" strokeWidth={2.5} fillOpacity={1} fill="url(#analyticsExpenses)" name="Expenses" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Category Spending Bar Chart */}
                <Card className="border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-base font-semibold">Spending by Category</CardTitle>
                        <CardDescription>Monthly expense distribution across your tracked categories.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[320px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={categorySpendingData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
                                    <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        cursor={{ fill: "hsl(var(--muted)/0.4)" }}
                                        contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }}
                                    />
                                    <Bar dataKey="amount" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}