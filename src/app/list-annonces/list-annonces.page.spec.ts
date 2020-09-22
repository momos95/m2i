import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListAnnoncesPage } from './list-annonces.page';

describe('ListAnnoncesPage', () => {
  let component: ListAnnoncesPage;
  let fixture: ComponentFixture<ListAnnoncesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnnoncesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListAnnoncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
