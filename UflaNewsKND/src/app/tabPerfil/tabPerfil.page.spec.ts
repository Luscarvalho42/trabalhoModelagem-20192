import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabPerfilPage } from './tabPerfil.page';

describe('Tab1Page', () => {
  let component: TabPerfilPage;
  let fixture: ComponentFixture<TabPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabPerfilPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
