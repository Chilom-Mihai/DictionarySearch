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
  searchInProgress$ = new Subject<boolean>();

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
    if (this.searchValue && this.searchValue.trim() !== '') {
      this.searchInProgress$.next(true);
      this.dictonaryApiService.gethWord(this.searchValue.trim()).subscribe(data => {
        this.word = data[0] ? data[0] : undefined;
        console.log(this.word);
        this.searched = true;
        this.searchInProgress$.next(false);
      }, error => {
        console.log(error);
        this.word = undefined;
        this.searched = true;
        this.searchInProgress$.next(false);
      });
    } else {
      this.emptySearch = 'Whoops, can’t be empty…';
      this.word = undefined;
    }
  }

  modeToggle() {
    this.darkMode = !this.darkMode
  }
}
