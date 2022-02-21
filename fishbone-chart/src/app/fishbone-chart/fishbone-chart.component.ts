import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fishbone-chart',
  templateUrl: './fishbone-chart.component.html',
  styleUrls: ['./fishbone-chart.component.css']
})
export class FishboneChartComponent implements OnInit {

  @Input() fishboneData!: FisbhoneDataCPE;
  causes: CauseEffect[] = [];
  effects: CauseEffect[] = [];
  problem: string = "";
  index = 0;
  array = [1, 2, 3, 4];
  topCauses: CauseEffect[] = [];
  bottomCauses: CauseEffect[] = [];
  topEffects: CauseEffect[] = [];
  bottomEffects: CauseEffect[] = [];
  colorValueSpectrum = { causes: 0, effects: 0 };
  color = "";
  currentSelectionEnum = Object.freeze({ CAUSE: 0, EFFECT: 1 });
  currentSelection = this.currentSelectionEnum.CAUSE;


  // For debug purposes
  testDifferentLengths = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.initFishbone()
  }

  initFishbone() {
    this.problem = this.fishboneData.problems[this.index].problemName;
    this.causes = this.fishboneData.problems[this.index].causes;
    this.effects = this.fishboneData.problems[this.index].effects;
    this.setColorSpectrum(this.causes, this.effects);
    this.arrangeElements();
  }

  arrangeElements() {
    //for debugging purposes the elements are split
    var causes = this.causes.slice(0, this.causes.length - this.testDifferentLengths);
    var effects = this.effects.slice(0, this.effects.length - this.testDifferentLengths);

    const causeMiddle = Math.floor(causes.length / 2);
    const effectMiddle = Math.floor(effects.length / 2)

    // bottom and top are swapped so that the graph does not break if only one element is present
    this.bottomCauses = causes.slice(0, causeMiddle);
    this.topCauses = causes.slice(causeMiddle, causes.length);
    this.bottomEffects = effects.slice(0, effectMiddle);
    this.topEffects = effects.slice(effectMiddle, effects.length);
  }

  selectDataset(index: number) {
    this.index = index;
    this.initFishbone();
  }

  setColorSpectrum(causeValues: CauseEffect[], effectValues: CauseEffect[]) {
    var sum = 0;
    for (var value of causeValues) {
      sum += value.percentage;
    }
    this.colorValueSpectrum.causes = sum;
    sum = 0;
    for (var value of effectValues) {
      sum += value.percentage;
    }
    this.colorValueSpectrum.effects = sum;
  }

  getColor(transparancy: number) {

    var colorValueSpectrum = this.currentSelection == this.currentSelectionEnum.CAUSE ? this.colorValueSpectrum.causes : this.colorValueSpectrum.effects;
    return {
      'background': 'rgb(0, 70, 150,' + Math.min(1, .6 + transparancy / colorValueSpectrum) + ')'
    }
  }

  changeSelection() {
    this.currentSelection = (this.currentSelection + 1) % 2;

  }

  getSelectionText() {
    return this.currentSelection === this.currentSelectionEnum.EFFECT ? "causes" : "effects";
  }

  // Debug functions

  increase() {
    if (this.testDifferentLengths < 10) {
      this.testDifferentLengths += 1;
      this.arrangeElements();
    }
  }

  decrease() {
    if (this.testDifferentLengths > 1) {
      this.testDifferentLengths -= 1;
      this.arrangeElements();
    }
  }
}

export interface CauseEffect {
  text: string,
  percentage: number
}

export interface Problem {
  problemName: string;
  causes: CauseEffect[];
  effects: CauseEffect[];
}

export interface FisbhoneDataCPE {
  problems: Problem[];
}


