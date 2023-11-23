import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export const App = () => (
  <Card>
    <CardHeader>
      <CardTitle>Stackblitz Template</CardTitle>
    </CardHeader>
    <CardContent className="grid gap-6">
      <Item name="TypeScript (5.3.2)" />
      <Item name="Vite (5.0.2)" />
      <Item name="React (18.2)" />
      <Item name="Tailwind (3.3.5)" />
      <Item name="shadcn/ui (0.4.1, all components)" />
    </CardContent>
  </Card>
);

const Item: React.FC<{ name: string }> = ({ name }) => {
  const id = React.useId();

  return (
    <div className="flex items-center justify-between space-x-2">
      <Label htmlFor={id} className="flex flex-col space-y-1 text-xl">
        <span>{name}</span>
      </Label>
      <Switch id={id} defaultChecked />
    </div>
  );
};
