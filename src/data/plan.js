export const userStats = {
  weight: 91,
  height: 179,
  imc: 28.4,
  targetWeight: 88,
  dailyCalories: 1800,
  dailyProtein: 140,
};

export const groceryList = [
  {
    category: "🥩 Proteínas",
    items: [
      { name: "Pechuga de pollo", qty: "2 kg" },
      { name: "Atún en agua", qty: "8 latas" },
      { name: "Huevos", qty: "30 unidades" },
      { name: "Carne molida magra", qty: "1 kg" },
    ],
  },
  {
    category: "🥦 Vegetales (por semana)",
    items: [
      { name: "Espinaca / lechuga", qty: "2 bolsas" },
      { name: "Brócoli", qty: "2 cabezas" },
      { name: "Zanahoria", qty: "1 kg" },
      { name: "Tomate", qty: "1 kg" },
      { name: "Pepino", qty: "4 unidades" },
      { name: "Pimentón", qty: "4 unidades" },
    ],
  },
  {
    category: "🌾 Carbohidratos inteligentes",
    items: [
      { name: "Avena en hojuelas", qty: "500 g" },
      { name: "Arroz integral", qty: "1 kg" },
      { name: "Pan integral", qty: "1 paquete" },
      { name: "Papa o yuca", qty: "1 kg (moderado)" },
    ],
  },
  {
    category: "🍎 Frutas",
    items: [
      { name: "Manzana", qty: "10 unidades" },
      { name: "Banano", qty: "10 unidades" },
      { name: "Papaya", qty: "1 mediana" },
      { name: "Limón", qty: "10 unidades" },
    ],
  },
  {
    category: "🥑 Grasas buenas",
    items: [
      { name: "Aguacate", qty: "6 unidades" },
      { name: "Aceite de oliva", qty: "1 frasco pequeño" },
      { name: "Maní sin sal", qty: "200 g" },
    ],
  },
  {
    category: "🧂 Otros",
    items: [
      { name: "Té verde o manzanilla", qty: "1 caja" },
      { name: "Sal, pimienta, ajo, cúrcuma", qty: "Al gusto" },
    ],
  },
];

export const dailyMeals = [
  { time: "7–8 am", icon: "🌅", label: "Desayuno", food: "Avena (½ taza) + 2 huevos revueltos + fruta picada", kcal: 450 },
  { time: "10–11 am", icon: "🍎", label: "Media mañana", food: "1 manzana o banano + puñado de maní (20 g)", kcal: 200 },
  { time: "12–1 pm", icon: "☀️", label: "Almuerzo", food: "Pechuga o carne (150 g) + arroz integral (½ taza) + vegetales", kcal: 550 },
  { time: "3–4 pm", icon: "🥚", label: "Onces", food: "Atún en agua + 4 galletas integrales o 1 huevo cocido", kcal: 200 },
  { time: "6–7 pm", icon: "🌙", label: "Cena", food: "Pechuga o atún (120 g) + ensalada grande + ½ aguacate", kcal: 400 },
];

export const days = [
  { day: 1, diet: "Menú base completo", exercise: "Caminar 20 min suave", intensity: 1 },
  { day: 2, diet: "Menú base completo", exercise: "Caminar 20 min", intensity: 1 },
  { day: 3, diet: "Menú base completo", exercise: "Caminar 30 min + 10 sentadillas", intensity: 2 },
  { day: 4, diet: "Menú base completo", exercise: "Caminar 30 min + abdominales", intensity: 2 },
  { day: 5, diet: "Menú base completo", exercise: "Trote suave 20 min + abdominales", intensity: 3 },
  { day: 6, diet: "Menú base completo", exercise: "Trote 25 min + plancha 30 seg", intensity: 3 },
  { day: 7, diet: "Menú base completo", exercise: "Descanso activo — caminar o estirar", intensity: 0 },
  { day: 8, diet: "Menú base completo", exercise: "Trote 25 min + fuerza básica (3 rondas)", intensity: 3 },
  { day: 9, diet: "Menú base completo", exercise: "Cardio 30 min + sentadillas + flexiones", intensity: 3 },
  { day: 10, diet: "Menú base completo", exercise: "Cardio 30 min + circuito completo", intensity: 4 },
  { day: 11, diet: "Menú base completo", exercise: "Cardio 30 min + abdominales + plancha", intensity: 4 },
  { day: 12, diet: "Menú base completo", exercise: "Cardio 35 min + rutina completa fuerza", intensity: 4 },
  { day: 13, diet: "Menú base completo", exercise: "Cardio 35 min + circuito intenso", intensity: 5 },
  { day: 14, diet: "Menú base completo", exercise: "Descanso activo — revisión de resultados", intensity: 0 },
  { day: 15, diet: "Menú base completo", exercise: "¡Medición final! Pesarse en ayunas", intensity: 0 },
];

export const exerciseCircuit = [
  { name: "Sentadillas", reps: "15 reps", icon: "🦵", tip: "Espalda recta, rodillas no pasan los pies" },
  { name: "Flexiones", reps: "10 reps", icon: "💪", tip: "De rodillas si es necesario al inicio" },
  { name: "Abdominales", reps: "20 reps", icon: "🔥", tip: "No jales el cuello, mira al techo" },
  { name: "Plancha", reps: "30 seg", icon: "⚡", tip: "Cuerpo recto como tabla, abdomen apretado" },
  { name: "Descanso", reps: "60 seg", icon: "😮‍💨", tip: "Respira profundo, prepárate para la siguiente ronda" },
];

export const tips = [
  { icon: "💧", title: "2 litros de agua mínimo", desc: "Toma un vaso grande al despertar, antes de desayunar" },
  { icon: "🌙", title: "Cena antes de las 7 pm", desc: "El metabolismo baja en la noche, cena ligero" },
  { icon: "⚖️", title: "Pésate solo 2 veces", desc: "Día 1 y día 15, en ayunas y a la misma hora" },
  { icon: "😴", title: "Dormir 7–8 horas", desc: "El sueño regula las hormonas del hambre" },
  { icon: "🥩", title: "Proteína en cada comida", desc: "Es lo que más sacia y preserva músculo" },
  { icon: "🫙", title: "Cocina sin aceite o poco", desc: "Al horno, a la plancha o al vapor" },
];
