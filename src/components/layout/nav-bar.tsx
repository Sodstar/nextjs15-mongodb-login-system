// src/components/layout/nav-bar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function NavBar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const isAdmin = session?.user?.role === "admin";
  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold">
                Нэвтрэх систем
              </Link>
            </div>

            {session && (
              <nav className="hidden sm:ml-6 sm:flex space-x-4 items-center">
                <Link
                  href="/dashboard"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive("/dashboard")
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Хянах самбар
                </Link>

                <Link
                  href="/profile"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive("/profile")
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Профайл
                </Link>


                <Link
                  href="/products"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive("/products")
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Бараа
                </Link>

                {isAdmin && (
                  <Link
                    href="/admin/dashboard"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname.startsWith("/admin")
                        ? "bg-purple-100 text-purple-800"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Админ хуудас
                  </Link>
                )}
              </nav>
            )}
          </div>

          <div className="flex items-center">
            {session ? (
              <Link href="/api/auth/signout">
                <Button variant="outline" size="sm">
                  Гарах
                </Button>
              </Link>
            ) : (
              <div className="space-x-2">
                <Link href="/login">
                  <Button variant="outline" size="sm">
                    Нэвтрэх
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm">Бүртгүүлэх</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
