"use client";

import { useState } from "react";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("student");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert("أكملي البيانات أولًا");
      return;
    }

    alert(
      role === "student"
        ? "تم تجهيز حساب الطالبة"
        : "تم تجهيز حساب المشرفة"
    );
  }

  return (
    <main className="min-h-screen px-5 py-12">
      <div className="mx-auto max-w-md rounded-3xl border bg-white p-7 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">مرحبًا بكِ في مورد 🌷</h1>
          <p className="mt-3 text-sm text-gray-500">
            سجلي دخولك للمتابعة
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              الاسم
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-2xl border px-4 py-3 outline-none"
              placeholder="اكتبي اسمك"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              رقم الجوال
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-2xl border px-4 py-3 outline-none"
              placeholder="05xxxxxxxx"
              inputMode="tel"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              نوع الحساب
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-2xl border px-4 py-3"
            >
              <option value="student">طالبة</option>
              <option value="supervisor">مشرفة</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-black px-4 py-3 font-medium text-white"
          >
            دخول
          </button>
        </form>
      </div>
    </main>
  );
}
