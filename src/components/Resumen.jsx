import { userStats } from "../data/plan";

export default function Resumen() {
  const imcStatus = userStats.imc >= 25 ? "Sobrepeso leve" : "Normal";

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-5 text-white">
        <p className="text-green-100 text-sm mb-1">Tu objetivo</p>
        <h2 className="text-2xl font-bold">{userStats.weight} kg → {userStats.targetWeight} kg</h2>
        <p className="text-green-100 text-sm mt-1">−3 kg en 15 días · gradual y sostenible</p>
        <div className="mt-4 bg-white/20 rounded-xl p-3">
          <div className="flex justify-between text-sm">
            <span className="text-green-100">Progreso</span>
            <span className="text-white font-medium">Día 1 de 15</span>
          </div>
          <div className="mt-2 h-2 bg-white/30 rounded-full">
            <div className="h-2 bg-white rounded-full" style={{ width: "6%" }} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <StatCard label="IMC actual" value={userStats.imc} unit="" sub={imcStatus} color="amber" />
        <StatCard label="Calorías/día" value="1,800" unit="kcal" sub="Con ejercicio" color="blue" />
        <StatCard label="Proteína/día" value={`${userStats.dailyProtein} g`} unit="" sub="Preserva músculo" color="green" />
        <StatCard label="Altura" value={`${userStats.height} cm`} unit="" sub="1.79 m" color="purple" />
      </div>

      <div className="bg-white rounded-2xl p-4 border border-gray-100">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">🚫 Eliminar estos 15 días</h3>
        <div className="flex flex-wrap gap-2">
          {["Gaseosas", "Frituras", "Pan blanco", "Azúcar", "Alcohol", "Jugos de caja", "Snacks empacados"].map((item) => (
            <span key={item} className="bg-red-50 text-red-700 text-xs px-3 py-1 rounded-full font-medium border border-red-100">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
        <p className="text-blue-800 text-sm font-medium">💡 Clave del éxito</p>
        <p className="text-blue-700 text-sm mt-1">
          Dieta + ejercicio juntos es lo que funciona. No necesitas una dieta extrema —
          solo <strong>ajustar porciones</strong> y <strong>moverse diariamente</strong>.
        </p>
      </div>
    </div>
  );
}

function StatCard({ label, value, sub, color }) {
  const colors = {
    green: "bg-green-50 text-green-600 border-green-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
  };
  return (
    <div className={`rounded-xl p-4 border ${colors[color]}`}>
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-xs mt-0.5 text-gray-400">{sub}</p>
    </div>
  );
}
