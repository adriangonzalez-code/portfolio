import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from "@angular/core";
import {registerLocaleData} from "@angular/common";

import localEs from '@angular/common/locales/es';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { AboutmeComponent } from './components/home/aboutme/aboutme.component';
import { ProfessionalComponent } from './components/home/professional/professional.component';
import { SkillComponent } from './components/home/skill/skill.component';
import { EducationComponent } from './components/home/education/education.component';

import { CoursesComponent } from './components/home/courses/courses.component';
// Routes
import { APP_ROUTING } from "./app.routes";

// Register Language
registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    AboutmeComponent,
    ProfessionalComponent,
    SkillComponent,
    EducationComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
