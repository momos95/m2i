import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoirUserPage } from './voir-user.page';

describe('VoirUserPage', () => {
  let component: VoirUserPage;
  let fixture: ComponentFixture<VoirUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoirUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
