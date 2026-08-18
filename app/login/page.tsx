"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
      return;
    }

    window.location.href = "/";
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-5 rounded-2xl p-6 shadow"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold">تسجيل الدخول</h1>
          <p className="mt-2 text-gray-600">
            أهلًا بكِ في منصة مورد 🌷
          </p>
        </div>

        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border p-3"
          required
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border p-3"
          required
        />

        {error && (
          <p className="text-center text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-black p-3 text-white"
        >
          دخول
        </button>
      </form>
    </main>
  );
}
