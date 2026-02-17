"use client";

import { useState } from "react";
import MatchSelector from "@/components/MatchSelector";
import ProgressBar from "@/components/ProgressBar";
import Tabs from "@/components/Tabs";
import MarketTables from "@/components/MarketTables";
import HistoryTable from "@/components/HistoryTable"; 
import FormTable from "@/components/FormTable";
import InsightsCard from "@/components/InsightsCard";
import VerdictCard from "@/components/VerdictCard";
import { fetchPrediction } from "@/lib/api";
import { PredictionResponse } from "@/types/prediction";

export default function Home() {
  const [match, setMatch] = useState<any>(null);
  const [data, setData] = useState<PredictionResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Markets");

  async function analyze() {
    if (!match) return;
    setLoading(true);
    const result = await fetchPrediction(match);
    setData(result);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black text-white p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
          ⚽ Sportia Analytics
        </h1>

        <MatchSelector onSelect={setMatch} />

        <button
          onClick={analyze}
          className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 hover:opacity-90 transition"
        >
          🔥 ANALIZAR PARTIDO
        </button>

        {loading && <ProgressBar />}

        {data && (
          <>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "Markets" && <MarketTables data={data} />}
            {activeTab === "Historial" && <HistoryTable data={data} />}
            {activeTab === "Forma" && <FormTable data={data} />}
            {activeTab === "Insights" && <InsightsCard data={data} />}
            {activeTab === "Veredicto" && <VerdictCard data={data} />}
          </>
        )}
      </div>
    </main>
  );
}
