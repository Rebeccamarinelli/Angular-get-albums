import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDitailsComponent } from './album-ditails.component';

describe('AlbumDitailsComponent', () => {
  let component: AlbumDitailsComponent;
  let fixture: ComponentFixture<AlbumDitailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumDitailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
