import Link from "next/link";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/courses", label: "المقررات" },
  { href: "/progress", label: "الإنجاز" },
  { href: "/tests", label: "الاختبارات" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-2xl font-bold">
          مورد
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/login"
          className="rounded-xl px-4 py-2 text-sm font-medium"
          style={{
            backgroundColor: "var(--primary-light)",
            color: "var(--primary)",
          }}
        >
          دخول
        </Link>
      </nav>
    </header>
  );
}
