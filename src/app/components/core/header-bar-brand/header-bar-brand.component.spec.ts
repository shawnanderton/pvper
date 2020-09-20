import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBarBrandComponent } from './header-bar-brand.component';

describe('HeaderBarBrandComponent', () => {
  let component: HeaderBarBrandComponent;
  let fixture: ComponentFixture<HeaderBarBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBarBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBarBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
