export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b px-6 py-4">
      <div className="text-xl font-bold">مورد 🌷</div>

      <div className="flex gap-4 text-sm">
        <span>الرئيسية</span>
        <span>المقررات</span>
        <span>الإنجاز</span>
        <span>الاختبارات</span>
      </div>
    </nav>
  );
}
