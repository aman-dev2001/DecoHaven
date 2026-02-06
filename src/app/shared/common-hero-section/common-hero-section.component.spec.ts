import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonHeroSectionComponent } from './common-hero-section.component';

describe('CommonHeroSectionComponent', () => {
  let component: CommonHeroSectionComponent;
  let fixture: ComponentFixture<CommonHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonHeroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
