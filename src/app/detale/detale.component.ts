import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmyService } from '../filmy.service';
import { Film } from '../modele/film';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.scss']
})

export class DetaleComponent implements OnInit {
  film: Film;
  baseURL: string = environment.apiURL;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fService: FilmyService
    ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.film = this.fService.getFilm(Number(filmID));
    this.fService.getFilm(Number(id)).subscribe(
      (dane) => {
        this.film = dane;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  back = () => this.location.back();

}
