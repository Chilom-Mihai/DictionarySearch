import { Component } from '@angular/core';
import { SpeachService } from '../speach.service';
import { Words } from './home.model';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private speach: SpeachService, private dictonaryApiService: SearchService) { }

  showFilter = false;
  currentFilter = 'Mono';
  searchValue = '';
  word: Words | undefined;
  darkMode = false
  emptySearch = ''
  hidden = false
  searched: boolean = false;
  searchInProgress!: boolean

  filter() {
    this.showFilter = !this.showFilter
  }

  playSound(text: string | null) {
    if (text) {
      this.speach.speak(text);
    }
  }

  onFilterSelected(filter: string) {
    this.currentFilter = filter;
    this.showFilter = false;
  }

  searchWord() {
    console.log(this.searchValue);
    if (this.searchValue.trim() !== '') {
      this.dictonaryApiService.gethWord(this.searchValue.trim()).subscribe(data => {
        this.word = data[0] || undefined;
        this.searchInProgress = true;
        console.log(this.word);
      }, error => {
        console.log(error);
        this.word = undefined;
        this.searchInProgress = true
      });
      this.searched = true;
    }
    else {
      this.searched = false;
    }
  }

  modeToggle() {
    this.darkMode = !this.darkMode
  }
}
