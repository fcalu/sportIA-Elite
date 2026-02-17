import ProbabilityBar from "./ProbabilityBar";
import { PredictionResponse } from "@/types/prediction";

interface Props {
  data: PredictionResponse;
}

export default function MarketTables({ data }: Props) {
  const total = data.player_props.find(p => p.type === "total_goals");
  const btts = data.player_props.find(p => p.type === "btts");
  const ml = data.player_props.find(p => p.type === "moneyline");

  return (
    <div className="space-y-8">

      <div className="bg-slate-900/60 p-6 rounded-xl backdrop-blur-md">
        <h3 className="text-lg font-semibold mb-4">📊 Total Goals</h3>
        {total && (
          <>
            <ProbabilityBar label="Over" value={total.model_prob_over} />
            <ProbabilityBar label="Under" value={total.model_prob_under} />
          </>
        )}
      </div>

      <div className="bg-slate-900/60 p-6 rounded-xl backdrop-blur-md">
        <h3 className="text-lg font-semibold mb-4">🤝 BTTS</h3>
        {btts && (
          <>
            <ProbabilityBar label="Sí" value={btts.model_prob_yes} />
            <ProbabilityBar label="No" value={btts.model_prob_no} />
          </>
        )}
      </div>

      <div className="bg-slate-900/60 p-6 rounded-xl backdrop-blur-md">
        <h3 className="text-lg font-semibold mb-4">🏆 Moneyline</h3>
        {ml && (
          <>
            <ProbabilityBar label="Home" value={ml.model_prob_home} />
            <ProbabilityBar label="Draw" value={ml.model_prob_draw} />
            <ProbabilityBar label="Away" value={ml.model_prob_away} />
          </>
        )}
      </div>

    </div>
  );
}
