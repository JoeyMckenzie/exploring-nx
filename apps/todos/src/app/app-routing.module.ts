import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('@exploring-nx/shared/ui/pages').then(
            (m) => m.SharedUiPagesModule
          ),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
