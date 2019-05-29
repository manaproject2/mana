import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-corousel-slide',
  templateUrl: './corousel-slide.component.html',
  styleUrls: ['./corousel-slide.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})


export class CorouselSlideComponent implements OnInit {

  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(config: NgbCarouselConfig) {
     
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    
}

  
}





