import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {

  constructor(
    // private router: Router, // Uncomment if you need to use the router
    // private route: ActivatedRoute, // Uncomment if you need to use the route
    // private location: Location // Uncomment if you need to use the location
  ) { }

  ngOnInit(){}

  public searchCards(){
    const searchInput = document.getElementById("search") as HTMLInputElement;
    const cards = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;
    const searchValue = searchInput.value.toLowerCase();
    
    cards.forEach((card) => {
      const cardText = card.textContent?.toLowerCase() || "";
      if (cardText.includes(searchValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    console.log(searchInput);
  }  
}
