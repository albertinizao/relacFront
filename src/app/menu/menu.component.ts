import { Component, ViewChild, OnInit } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CharacterSelectedService }  from '../character/services/character-selected.service';
import { CharacterService }  from '../character/services/character.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  errorMessage: string;



  constructor(
    public characterSelectedService: CharacterSelectedService,
    public characterService: CharacterService
  ) { }


  ngOnInit(): void {
    let user = localStorage.getItem("username");
    if (user){
      this.characterService.getCharacters(user).subscribe(
                       characters => this.characterSelectedService.ownCharacters = characters,
                       error =>  this.errorMessage = <any>error);
     }
  }

  getSelectedCharacter(){
    return this.characterSelectedService.characterSelected;
  }

}
