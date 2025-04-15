// src/app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect("/login");
  }

  const isAdmin = session.user.role === "admin";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg text-center space-y-6">
        <h1 className="text-3xl font-bold">
          Тавтай морил та хэрэглэгчийн хянах самбарт холбогдолоо
        </h1>
        <p className="text-xl">
          Сайн уу, {session.user.name || session.user.email}!
        </p>
        <p>
          Нэвтэрсэн байна
          <span className="font-bold">{session.user.role}</span> /эрхтэй/
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {isAdmin && (
            <Link href="/admin/dashboard">
              <Button className="w-full sm:w-auto" variant="outline">
                Админ самбар
              </Button>
            </Link>
          )}

          <Link href="/api/auth/signout">
            <Button className="w-full sm:w-auto">Гарах</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
