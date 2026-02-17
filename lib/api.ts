const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPrediction(match: any) {
  const res = await fetch(`${BASE_URL}/ai/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sport: match.sport,
      league: match.league,
      event_id: match.event_id,
      home_team: match.home,
      away_team: match.away,
    }),
  });

  if (!res.ok) {
    throw new Error("Error generando predicción");
  }

  return res.json();
}

export async function fetchUpcomingMatches() {
  const res = await fetch(`${BASE_URL}/matches/upcoming?sport=soccer`);

  if (!res.ok) {
    throw new Error("Error cargando partidos");
  }

  return res.json();
}
