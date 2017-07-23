import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFacesComponent } from './search-faces.component';

describe('SearchFacesComponent', () => {
  let component: SearchFacesComponent;
  let fixture: ComponentFixture<SearchFacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
