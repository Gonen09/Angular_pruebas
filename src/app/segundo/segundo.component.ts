import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {
  @Input() nameUser;

  constructor() { }

  ngOnInit() {
  }

}
