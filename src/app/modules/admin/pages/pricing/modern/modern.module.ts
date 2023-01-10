import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NostrCardModule } from '@theme/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { PricingModernComponent } from 'app/modules/admin/pages/pricing/modern/modern.component';
import { pricingModernRoutes } from 'app/modules/admin/pages/pricing/modern/modern.routing';

@NgModule({
    declarations: [
        PricingModernComponent
    ],
    imports     : [
        RouterModule.forChild(pricingModernRoutes),
        MatButtonModule,
        MatIconModule,
        NostrCardModule,
        SharedModule
    ]
})
export class PricingModernModule
{
}
