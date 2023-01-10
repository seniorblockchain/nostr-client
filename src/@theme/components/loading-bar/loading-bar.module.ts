import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NostrLoadingBarComponent } from '@theme/components/loading-bar/loading-bar.component';

@NgModule({
    declarations: [
        NostrLoadingBarComponent
    ],
    imports     : [
        CommonModule,
        MatProgressBarModule
    ],
    exports     : [
        NostrLoadingBarComponent
    ]
})
export class NostrLoadingBarModule
{
}
