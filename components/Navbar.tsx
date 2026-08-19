import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b px-6 py-4">
      <Link href="/" className="text-xl font-bold">
        مورد 🌷
      </Link>

      <div className="flex gap-4 text-sm">
        <Link href="/">الرئيسية</Link>
        <Link href="/courses">المقررات</Link>
        <Link href="/progress">الإنجاز</Link>
        <Link href="/tests">الاختبارات</Link>
      </div>
    </nav>
  );
}
