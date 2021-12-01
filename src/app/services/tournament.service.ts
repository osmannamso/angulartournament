import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../values/variables';
import {SingleTournament, Tournament} from '../interfaces/tournament';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  constructor(
    private http: HttpClient
  ) {}

  getTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(`${API_URL}/api/tasks/tournaments/`);
  }

  getSingleTournament(id: number): Observable<SingleTournament> {
    return this.http.get<SingleTournament>(`${API_URL}/api/tasks/tournaments/${id}/`);
  }

  submitTask(id: number): Observable<any> {
    return this.http.post(`${API_URL}/api/tasks/tasks/${id}/submit/`, {});
  }
}
