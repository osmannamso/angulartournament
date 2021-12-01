import {User} from './login-response';

export interface Tournament {
  created: string;
  ends_at: string;
  id: number;
  starts_at: string;
}

export interface AcceptanceByUser {
  accepted: string;
  user: User;
}

export interface TournamentTask {
  id: number;
  title: string;
  description: string;
  acceptance_by_users: AcceptanceByUser[];
}

export interface SingleTournament extends Tournament {
  task_set: TournamentTask[];
}
