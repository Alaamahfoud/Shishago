import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FaMotorcycle, FaAppleAlt, FaFire, FaWhatsapp } from "react-icons/fa";

export default function ShishaGoApp() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-6">ShishaGo</h1>
      <Card className="w-full max-w-md shadow-2xl rounded-2xl">
        <CardContent className="p-6 space-y-5">
          <div>
            <Label className="mb-1 block">Choose Flavor:</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select flavor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="double-apple">Double Apple</SelectItem>
                <SelectItem value="lemon-mint">Lemon & Mint</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="dbl" />
            <Label htmlFor="dbl">Double Head (Dbl)</Label>
          </div>
          <div>
            <Label className="mb-1 block">Charcoal Pieces:</Label>
            <Input type="number" defaultValue={1} min={1} className="w-full" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="hose" defaultChecked />
            <Label htmlFor="hose">Disposable Hose (1-time use)</Label>
          </div>
          <div>
            <Label className="mb-1 block">Your WhatsApp Number:</Label>
            <Input type="text" placeholder="009613123456" className="w-full" />
          </div>
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-2 rounded-xl">
            Place Order
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
