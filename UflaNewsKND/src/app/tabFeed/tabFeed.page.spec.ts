import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabFeedPage } from './tabFeed.page';

describe('Tab2Page', () => {
  let component: TabFeedPage;
  let fixture: ComponentFixture<TabFeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabFeedPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
