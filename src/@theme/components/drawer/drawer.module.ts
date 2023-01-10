import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NostrDrawerComponent } from '@theme/components/drawer/drawer.component';

@NgModule({
    declarations: [
        NostrDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        NostrDrawerComponent
    ]
})
export class NostrDrawerModule
{
}
