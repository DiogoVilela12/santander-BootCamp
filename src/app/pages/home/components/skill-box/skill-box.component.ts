import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-box',
  templateUrl: './skill-box.component.html',
  styleUrls: ['./skill-box.component.css']
})
export class SkillBoxComponent {
  @Input() BGColor:string = "";
  @Input() urlImg:string = "";
}
