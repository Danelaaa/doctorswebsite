import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main_page/main/main.component';
import { MainAdressComponent } from './main_page/main-adress/main-adress.component';
import { MainSectionComponent } from './main_page/main-section/main-section.component';
import { CategoriesComponent } from './main_page/categories/categories.component';
import { CardsComponent } from './main_page/cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BottomHeaderComponent } from './bottom-header/bottom-header.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UserRegComponent } from './user_registration/user-reg/user-reg.component';
import { UserRegMainComponent } from './user_registration/user-reg-main/user-reg-main.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserpageComponent } from './user-page/userpage/userpage.component';
import { UserMainComponent } from './user-page/user-main/user-main.component';
import { UserComponent } from './user-page/user/user.component';
import { UserProfileComponent } from './user-page/user-profile/user-profile.component';
import { UserTimetableComponent } from './user-page/user-timetable/user-timetable.component';
import { DoctorRegistrationComponent } from './doctor_reg/doctor-registration/doctor-registration.component';
import { DoctorRegMainComponent } from './doctor_reg/doctor-reg-main/doctor-reg-main.component';
import { ScheduleModule, RecurrenceEditorModule,DayService, WorkWeekService,MonthService,MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { ReserveComponent } from './reserve/reserve.component';
import { ReserveMainComponent } from './reserve/reserve-main/reserve-main.component';
import { ReserveDoctorComponent } from './reserve/reserve-doctor/reserve-doctor.component';
import { ReserveCalendarComponent } from './reserve/reserve-calendar/reserve-calendar.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { DoctorMainComponent } from './doctor-page/doctor-main/doctor-main.component';


const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'authirization', component: AuthorizationComponent },
  { path: 'UserReg', component: UserRegComponent },
  { path: 'user-page', component: UserpageComponent },
  { path: 'doctor_registration', component:  DoctorRegistrationComponent},
  { path: 'reserve', component: ReserveComponent},
  { path: 'categories', component: CategoriesPageComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: 'doctorpage', component: DoctorPageComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    BottomHeaderComponent,
    MainAdressComponent,
    MainSectionComponent,
    CategoriesComponent,
    CardsComponent,
    FooterComponent,
    AuthorizationComponent,
    UserRegComponent,
    UserRegMainComponent,
    HomeComponent,
    UserpageComponent,
    UserMainComponent,
    UserComponent,
    UserProfileComponent,
    UserTimetableComponent,
    DoctorRegistrationComponent,
    DoctorRegMainComponent,
    ReserveComponent,
    ReserveMainComponent,
    ReserveDoctorComponent,
    ReserveCalendarComponent,
    CategoriesPageComponent,
    AdminPageComponent,
    DoctorPageComponent,
    DoctorMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ScheduleModule, RecurrenceEditorModule,
  ],
  exports: [RouterModule],
  providers: [DayService, WorkWeekService,MonthService,MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
