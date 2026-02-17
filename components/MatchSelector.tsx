"use client";

import { useEffect, useState } from "react";

const BASE_URL = "https://sportia-api.onrender.com/api/v1";

interface Match {
  sport: string;
  league: string;
  event_id: string;
  home: string;
  away: string;
}

interface Props {
  onSelect: (match: Match) => void;
}

export default function MatchSelector({ onSelect }: Props) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    async function load() {
      const res = await fetch(
        `${BASE_URL}/matches/upcoming?sport=soccer`
      );
      const data = await res.json();
      setMatches(data);
      if (data.length > 0) {
        setSelected(JSON.stringify(data[0]));
        onSelect(data[0]);
      }
    }
    load();
  }, []);

  function handleChange(value: string) {
    setSelected(value);
    onSelect(JSON.parse(value));
  }

  return (
    <div className="glass-card p-6 mb-6">
      <select
        value={selected}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-4"
      >
        {matches.map((m, i) => (
          <option key={i} value={JSON.stringify(m)}>
            {m.home} vs {m.away}
          </option>
        ))}
      </select>
    </div>
  );
}
