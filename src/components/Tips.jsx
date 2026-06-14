import { tips } from "../data/plan";

export default function Tips() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-50">
          <h2 className="text-sm font-semibold text-gray-800">Hábitos clave para los 15 días</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {tips.map((tip) => (
            <div key={tip.title} className="flex gap-3 px-4 py-4 items-start">
              <span className="text-2xl">{tip.icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-800">{tip.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-4 space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">⚠️ Señales de que va bien</h3>
        {[
          "Menos hinchazón en el abdomen desde el día 5",
          "Más energía al levantarse desde el día 7",
          "Ropa más suelta desde el día 10",
          "Balanza muestra −1.5 a −2 kg en el día 7",
        ].map((s) => (
          <div key={s} className="flex gap-2 items-start">
            <span className="text-green-500 shrink-0 mt-0.5">✓</span>
            <p className="text-sm text-gray-600">{s}</p>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 rounded-2xl border border-amber-100 p-4">
        <h3 className="text-sm font-semibold text-amber-800 mb-2">⚠️ Si tienes hambre entre comidas</h3>
        <p className="text-sm text-amber-700">
          Primero toma un vaso de agua y espera 10 min. Si sigue el hambre,
          come: 1 huevo cocido, una fruta pequeña, o una cucharada de maní.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">📏 ¿Qué medir el día 15?</h3>
        <div className="space-y-2">
          {[
            "Peso (en ayunas, misma hora)",
            "Cintura (a la altura del ombligo)",
            "Cadera (parte más ancha)",
            "Cómo te queda la ropa",
            "Nivel de energía (1–10)",
          ].map((m, i) => (
            <div key={m} className="flex gap-3 items-center">
              <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                {i + 1}
              </span>
              <p className="text-sm text-gray-700">{m}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
