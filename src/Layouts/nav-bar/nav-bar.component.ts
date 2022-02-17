import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})



export class NavBarComponent implements OnInit {

  navbarfixed:boolean = false;

  constructor() {}

 @ViewChild("headerElement") headerElement: ElementRef;

  @HostListener('window:scroll', ['$event']) onScroll(){

      if(window.scrollY > this.headerElement.nativeElement.offsetTop){
        this.navbarfixed = true;
     
        }else{
          this.navbarfixed=false;
        
        }
  }

  ngOnInit(): void {

  }

}

// window.onscroll = function() {myFunction()};


// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


//function buildName(firstName: string, ...restOfName: string[]) {
//   return firstName + " " + restOfName.join(" ");
// }
