import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DigimonService } from 'src/app/services/digimon.service';
import { DigiDetails } from 'src/app/interfaces'
import { HelperService } from 'src/app/services/helper.service';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  
  public digimonsLoaded: boolean;
  public digimons: DigiDetails; 
  public query: string;
  public idFilters: number;
  public levelFilters: string;

  public flip: string = 'inactive';

  constructor(
    private digimonService: DigimonService,
    protected helperService: HelperService) { }

  ngOnInit(): void {
    this.digimonsLoaded = false;
    this.getDigimons();
    this.digimonService.searchChanged.subscribe(
      (data) => {
        this.query= data;

      }
    );
  }

  getDigimons(): void {
    this.digimonService.getDigimon().subscribe(
      (data: DigiDetails) => {
        this.digimons = data;
        
        },
        (error) => {
          this.helperService.notifyError();
        });
  }

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

}
