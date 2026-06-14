import { useState } from "react";
import Header from "./components/Header";
import Resumen from "./components/Resumen";
import Dieta from "./components/Dieta";
import Dias from "./components/Dias";
import Ejercicio from "./components/Ejercicio";
import Mercado from "./components/Mercado";
import Tips from "./components/Tips";

export default function App() {
  const [activeTab, setActiveTab] = useState("resumen");

  const renderTab = () => {
    switch (activeTab) {
      case "resumen": return <Resumen />;
      case "dieta": return <Dieta />;
      case "dias": return <Dias />;
      case "ejercicio": return <Ejercicio />;
      case "mercado": return <Mercado />;
      case "tips": return <Tips />;
      default: return <Resumen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-2xl mx-auto px-4 py-5 pb-10">
        {renderTab()}
      </main>
    </div>
  );
}
