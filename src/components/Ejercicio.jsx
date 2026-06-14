import { exerciseCircuit } from "../data/plan";

export default function Ejercicio() {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-5 text-white">
        <p className="text-orange-100 text-sm">Rutina diaria</p>
        <h2 className="text-xl font-bold mt-1">Circuito en casa</h2>
        <p className="text-orange-100 text-sm mt-1">Sin equipos · 40–50 min total · 3 rondas</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-50">
          <h3 className="text-sm font-semibold text-gray-800">Estructura de la sesión</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {[
            { fase: "1. Calentamiento", tiempo: "5 min", desc: "Marchar en el lugar, rotación de hombros y cuello", icon: "🌡️" },
            { fase: "2. Cardio", tiempo: "20–35 min", desc: "Caminar rápido, trotar, subir escaleras o bailar", icon: "🏃" },
            { fase: "3. Fuerza", tiempo: "15 min", desc: "Circuito de 3 rondas (ver abajo)", icon: "💪" },
            { fase: "4. Estiramiento", tiempo: "5 min", desc: "Cuádriceps, isquiotibiales, espalda baja", icon: "🧘" },
          ].map((f) => (
            <div key={f.fase} className="flex gap-3 px-4 py-3 items-start">
              <span className="text-xl">{f.icon}</span>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-sm font-medium text-gray-800">{f.fase}</p>
                  <span className="text-xs text-gray-400">{f.tiempo}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-50">
          <h3 className="text-sm font-semibold text-gray-800">Circuito de fuerza · 3 rondas</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {exerciseCircuit.map((ex) => (
            <div key={ex.name} className="flex gap-3 px-4 py-3 items-start">
              <span className="text-2xl">{ex.icon}</span>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-sm font-medium text-gray-800">{ex.name}</p>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                    {ex.reps}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5 italic">{ex.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">📅 Frecuencia semanal</h3>
        <div className="grid grid-cols-7 gap-1">
          {["L", "M", "X", "J", "V", "S", "D"].map((d, i) => {
            const isRest = [1, 4, 6].includes(i);
            return (
              <div
                key={d}
                className={`rounded-lg py-2 flex flex-col items-center gap-1 ${
                  isRest ? "bg-gray-50 border border-gray-100" : "bg-orange-50 border border-orange-100"
                }`}
              >
                <span className={`text-xs font-semibold ${isRest ? "text-gray-400" : "text-orange-600"}`}>{d}</span>
                <span className="text-base">{isRest ? "😴" : "🔥"}</span>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-gray-400 text-center mt-2">🔥 Ejercicio · 😴 Descanso</p>
      </div>
    </div>
  );
}
