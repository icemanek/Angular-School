import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
 import {MatExpansionModule} from '@angular/material/expansion';
 import {MatListModule} from '@angular/material/list';
 import {MatStepperModule} from '@angular/material/stepper';
 import {MatTabsModule} from '@angular/material/tabs';
 import {MatTreeModule} from '@angular/material/tree';
 import { MatButtonModule } from '@angular/material/button';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { PortalModule } from '@angular/cdk/portal';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { HomepageComponent } from './homepage/homepage.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MatDatepickerModule } from '@angular/material/datepicker'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { CompareValidatorDirective } from './shared/compare-validator.directive';


const appRoutes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'user/all',
    component: UserListComponent
  },
{
  path: 'courses',
  component: CoursesPageComponent

},
  {
    path: 'user/add',
    component: UserRegisterComponent
  },
  // {
  //   path: 'password/reset',
  //   component: ResetPasswordComponent
  // },
  // {
  //   path: 'user/confirm-account',
  //   component: ConfirmAccountComponent,
  // },
  // {
  //   path: 'password/reset',
  //   component: ResetPasswordComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginPageComponent
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    UserListComponent,
    HomepageComponent,
    CoursesPageComponent,
    UserRegisterComponent,
    CompareValidatorDirective
  ],
  imports: [
    
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    PortalModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    RouterModule, MatTabsModule,
    MatSidenavModule, MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCarouselModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
    ],
  providers: [UserService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
