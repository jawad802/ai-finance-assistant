"use client";

import { useState } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function AIAssistantPage() {
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hello Syed! I'm your AI Personal Finance Assistant. How can I help you optimize your savings or analyze your spending today?" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userText = input.trim();
        const userMessage = { role: "user", content: userText };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        // Smart Keyword Matching for AI Responses
        setTimeout(() => {
            let aiReply = "That's a great financial question! Based on your current dashboard trends, keeping your expenses 15% below your income target will help you hit your savings goal this month.";

            const lower = userText.toLowerCase();
            if (lower.includes("save") || lower.includes("saving")) {
                aiReply = "To boost your savings, try reducing your 'Dining Out' category—you're currently slightly over your monthly budget there!";
            } else if (lower.includes("budget") || lower.includes("spend")) {
                aiReply = "Your largest expense category right now is Groceries ($450), followed by Dining Out ($320). Overall, you're tracking well within safe limits.";
            } else if (lower.includes("hello") || lower.includes("hi")) {
                aiReply = "Hello! Ready to review your budgets or check your transaction history?";
            }

            setMessages((prev) => [...prev, { role: "assistant", content: aiReply }]);
        }, 800);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-2rem)] p-8 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
                <h1 className="text-3xl font-bold tracking-tight">AI Financial Assistant</h1>
            </div>

            {/* Chat Container */}
            <Card className="flex-1 flex flex-col justify-between overflow-hidden">
                <CardHeader className="border-b bg-muted/20 py-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <Bot className="h-4 w-4 text-primary" /> Active Session (Powered by Finance AI)
                    </CardTitle>
                </CardHeader>

                {/* Message History */}
                <CardContent className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground font-bold"}`}>
                                {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                            </div>
                            <div className={`rounded-lg p-3 text-sm max-w-[75%] ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                </CardContent>

                {/* Input Bar */}
                <div className="border-t p-4 bg-background">
                    <form onSubmit={handleSend} className="flex gap-2">
                        <Input
                            value={input}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                            placeholder="Ask anything about your finances (e.g., 'How can I save more?')..."
                            className="flex-1"
                        />
                        <Button type="submit" className="gap-2 bg-[#E35335] hover:bg-[#FF4433] cursor-pointer">
                            <Send className="h-4 w-4" /> Send
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}