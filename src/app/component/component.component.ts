import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-component',
  standalone: false,
  templateUrl: './component.component.html',
  styles: ``
})
export class ComponentComponent {
 @Input() plantName: string ="";
 wilgotnosc: number = 0;
 wilgotnoscSignal=signal(0);
 wilgotnoscStatus= computed(() => {
  const wilgotnosc = this.wilgotnoscSignal();
  if(wilgotnosc < 40) {
    return 'Roslina ma za sucho';
  } else if(wilgotnosc >= 40 && wilgotnosc <= 80) {
    return 'Roslina ma odpowiednia wilgotnosc';
  } else {
    return 'Roslina ma za duzo wody';
  }
 });
  PodnesWilgotnosc() {
    if(this.wilgotnoscSignal() < 100) {
      this.wilgotnoscSignal.update(wilgotnosc => wilgotnosc + 10);
    }
  }
}
