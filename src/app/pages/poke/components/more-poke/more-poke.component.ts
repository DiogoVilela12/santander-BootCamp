import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-more-poke',
  templateUrl: './more-poke.component.html',
  styleUrls: ['./more-poke.component.css']
})
export class MorePokeComponent {

  constructor(private vcr: ViewContainerRef) { }

  imprimir() {
    const button = document.getElementById('button');
    const factory = this.vcr.createComponent(MorePokeComponent);
    this.vcr.insert(factory.hostView)
    button?.remove()
  }

}
