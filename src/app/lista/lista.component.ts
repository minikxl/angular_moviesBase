import { Component, OnInit } from '@angular/core';
import { Film } from '../modele/film';
import { FilmyService } from '../filmy.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})

export class ListaComponent implements OnInit {

  filmy: Film[];
  wiadomosc: string;

  constructor(private fService: FilmyService) { }

  ngOnInit(): void {
    this.fService.wszystkieFilmy().subscribe(
      (dane) => {
        // console.log(dane);
        this.filmy = dane;
      },
      (error) => {
        console.log(error);
        this.wiadomosc = 'Nie można połączyć z bazą. Spróbuj ponownie później';
      }
    );
  }


}
