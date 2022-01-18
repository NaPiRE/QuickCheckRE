import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { links, links_example } from './links';
import { nodes, nodes_example } from './nodes'
import { Subject } from 'rxjs';
import { Edge, Node, Layout, DagreLayout} from '@swimlane/ngx-graph';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CPE_Visualisation';

  public curve = shape.curveLinear;
  public links: Edge[] = [];
  public nodes: Node[] = [];
  public layout: Layout = new DagreLayout();

  zoomToFit$: Subject<boolean> = new Subject();
  center$: Subject<boolean> = new Subject();

  constructor() {
    this.links = links;
    this.nodes = nodes;
  }

  public ngOnInit(): void {

  }


  fitGraph() {
    this.zoomToFit$.next(true)
  }

  public layoutSettings = {
    orientation: 'TB'
  }

  centerGraph() {
    this.center$.next(true);
  }

}
