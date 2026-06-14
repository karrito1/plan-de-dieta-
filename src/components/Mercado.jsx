import { useState } from "react";
import { groceryList } from "../data/plan";

export default function Mercado() {
  const [checked, setChecked] = useState({});

  const toggle = (key) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  const totalItems = groceryList.reduce((s, cat) => s + cat.items.length, 0);
  const doneItems = Object.values(checked).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-gray-100 p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm font-semibold text-gray-800">Lista de mercado</h2>
          <span className="text-sm font-bold text-green-600">{doneItems}/{totalItems}</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-2 bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${(doneItems / totalItems) * 100}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-2">
          {doneItems === totalItems && totalItems > 0
            ? "🎉 ¡Lista completa! Ya puedes ir al mercado"
            : "Toca cada ítem para marcarlo como comprado"}
        </p>
      </div>

      {groceryList.map((cat) => (
        <div key={cat.category} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50">
            <h3 className="text-sm font-semibold text-gray-700">{cat.category}</h3>
          </div>
          <div className="divide-y divide-gray-50">
            {cat.items.map((item) => {
              const key = `${cat.category}-${item.name}`;
              const isDone = !!checked[key];
              return (
                <div
                  key={key}
                  onClick={() => toggle(key)}
                  className={`flex items-center gap-3 px-4 py-3 cursor-pointer active:bg-gray-50 transition-colors ${
                    isDone ? "opacity-50" : ""
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      isDone ? "bg-green-500 border-green-500" : "border-gray-200"
                    }`}
                  >
                    {isDone && <span className="text-white text-xs">✓</span>}
                  </div>
                  <span className={`text-sm flex-1 ${isDone ? "line-through text-gray-400" : "text-gray-800"}`}>
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-400 shrink-0">{item.qty}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <button
        onClick={() => setChecked({})}
        className="w-full py-3 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition-colors"
      >
        Limpiar lista
      </button>
    </div>
  );
}
