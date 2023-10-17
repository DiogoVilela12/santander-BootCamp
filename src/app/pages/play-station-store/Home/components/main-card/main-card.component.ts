import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent {
  @Input() color: string | undefined;
  @Input() banner: string | undefined;
  @Input() imagem: string | undefined;

  ngOnInit() {
    this.color = `radial-gradient(${this.color} 25%, #000)`
  }
}
