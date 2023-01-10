import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NostrHighlightComponent } from '@theme/components/highlight/highlight.component';

@NgModule({
    declarations: [
        NostrHighlightComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        NostrHighlightComponent
    ]
})
export class NostrHighlightModule
{
}
