import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NostrHighlightModule } from '@theme/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { ColorsComponent } from 'app/modules/admin/ui/colors/colors.component';

export const routes: Route[] = [
    {
        path     : '',
        component: ColorsComponent
    }
];

@NgModule({
    declarations: [
        ColorsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatIconModule,
        MatRippleModule,
        MatTabsModule,
        NostrHighlightModule,
        SharedModule
    ]
})
export class ColorsModule
{
}
