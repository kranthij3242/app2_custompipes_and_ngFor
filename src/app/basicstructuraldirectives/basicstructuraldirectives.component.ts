import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicstructuraldirectives',
  templateUrl: './basicstructuraldirectives.component.html',
  styleUrls: ['./basicstructuraldirectives.component.css']
})
export class BasicstructuraldirectivesComponent implements OnInit {
students:object=[
  {"sno":10,"fullname":"veena","email":"test@test.com","gender":"FEmale"},
  {"sno":11,"fullname":"Ram","email":"test1@test.com","gender":"malE"},
  {"sno":12,"fullname":"vishnu","email":"test2@test.com","gender":"mAle"},
  {"sno":13,"fullname":"prakash","email":"test3@test.com","gender":"maLe"},
  {"sno":14,"fullname":"sita","email":"test4@test.com","gender":"feMale"},
]
  constructor() { }

  ngOnInit() {
  }

}
