import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NostrMasonryComponent } from '@theme/components/masonry/masonry.component';

@NgModule({
    declarations: [
        NostrMasonryComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        NostrMasonryComponent
    ]
})
export class NostrMasonryModule
{
}
