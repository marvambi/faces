import { Component, OnInit } from '@angular/core';
import { SearchFacesService } from './../search-faces.service';

@Component({
  selector: 'app-search-faces',
  templateUrl: './search-faces.component.html',
  styleUrls: ['./search-faces.component.css']
})
export class SearchFacesComponent implements OnInit {

  place: string;
  language: string;

  faces: any[] = [];
  selected: boolean = false;
  selectedFace: any;
  error_text: string = "";

  constructor(private searchService: SearchFacesService) { }

  ngOnInit() {
  }

  search(place: string, language: string) {
    this.selected = false;
    this.error_text = "";

    
    if (place || language) {
      this.place = place;
      this.language = language;
      this.searchService.getFacesByPlaceAndlanguage(place, language)
      .subscribe(
        users => {
          this.faces = users;
        },
        error => {
          this.faces = [];
          this.error_text =  "Sorry! No Faces found. You can try again however.";
          console.error(error);
        }
      )
    }
  }

  getDetails(facename: string) {
    this.searchService.getDetailsByFaceName(facename)
    .subscribe(
      faceDatails => {
        this.selectedFace = faceDatails;
        this.selected = true;
      },
      error => {
        this.selected = false;
        console.error(error);
      }
    )
}

}
