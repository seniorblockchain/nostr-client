import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NostrCardModule } from '@theme/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { PricingSimpleComponent } from 'app/modules/admin/pages/pricing/simple/simple.component';
import { pricingSimpleRoutes } from 'app/modules/admin/pages/pricing/simple/simple.routing';

@NgModule({
    declarations: [
        PricingSimpleComponent
    ],
    imports     : [
        RouterModule.forChild(pricingSimpleRoutes),
        MatButtonModule,
        MatIconModule,
        NostrCardModule,
        SharedModule
    ]
})
export class PricingSimpleModule
{
}
