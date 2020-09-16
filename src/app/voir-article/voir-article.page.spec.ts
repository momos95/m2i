import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoirArticlePage } from './voir-article.page';

describe('VoirArticlePage', () => {
  let component: VoirArticlePage;
  let fixture: ComponentFixture<VoirArticlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirArticlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoirArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
