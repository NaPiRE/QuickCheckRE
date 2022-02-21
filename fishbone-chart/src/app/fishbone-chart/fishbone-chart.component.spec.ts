import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishboneChartComponent } from './fishbone-chart.component';

describe('FishboneChartComponent', () => {
  let component: FishboneChartComponent;
  let fixture: ComponentFixture<FishboneChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishboneChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishboneChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
