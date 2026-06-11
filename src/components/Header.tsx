export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white font-bold text-sm px-2 py-1 rounded">VC</div>
          <span className="font-bold text-lg text-gray-900">
            Vergleichs<span className="text-blue-600">check</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Buchhaltung</a>
          <a href="#" className="hover:text-blue-600 transition-colors">KI-Tools</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Marketing</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Produktivität</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Website</a>
        </nav>
      </div>
    </header>
  );
}
