import { Component, Input } from '@angular/core';
import { Agente } from 'src/app/service/valorantAPI/Agente';
import { ValorantAPIService } from 'src/app/service/valorantAPI/valorant-api.service';

@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrls: ['./medium-card.component.css']
})
export class MediumCardComponent {
  @Input() index: number = 0;
  @Input() button: number = 0;
  name: string = '';
  desc: string = '';
  img: string = '';
  background: string = '';

  constructor(private valorantAPI: ValorantAPIService) { }

  ngOnInit() {
    this.valorantAPI.getValorantData().subscribe({

      //Atribuição de paramentros para os cards
      next: (res) => {
        this.name = res.data[this.index].displayName;
        this.desc = res.data[this.index].description;
        this.img = res.data[this.index].fullPortrait;
        this.background = `url(${res.data[this.index].background}) center`;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
