import  { RouterModule, Routes } from "@angular/router";
import { AboutmeComponent } from "./components/home/aboutme/aboutme.component";
import { ProfessionalComponent } from "./components/home/professional/professional.component";
import { SkillComponent } from "./components/home/skill/skill.component";
import { EducationComponent } from "./components/home/education/education.component";
import { CoursesComponent } from "./components/home/courses/courses.component";

const APP_ROUTES: Routes = [
  { path: 'about-me', component: AboutmeComponent },
  { path: 'professional-experience', component: ProfessionalComponent },
  { path: 'skills', component: SkillComponent },
  { path: 'education', component: EducationComponent },
  { path: 'courses-&-certifications', component: CoursesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'about-me' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
