import Link from "next/link";
import Navbar from "@/components/Navbar";

const cards = [
  {
    title: "المقررات",
    description: "تابعي مقرراتك وما أنجزتِ منها.",
    href: "/courses",
    icon: "📚",
  },
  {
    title: "الإنجاز",
    description: "سجّلي إنجازك اليومي وتابعي رحلتك.",
    href: "/progress",
    icon: "✨",
  },
  {
    title: "الاختبارات",
    description: "راجعي واختبري ما تعلمتِ.",
    href: "/tests",
    icon: "📝",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
        <div
          className="overflow-hidden rounded-[2rem] p-7 md:p-12"
          style={{ backgroundColor: "var(--primary-light)" }}
        >
          <div className="max-w-2xl">
            <span
              className="inline-block rounded-full bg-white px-4 py-2 text-sm"
              style={{ color: "var(--primary)" }}
            >
              منصة مورد 🌷
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              أهلًا بكِ في
              <br />
              <span style={{ color: "var(--primary)" }}>رحلة مورد</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 md:text-lg">
              مساحة تجمع لكِ مقرراتك وإنجازك واختباراتك، لتعيشي رحلتك
              التعليمية بخطوات واضحة وهادئة.
            </p>

            <Link
              href="/courses"
              className="mt-7 inline-flex rounded-2xl px-6 py-3 font-medium text-white"
              style={{ backgroundColor: "var(--primary)" }}
            >
              ابدئي رحلتك
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-3xl border bg-white p-6 transition-transform hover:-translate-y-1"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl"
                style={{ backgroundColor: "var(--primary-light)" }}
              >
                {card.icon}
              </div>

              <h2 className="mt-5 text-xl font-bold">{card.title}</h2>

              <p
                className="mt-2 text-sm leading-7"
                style={{ color: "var(--muted)" }}
              >
                {card.description}
              </p>

              <div
                className="mt-5 text-sm font-medium"
                style={{ color: "var(--primary)" }}
              >
                الانتقال ←
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-8 rounded-3xl border bg-white p-6 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                رحلتك حتى الآن
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                لنبدأ بخطوة صغيرة اليوم
              </h2>

              <p
                className="mt-2 text-sm leading-7"
                style={{ color: "var(--muted)" }}
              >
                سجّلي إنجازك اليومي، وكل خطوة ستصنع فرقًا في رحلتك.
              </p>
            </div>

            <Link
              href="/progress"
              className="rounded-2xl px-6 py-3 text-center font-medium text-white"
              style={{ backgroundColor: "var(--primary)" }}
            >
              تسجيل الإنجاز
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
