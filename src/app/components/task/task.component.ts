import {Component, OnDestroy, OnInit} from '@angular/core';
import {TournamentService} from '../../services/tournament.service';
import {Subject, take, takeUntil} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {SingleTournament, TournamentTask} from '../../interfaces/tournament';
import {SingleTournamentRouteParams} from '../../interfaces/single-tournament-route-params';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {
  tournament: SingleTournament;
  task: TournamentTask | undefined;
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private tournamentService: TournamentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params) => {
      this.tournamentService.getSingleTournament((params as SingleTournamentRouteParams).id).pipe(
        take(1)
      ).subscribe((data) => {
        this.tournament = data;
        this.task = data.task_set.find((t) => t.id === +(params as SingleTournamentRouteParams).taskId);
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
