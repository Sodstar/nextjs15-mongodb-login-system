// src/app/admin/seed/page.tsx
import { SeedButton } from "@/components/admin/seed-button";

export default function SeedPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Системийн удирдлага
        </h1>
        <SeedButton />
      </div>
    </main>
  );
}
