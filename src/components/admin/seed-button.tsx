// src/components/admin/seed-button.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export function SeedButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [seedResult, setSeedResult] = useState<any>(null);

  async function handleSeed() {
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/seed");
      const data = await response.json();
      
      if (data.error) {
        toast("Error");

      } else {
        toast("Success");

        setSeedResult(data);
      }
    } catch (error) {
        toast("Error");

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Жишээ хэрэглэгч нэмэх</CardTitle>
        <CardDescription>Хэрэлэгчийн мэдээлэл</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={handleSeed}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Уншуулж байна..." : "Жишээ өгөгдөл"}
        </Button>
        
        {seedResult && seedResult.users && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h3 className="font-medium mb-2">Жишээ хэрэглэгч:</h3>
            <ul className="space-y-2">
              {seedResult.users.map((user: any, index: number) => (
                <li key={index} className="text-sm">
                  <strong>Email:</strong> {user.email}<br />
                  <strong>Password:</strong> {user.password}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="text-xs text-gray-500">
        Мэдээлэл: Өмнөх хэрэглэгч устаж, шинэ хэрэглэгчид нэмэгдэнэ 
      </CardFooter>
    </Card>
  );
}