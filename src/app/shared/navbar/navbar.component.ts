import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DigiDetails } from 'src/app/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() searchChange = new EventEmitter();

  digimonList: Array<DigiDetails>;
  search: string;
  level: Array<string>;


  @Input() set digimons(digimons: DigiDetails[]) {
    if (digimons !== this.digimonList) {
      this.digimonList = digimons;

      // Get types and abilities from each digimon
      this.digimonList.forEach(digimon => {
        this.setDigimonLevel(digimon);
      });
    }
  }

  constructor() { }

  ngOnInit() {
  }

  searchEvent(search): void {
    // verifica si la busqueda esta limpia
    if (search === '') {
      this.search = search;
    }
    this.searchChange.emit(this.search);
  }

  setDigimonLevel(digimon: DigiDetails): void {
    if (digimon) {
      digimon.level.forEach(level => {
        const levelName = level.level.name;
        if (!this.level.includes(levelName)) {
          this.level.push(levelName);
          this.level.sort();
        }
      });
    }
  }
  
}
