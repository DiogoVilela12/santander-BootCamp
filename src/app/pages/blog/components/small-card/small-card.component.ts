import { Component, Input } from '@angular/core';
import { ValorantAPIService } from 'src/app/service/valorantAPI/valorant-api.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() index: number = 0;

  name: string = '';
  desc: string = '';
  img: string = '';

  constructor(private valorantAPI: ValorantAPIService) { }

  ngOnInit() {
    this.valorantAPI.getValorantData().subscribe({

      //Atribuição de paramentros para os cards
      next: (res) => {
        this.name = res.data[this.index].displayName;
        this.desc = res.data[this.index].description;
        this.img = res.data[this.index].displayIconSmall;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
