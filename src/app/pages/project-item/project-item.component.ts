import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.less']
})
export class ProjectItemComponent implements OnInit {
 
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe(qara => console.log('queryParamMap', qara));
    this.activeRoute.queryParams.subscribe(qara => console.log('queryParams', qara));
  }

}
