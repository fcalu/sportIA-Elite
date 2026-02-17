export interface TotalGoalsProp {
  type: "total_goals";
  model_prob_over: number;
  model_prob_under: number;
  edge_over: number;
  edge_under: number;
  projection_model: {
    home_xg: number;
    away_xg: number;
    total_xg: number;
  };
  home_history: {
    over_rate_line: number;
    btts_rate: number;
    win_rate: number;
    last5: string[];
  };
  away_history: {
    over_rate_line: number;
    btts_rate: number;
    win_rate: number;
    last5: string[];
  };
}

export interface BttsProp {
  type: "btts";
  model_prob_yes: number;
  model_prob_no: number;
}

export interface MoneylineProp {
  type: "moneyline";
  model_prob_home: number;
  model_prob_draw: number;
  model_prob_away: number;
}

export interface PredictionResponse {
  match: string;
  league: string;
  analysis: string;
  player_props: Array<TotalGoalsProp | BttsProp | MoneylineProp>;
}
