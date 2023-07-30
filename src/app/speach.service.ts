import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeachService {

  private synth: SpeechSynthesis;

  constructor() {
    this.synth = window.speechSynthesis;// Initialize the SpeechSynthesis object
  }

  speak(text: string) {
    if (this.synth.speaking) {
      this.synth.cancel();// Stop any ongoing speech before starting a new one
    }

    const providedText = new SpeechSynthesisUtterance(text);
    this.synth.speak(providedText);// Speak the provided text
  }
}
