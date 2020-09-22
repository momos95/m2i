import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAnnoncePage } from './add-annonce.page';

describe('AddAnnoncePage', () => {
  let component: AddAnnoncePage;
  let fixture: ComponentFixture<AddAnnoncePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnnoncePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAnnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
