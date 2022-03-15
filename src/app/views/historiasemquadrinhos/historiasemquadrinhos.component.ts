import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-historiasemquadrinhos',
  templateUrl: './historiasemquadrinhos.component.html',
  styleUrls: ['./historiasemquadrinhos.component.css']
})
export class HistoriasemquadrinhosComponent implements OnInit {

  title = 'appMarvel';

  public comics: Array<any> = [];
  public offset: any = '0';
  public limit: any = '100';

  constructor(private comic: MarvelService) { }

  ngOnInit(): void {
    this.comic.getComics(this.offset, this.limit).subscribe((res) => {
      console.log('Resposta', res);
      this.comics = res.data.results;
    });
  }

}