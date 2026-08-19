import Navbar from "@/components/Navbar";

export default function TestsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <p className="mb-4 text-sm">منصة مورد</p>

        <h1 className="text-4xl font-bold">
          الاختبارات 📝
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          هنا ستظهر الاختبارات والمراجعات المطلوبة.
        </p>
      </section>
    </main>
  );
}
