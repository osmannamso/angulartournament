import {Component, OnDestroy, OnInit} from '@angular/core';
import {TournamentService} from '../../services/tournament.service';
import {Subject, take, takeUntil} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {SingleTournamentRouteParams} from '../../interfaces/single-tournament-route-params';
import {SingleTournament} from '../../interfaces/tournament';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit, OnDestroy {
  tournament: SingleTournament;
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private tournamentService: TournamentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe((routeData) => {
      this.tournamentService.getSingleTournament((routeData as SingleTournamentRouteParams).id).pipe(
        take(1)
      ).subscribe((data) => {
        this.tournament = data;
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
