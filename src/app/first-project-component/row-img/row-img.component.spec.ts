import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowImgComponent } from './row-img.component';

describe('RowImgComponent', () => {
  let component: RowImgComponent;
  let fixture: ComponentFixture<RowImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
