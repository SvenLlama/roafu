import { Component, OnInit } from '@angular/core';
import { Quest } from 'src/assets/quest';
import questImport from '../../assets/quest.json';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.sass']
})
export class QuestsComponent implements OnInit {

  quests: Quest[] = []

  constructor() {
    this.quests = questImport as any as Quest[];

    this.quests.sort((a, b) => a.minLevel - b.minLevel);
  }

  ngOnInit(): void {
  }

}
