import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NostrCardComponent } from '@theme/components/card/card.component';

@NgModule({
    declarations: [
        NostrCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        NostrCardComponent
    ]
})
export class NostrCardModule
{
}
