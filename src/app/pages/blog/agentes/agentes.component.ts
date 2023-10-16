import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css']
})
export class AgentesComponent {
  index:number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      res => this.index = res['id']
    )
  }
}
