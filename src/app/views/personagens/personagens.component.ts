import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from 'src/app/services/characters-api.service';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})

export class PersonagensComponent implements OnInit {
  title = 'appMarvel';

  public offset: any = '0';
  public limit: any = '100';

  public characters: Array<any> = [];

  constructor(private character: CharactersApiService) { }

  ngOnInit(): void {
    this.getcharacters();
  }
  getcharacters() {
    this.character.getAllCharacters(this.offset, this.limit).subscribe((res) => {
      console.log('Resposta', res);
      this.characters = res.data.results;
    });
  }
}
















