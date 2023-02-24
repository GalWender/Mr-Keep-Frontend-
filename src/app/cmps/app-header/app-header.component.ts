import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {
  
  constructor(
    // private route: ActivatedRoute,
    // private router: Router
    ) { }
    
    //based on which input to render
    // isSearch = false
    
    ngOnInit(): void {
    }
    
}
