import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFooterInfoSectionComponent } from './common-footer-info-section.component';

describe('CommonFooterInfoSectionComponent', () => {
  let component: CommonFooterInfoSectionComponent;
  let fixture: ComponentFixture<CommonFooterInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonFooterInfoSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonFooterInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
