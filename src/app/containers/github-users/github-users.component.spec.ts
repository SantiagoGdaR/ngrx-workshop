import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { GithubUsersComponent } from './github-users.component';
import { AppState } from '../../store/state/app.state';
import { reducers } from '../../store/reducers/app.reducer';
import { GetUsers } from '../../store/actions/github.actions';
import { GithubUserListComponent } from '../../components/github-user-list/github-user-list.component';
import { GithubUser } from '../../models/github-user.interface';
import { GetUsersSuccess } from '../../store/actions/github.actions';

describe('GithubUsersComponent', () => {
  let component: GithubUsersComponent;
  let fixture: ComponentFixture<GithubUsersComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers)
      ],
      declarations: [ GithubUsersComponent, GithubUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUsersComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to load github users when created', () => {
    const action = new GetUsers();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should have a list of github users after the data is loaded', () => {
    const githubUsers: GithubUser[] = [
      { login: 'login1', avatar_url: ''},
      { login: 'login2', avatar_url: ''},
      { login: 'login3', avatar_url: ''}
    ];
    const action = new GetUsersSuccess(githubUsers);

    store.dispatch(action);

    component.users$.subscribe(data => {
      expect(data.length).toBe(githubUsers.length);
    });
  });
});
