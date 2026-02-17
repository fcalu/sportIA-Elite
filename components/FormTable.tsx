interface Props {
  data: any;
}

export default function FormTable({ data }: Props) {
  const total = data?.player_props?.find((p: any) => p.type === "total_goals");
  if (!total) return null;

  const home = total.home_history.last5.join(" ");
  const away = total.away_history.last5.join(" ");
  const [homeName, awayName] = data.match.split(" vs ");

  return (
    <div className="bg-slate-900/60 p-6 rounded-2xl">
      <div className="flex justify-between mb-4">
        <div>
          <h4 className="font-bold">{homeName}</h4>
          <p>{home}</p>
        </div>
        <div>
          <h4 className="font-bold">{awayName}</h4>
          <p>{away}</p>
        </div>
      </div>
    </div>
  );
}
