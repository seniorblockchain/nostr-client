import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NostrAlertComponent } from '@theme/components/alert/alert.component';

@NgModule({
    declarations: [
        NostrAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        NostrAlertComponent
    ]
})
export class NostrAlertModule
{
}
