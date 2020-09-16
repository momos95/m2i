import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagasinPage } from './magasin.page';

describe('MagasinPage', () => {
  let component: MagasinPage;
  let fixture: ComponentFixture<MagasinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagasinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagasinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
