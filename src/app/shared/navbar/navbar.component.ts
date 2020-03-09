import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DigiDetails } from 'src/app/interfaces';
import { DigimonService } from 'src/app/services/digimon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  
   
  public search: string;
  public levels: Array<string>;
  public currentLevel: string; 
  public digimonList: any;
  public levelName: string;

  constructor(private digimonService: DigimonService) { }

  ngOnInit() {
    this.levels = [];
    this.digimonService.getDigimon().subscribe( 
      (data: DigiDetails) =>{ 
        this.digimonList = data;
          
        this.setDigimonLevel(this.digimonList);
      });
  }

  searchEvent(search) {
    if (search === '') {
      this.search = search;
    }
    this.digimonService.searchSelected = this.search;
    console.log('asd',this.digimonService.searchSelected);
  }

  setDigimonLevel(digimonList: DigiDetails): void {
    
    this.digimonList.forEach( (item) =>{
      const nameLevel= item.level;
      console.log(nameLevel);
      
      if (!this.levels.includes(nameLevel)){
        this.levels.push(nameLevel);
        this.levels.sort();
      }
    });
  }
  
  onLevelSelected(): void {
    if(this.currentLevel) {
      this.digimonService.levelSelected= this.currentLevel;
    }else {
      this.digimonService.levelSelected= '';
    }

  }
}