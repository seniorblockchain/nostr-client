import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NostrFullscreenComponent } from '@theme/components/fullscreen/fullscreen.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        NostrFullscreenComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        CommonModule
    ],
    exports     : [
        NostrFullscreenComponent
    ]
})
export class NostrFullscreenModule
{
}
