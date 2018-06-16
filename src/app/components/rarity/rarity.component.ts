import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rarity',
  templateUrl: './rarity.component.html',
  styleUrls: ['./rarity.component.scss']
})
export class RarityComponent implements OnInit {

  @Input()
  public rarity: number;

  public rarityString: string;

  ngOnInit() {
    this.rarityString = Array(this.rarity).fill('★').join('');
  }

}
