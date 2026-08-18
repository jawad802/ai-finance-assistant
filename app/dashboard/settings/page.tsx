"use client";

import { useState } from "react";
import { User, Bell, Shield, Globe, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="flex flex-col gap-6 p-8 max-w-4xl">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">Manage your account preferences, currency, and notifications.</p>
            </div>

            {/* Profile Settings */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        <CardTitle>Profile Information</CardTitle>
                    </div>
                    <CardDescription>Update your personal details and display name.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="grid gap-2">
                        <label htmlFor="Full Name" className="text-sm font-medium">Full Name</label>
                        <Input defaultValue="Syed Jawad" />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="Email Address" className="text-sm font-medium">Email Address</label>
                        <Input defaultValue="syed.jawad@example.com" type="email" />
                    </div>
                </CardContent>
            </Card>

            {/* Preferences */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <CardTitle>Regional Preferences</CardTitle>
                    </div>
                    <CardDescription>Choose your default currency and date formatting.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="grid gap-2">
                        <label htmlFor="Default Currency" className="text-sm font-medium">Default Currency</label>
                        <select className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors">
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="GBP">GBP (£)</option>
                            <option value="PKR">PKR (Rs)</option>
                        </select>
                    </div>
                </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex items-center gap-4">
                <Button onClick={handleSave} className="gap-2 bg-[#E35335] hover:bg-[#FF4433] cursor-pointer">
                    <Save className="h-4 w-4" /> Save Changes
                </Button>
                {saved && <span className="text-sm text-emerald-600 font-medium">Settings saved successfully!</span>}
            </div>
        </div>
    );
}