export default function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "resumen", label: "Resumen", icon: "📊" },
    { id: "dieta", label: "Dieta", icon: "🥗" },
    { id: "dias", label: "15 Días", icon: "📅" },
    { id: "ejercicio", label: "Ejercicio", icon: "🏃" },
    { id: "mercado", label: "Mercado", icon: "🛒" },
    { id: "tips", label: "Tips", icon: "💡" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center gap-3 py-4 border-b border-gray-50">
          <div className="w-9 h-9 rounded-xl bg-green-500 flex items-center justify-center text-white text-lg">
            🥗
          </div>
          <div>
            <h1 className="text-base font-semibold text-gray-900 leading-tight">Plan 15 días</h1>
            <p className="text-xs text-gray-400">91 kg → meta 88 kg · 1,800 kcal/día</p>
          </div>
        </div>
        <nav className="flex gap-1 py-2 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-green-500 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
