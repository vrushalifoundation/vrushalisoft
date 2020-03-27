import { NgModule } from '@angular/core';
import { ComboChartDirective } from "./ng2-googlechart-combo.directive";
import { GoogleChartDirective } from "./ng2-googlechart-wrapper.directive";
import { ChartDirective } from "./ng2-googlechart.directive";
import { ChartLoaderService } from './ng2-googlechart.service';
@NgModule({
  declarations: [
    ChartDirective,
    ComboChartDirective, GoogleChartDirective
  ], providers: [ChartLoaderService],
  exports: [
    ChartDirective,
    ComboChartDirective, GoogleChartDirective
  ]
})
export class GoogleChartModule {
}
