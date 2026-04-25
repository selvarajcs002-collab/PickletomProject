import http from "./httpClient";

export interface Prize {
  id: number;
  rank: string;
  amount: string;
}

export interface ScheduleItem {
  id: number;
  time: string;
  title: string;
  location: string;
}

export interface TournamentDetails {
  prizes: Prize[];
  schedule: ScheduleItem[];
  rules: string;
}

export const tournamentService = {
  getTournamentDetails: async (): Promise<TournamentDetails> => {
    return await http.get("/Tournament/Details");
  },

  updatePrizes: async (prizes: Prize[]) => {
    return await http.post("/Tournament/Prizes", prizes);
  },

  updateSchedule: async (schedule: ScheduleItem[]) => {
    return await http.post("/Tournament/Schedule", schedule);
  },

  updateRules: async (rules: string) => {
    return await http.post("/Tournament/Rules", { rules });
  },

  saveAll: async (details: TournamentDetails) => {
    return await http.post("/Tournament/SaveAll", details);
  }
};
