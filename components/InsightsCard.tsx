export default function InsightsCard({ data }: any) {
  if (!data) return null;

  const total = data.player_props?.find((p: any) => p.type === "total_goals");
  const btts = data.player_props?.find((p: any) => p.type === "btts");
  const ml = data.player_props?.find((p: any) => p.type === "moneyline");

  return (
    <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
      <h2 className="text-xl font-bold mb-4">📊 Insights Inteligentes</h2>

      <div className="space-y-3 text-sm">
        {total && (
          <p>
            xG Total:{" "}
            <strong className="text-cyan-400">
              {total.projection_model?.total_xg}
            </strong>
          </p>
        )}

        {btts && btts.model_prob_yes > 0.55 && (
          <p>🔥 Alta probabilidad de BTTS.</p>
        )}

        {ml && ml.model_prob_home > ml.model_prob_away && (
          <p>🏠 Ventaja ligera del equipo local.</p>
        )}
      </div>
    </div>
  );
}
