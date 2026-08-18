"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const cashFlowData = [
    { month: "Jan", income: 4200, expenses: 2400 },
    { month: "Feb", income: 3800, expenses: 1900 },
    { month: "Mar", income: 5100, expenses: 3800 },
    { month: "Apr", income: 4600, expenses: 2900 },
    { month: "May", income: 6900, expenses: 4800 },
    { month: "Jun", income: 5400, expenses: 3900 },
];

const expenseBreakdown = [
    { name: "Groceries", value: 450, color: "#f97316" },
    { name: "Software", value: 180, color: "#3b82f6" },
    { name: "Dining Out", value: 320, color: "#10b981" },
    { name: "Utilities", value: 150, color: "#8b5cf6" },
    { name: "Entertainment", value: 90, color: "#ec4899" },
];

export default function DashboardOverview() {
    return (
        <div className="flex flex-col gap-6 p-6 md:p-8 max-w-7xl mx-auto w-full">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Financial Overview</h1>
                <p className="text-sm text-muted-foreground">Monitor your real-time cash flow and spending distribution.</p>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Cash Flow Area Chart */}
                <Card className="lg:col-span-2 border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-base font-semibold">Cash Flow (Income vs Expenses)</CardTitle>
                        <CardDescription>Comparison of monthly incoming revenue and outflows.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[320px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={cashFlowData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                                        </linearGradient>
                                        <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#f97316" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#f97316" stopOpacity={0.0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
                                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }}
                                    />
                                    <Area type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2.5} fillOpacity={1} fill="url(#colorIncome)" name="Income" />
                                    <Area type="monotone" dataKey="expenses" stroke="#f97316" strokeWidth={2.5} fillOpacity={1} fill="url(#colorExpenses)" name="Expenses" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Expense Breakdown Donut Chart */}
                <Card className="border shadow-sm flex flex-col justify-between">
                    <CardHeader>
                        <CardTitle className="text-base font-semibold">Expense Breakdown</CardTitle>
                        <CardDescription>Distribution by category</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center">
                        <div className="h-[220px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={expenseBreakdown}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={65}
                                        outerRadius={90}
                                        paddingAngle={4}
                                        dataKey="value"
                                    >
                                        {expenseBreakdown.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full mt-2 pt-4 border-t">
                            {expenseBreakdown.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs">
                                    <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                                    <span className="text-muted-foreground truncate">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}