import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Plus, ArrowUpRight, ArrowDownLeft, Clock, CheckCircle2 } from "lucide-react";

// Mock Data for transactions (update to match your actual data source variable name)
const transactions = [
    { id: 1, name: "Stripe Payout", category: "Income", date: "2026-08-16", status: "Completed", amount: "+$3,450.00", type: "income" },
    { id: 2, name: "AWS Cloud Hosting", category: "Software", date: "2026-08-14", status: "Completed", amount: "-$124.50", type: "expense" },
    { id: 3, name: "Whole Foods Market", category: "Groceries", date: "2026-08-12", status: "Completed", amount: "-$85.20", type: "expense" },
    { id: 4, name: "Client Retainer (Acme Inc)", category: "Income", date: "2026-08-10", status: "Pending", amount: "+$2,000.00", type: "income" },
    { id: 5, name: "Figma Subscription", category: "Software", date: "2026-08-05", status: "Completed", amount: "-$15.00", type: "expense" },
];

export default function TransactionsPage() {
    return (
        <div className="flex flex-col gap-6 p-6 md:p-8 max-w-7xl mx-auto w-full">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Transactions</h1>
                    <p className="text-sm text-muted-foreground">Manage and track all your income and expenses.</p>
                </div>
                <Button className="gap-2 bg-[#E35335] hover:bg-[#FF4433] text-primary-foreground shadow-sm cursor-pointer">
                    <Plus className="h-4 w-4" /> Add Transaction
                </Button>
            </div>

            {/* Main Content Card Container */}
            <Card className="border shadow-sm bg-card">
                <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="relative w-full sm:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search transactions..." className="pl-9 bg-background" />
                        </div>
                        <Button variant="outline" className="gap-2 w-full sm:w-auto cursor-pointer">
                            <Filter className="h-4 w-4" /> Filter
                        </Button>
                    </div>
                </CardHeader>

                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-muted/50 border-y">
                            <TableRow className="hover:bg-transparent">
                                <TableHead className="font-semibold text-xs uppercase tracking-wider text-muted-foreground py-3.5 px-6">Transaction Name</TableHead>
                                <TableHead className="font-semibold text-xs uppercase tracking-wider text-muted-foreground py-3.5 px-4">Category</TableHead>
                                <TableHead className="font-semibold text-xs uppercase tracking-wider text-muted-foreground py-3.5 px-4">Date</TableHead>
                                <TableHead className="font-semibold text-xs uppercase tracking-wider text-muted-foreground py-3.5 px-4">Status</TableHead>
                                <TableHead className="font-semibold text-xs uppercase tracking-wider text-muted-foreground py-3.5 px-6 text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y">
                            {transactions.map((tx) => (
                                <TableRow key={tx.id} className="hover:bg-muted/40 transition-colors">
                                    {/* Name + Icon */}
                                    <TableCell className="py-4 px-6 font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 ${tx.type === 'income' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-muted text-muted-foreground'
                                                }`}>
                                                {tx.type === 'income' ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                                            </div>
                                            <span className="text-foreground font-medium">{tx.name}</span>
                                        </div>
                                    </TableCell>

                                    {/* Category Badge */}
                                    <TableCell className="py-4 px-4">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground">
                                            {tx.category}
                                        </span>
                                    </TableCell>

                                    {/* Date */}
                                    <TableCell className="py-4 px-4 text-sm text-muted-foreground">
                                        {tx.date}
                                    </TableCell>

                                    {/* Status Badge */}
                                    <TableCell className="py-4 px-4">
                                        {tx.status === 'Completed' ? (
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                                                <CheckCircle2 className="h-3 w-3" /> Completed
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20">
                                                <Clock className="h-3 w-3" /> Pending
                                            </span>
                                        )}
                                    </TableCell>

                                    {/* Amount */}
                                    <TableCell className={`py-4 px-6 text-right font-semibold text-sm ${tx.type === 'income' ? 'text-emerald-600' : 'text-foreground'
                                        }`}>
                                        {tx.amount}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}