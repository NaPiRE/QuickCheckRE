import { Component } from '@angular/core';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CPE_Visualisation';

public curve = shape.curveLinear;

  public links =  [{
      id: 'a',
      source: 'first',
      target: 'second',
    }, {
      id: 'b',
      source: 'first',
      target: 'third',
    }];


  public nodes = [
    {
      id: 'first',
      label: 'A',
      data: {
        nodeColor: '#004696'
      }
    }, {
      id: 'second',
      label: 'B',
      data: {
        nodeColor: '#004696'
      }
    }, {
      id: 'third',
      label: 'C',
      data: {
        nodeColor: '#004696'
      }
    }];
  
}
