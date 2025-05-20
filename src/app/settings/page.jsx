'use client';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from 'D:/Project/my-dashboard-app/src/components/ui/card.jsx';
import { Switch } from 'D:/Project/my-dashboard-app/src/components/ui/switch.jsx';

export default function SettingsPage() {
  const [settings, setSettings] = useState([
    {
      id: 1,
      title: "Dark Mode",
      description: "Enable dark theme for the dashboard",
      enabled: false,
    },
    {
      id: 2,
      title: "Email Notifications",
      description: "Receive email alerts for important updates",
      enabled: true,
    },
    {
      id: 3,
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account",
      enabled: false,
    },
  ]);

  const handleToggle = (id) => {
    setSettings(settings.map(setting => 
      setting.id === id 
        ? { ...setting, enabled: !setting.enabled } 
        : setting
    ));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Account Preferences</CardTitle>
          <CardDescription>
            Manage your account settings and preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {settings.map((setting) => (
            <div key={setting.id} className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{setting.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {setting.description}
                </p>
              </div>
              <Switch
                checked={setting.enabled}
                onCheckedChange={() => handleToggle(setting.id)}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}