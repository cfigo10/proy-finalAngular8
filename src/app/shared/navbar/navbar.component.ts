import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DigiDetails, AppConstants } from 'src/app/interfaces';
import { DigimonService } from 'src/app/services/digimon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

const APPCONSTANT = AppConstants;
export class NavbarComponent implements OnInit {
  
   
  public search: string;
  public levels: any;
  public currentLevel: string;

  constructor(private digimonService: DigimonService) { }

  ngOnInit() {
    this.setDigimonLevel();
    this.digimonService.levelSelected = this.levels;
   console.log(this.levels);

   this.digimonService.getDigimonLevel(this.levels).subscribe( (data) =>{
    console.log('1',data);
    
    this.levels = data;
  });
   

  }

  searchEvent(search) {
    if (search === '') {
      this.search = search;
    }
    this.digimonService.searchSelected = this.search;
    console.log('asd',this.digimonService.searchSelected);
  }

  setDigimonLevel(){
  this.digimonService.getDigimonLevel(AppConstants).subscribe( (data) =>{
    console.log('1',data);
    
    this.levels = data;
  });
    
  }

}