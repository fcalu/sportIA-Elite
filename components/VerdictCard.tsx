"use client";

import { PredictionResponse } from "@/types/prediction";

interface Props {
  data: PredictionResponse;
}

export default function VerdictCard({ data }: Props) {
  const total = data.player_props.find(p => p.type === "total_goals");
  const btts = data.player_props.find(p => p.type === "btts");
  const ml = data.player_props.find(p => p.type === "moneyline");

  let picks: string[] = [];

  // ✅ Protección segura
  if ((total?.model_prob_over ?? 0) > 0.6) {
    picks.push("Over 2.5");
  }

  if ((btts?.model_prob_yes ?? 0) > 0.55) {
    picks.push("BTTS Sí");
  }

  if (ml) {
    const home = ml.model_prob_home ?? 0;
    const draw = ml.model_prob_draw ?? 0;
    const away = ml.model_prob_away ?? 0;

    if (home + draw > 0.65) {
      picks.push("Doble oportunidad 1X");
    } else if (draw + away > 0.65) {
      picks.push("Doble oportunidad X2");
    } else if (home > 0.55) {
      picks.push("Moneyline Local");
    } else if (away > 0.55) {
      picks.push("Moneyline Visitante");
    }
  }

  return (
    <div className="bg-gradient-to-r from-pink-600/20 to-cyan-500/20 p-6 rounded-xl border border-white/10">
      <h3 className="text-xl font-bold mb-4 text-pink-400">
        🎯 Veredicto Final
      </h3>

      {picks.length > 0 ? (
        <ul className="space-y-2">
          {picks.map((pick, i) => (
            <li
              key={i}
              className="bg-black/40 px-4 py-2 rounded-lg border border-white/10"
            >
              ✅ {pick}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-yellow-400">
          Mercado eficiente – Sin ventaja clara
        </p>
      )}

      <div className="mt-6 text-sm text-gray-400 leading-relaxed">
        {data.analysis}
      </div>
    </div>
  );
}
