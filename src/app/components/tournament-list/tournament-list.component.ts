import { Component, OnInit } from '@angular/core';
import {TournamentService} from '../../services/tournament.service';
import {take} from 'rxjs';
import {Tournament} from '../../interfaces/tournament';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent implements OnInit {
  tournaments: Tournament[] = [];

  constructor(
    private tournamentService: TournamentService
  ) { }

  ngOnInit(): void {
    this.tournamentService.getTournaments().pipe(
      take(1)
    ).subscribe((data) => {
      this.tournaments = data.sort((a, b) => b.id - a.id);
    });
  }

}
