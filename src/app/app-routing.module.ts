import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
    import('../pages/home-page/home-page.module').then((m) => m.HomePageModule)
  },
  {
    path: "aptitude",
    loadChildren: () =>
    import('../pages/aptitude-page/aptitude-page.module').then((m) => m.AptitudePageModule)
  },
  {
    path: "logical",
    loadChildren: () =>
    import('../pages/logical-page/logical-page.module').then((m) => m.LogicalPageModule)
  },
  {
    path: "verbal",
    loadChildren: () =>
    import('../pages/verbal-page/verbal-page.module').then((m) => m.VerbalPageModule)
  },
  {
    path: "current-affairs",
    loadChildren: () =>
    import('../pages/current-affairs/current-affairs.module').then((m) => m.CurrentAffairsModule)
  },
  {
    path: "general-knowledge",
    loadChildren: () =>
    import('../pages/gk-page/gk-page.module').then((m) => m.GkPageModule)
  },
  {
    path: "engineering",
    loadChildren: () =>
    import('../pages/engineering/engineering.module').then((m) => m.EngineeringModule)
  },
  {
    path: "interview",
    loadChildren: () =>
    import('../pages/interview/interview.module').then((m) => m.InterviewModule)
  },
  {
    path: "online-test",
    loadChildren: () =>
    import('../pages/online-test/online-test.module').then((m) => m.OnlineTestModule)
  },
  {
    path: "puzzles",
    loadChildren: () =>
    import('../pages/puzzles/puzzles.module').then((m) => m.PuzzlesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
