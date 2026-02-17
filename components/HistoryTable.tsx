interface Props {
  data: any;
}

function formatPercent(n: number | null | undefined) {
  if (!n) return "-";
  return (n * 100).toFixed(0) + "%";
}

export default function HistoryTable({ data }: Props) {
  const total = data?.player_props?.find((p: any) => p.type === "total_goals");
  if (!total) return null;

  const home = total.home_history;
  const away = total.away_history;
  const [homeName, awayName] = data.match.split(" vs ");

  return (
    <div className="overflow-x-auto bg-slate-900/60 p-6 rounded-2xl">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left">
            <th>Equipo</th>
            <th>Over</th>
            <th>BTTS</th>
            <th>Win</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{homeName}</td>
            <td>{formatPercent(home.over_rate_line)}</td>
            <td>{formatPercent(home.btts_rate)}</td>
            <td>{formatPercent(home.win_rate)}</td>
          </tr>
          <tr>
            <td>{awayName}</td>
            <td>{formatPercent(away.over_rate_line)}</td>
            <td>{formatPercent(away.btts_rate)}</td>
            <td>{formatPercent(away.win_rate)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
