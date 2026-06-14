import { dailyMeals } from "../data/plan";

export default function Dieta() {
  const total = dailyMeals.reduce((s, m) => s + m.kcal, 0);

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-50 flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-800">Menú tipo diario</h2>
          <span className="text-xs text-gray-400">{total} kcal total</span>
        </div>
        <div className="divide-y divide-gray-50">
          {dailyMeals.map((meal) => (
            <MealRow key={meal.label} meal={meal} />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">🍽️ Distribución de calorías</h3>
        <div className="space-y-2">
          {dailyMeals.map((meal) => (
            <div key={meal.label} className="flex items-center gap-3">
              <span className="text-xs text-gray-500 w-24 shrink-0">{meal.label}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-green-400 rounded-full"
                  style={{ width: `${(meal.kcal / total) * 100}%` }}
                />
              </div>
              <span className="text-xs text-gray-500 w-14 text-right shrink-0">{meal.kcal} kcal</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">🥘 Ideas de recetas rápidas</h3>
        <div className="space-y-3">
          {[
            { title: "Avena lista en 5 min", desc: "½ taza avena + agua o leche descremada + banano en rodajas + canela" },
            { title: "Pollo a la plancha", desc: "Pechuga + sal + pimienta + ajo en polvo + gotas de limón. 7 min por lado" },
            { title: "Ensalada completa", desc: "Lechuga + tomate + pepino + zanahoria rallada + ½ aguacate + limón" },
            { title: "Atún express", desc: "Lata de atún + tomate picado + cebolla + limón. Listo en 2 min" },
          ].map((r) => (
            <div key={r.title} className="border border-gray-100 rounded-xl p-3">
              <p className="text-sm font-medium text-gray-800">{r.title}</p>
              <p className="text-xs text-gray-500 mt-1">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MealRow({ meal }) {
  return (
    <div className="flex gap-3 px-4 py-3">
      <div className="text-2xl">{meal.icon}</div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <p className="text-sm font-medium text-gray-800">{meal.label}</p>
          <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-100 ml-2 shrink-0">
            {meal.kcal} kcal
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-0.5">{meal.food}</p>
        <p className="text-xs text-gray-300 mt-0.5">{meal.time}</p>
      </div>
    </div>
  );
}
