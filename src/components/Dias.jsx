import { useState } from "react";
import { days } from "../data/plan";

const intensityColors = {
  0: "bg-gray-100 text-gray-500",
  1: "bg-blue-50 text-blue-600",
  2: "bg-green-50 text-green-600",
  3: "bg-amber-50 text-amber-600",
  4: "bg-orange-50 text-orange-600",
  5: "bg-red-50 text-red-600",
};

const intensityLabel = {
  0: "Descanso",
  1: "Suave",
  2: "Moderado",
  3: "Activo",
  4: "Intenso",
  5: "Máximo",
};

export default function Dias() {
  const [checked, setChecked] = useState({});

  const toggle = (day) =>
    setChecked((prev) => ({ ...prev, [day]: !prev[day] }));

  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-gray-100 p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm font-semibold text-gray-800">Progreso general</h2>
          <span className="text-sm font-bold text-green-600">{done}/15 días</span>
        </div>
        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-2.5 bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${(done / 15) * 100}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-2">
          {done === 0
            ? "¡Empieza hoy! Toca el día para marcarlo como completado"
            : done === 15
            ? "🎉 ¡Completaste los 15 días! ¡Felicitaciones!"
            : `Vas muy bien, sigue así 💪`}
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-1">Semana 1 — Adaptación</p>
        {days.slice(0, 7).map((d) => (
          <DayCard key={d.day} day={d} checked={!!checked[d.day]} onToggle={toggle} />
        ))}
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-1">Semana 2 — Progresión</p>
        {days.slice(7).map((d) => (
          <DayCard key={d.day} day={d} checked={!!checked[d.day]} onToggle={toggle} />
        ))}
      </div>
    </div>
  );
}

function DayCard({ day, checked, onToggle }) {
  return (
    <div
      onClick={() => onToggle(day.day)}
      className={`bg-white rounded-xl border px-4 py-3 flex gap-3 items-start cursor-pointer transition-all active:scale-95 ${
        checked ? "border-green-200 bg-green-50" : "border-gray-100 hover:border-gray-200"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
          checked ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500"
        }`}
      >
        {checked ? "✓" : day.day}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 truncate">{day.exercise}</p>
        <p className="text-xs text-gray-400 mt-0.5">{day.diet}</p>
      </div>
      <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${intensityColors[day.intensity]}`}>
        {intensityLabel[day.intensity]}
      </span>
    </div>
  );
}
