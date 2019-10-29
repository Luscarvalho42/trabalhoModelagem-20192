import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabInscricoesPage } from './tabInscricoes.page';

describe('TabInscricoesPage', () => {
  let component: TabInscricoesPage;
  let fixture: ComponentFixture<TabInscricoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabInscricoesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabInscricoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
