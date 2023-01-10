import { NgModule } from '@angular/core';
import { NostrScrollResetDirective } from '@theme/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        NostrScrollResetDirective
    ],
    exports     : [
        NostrScrollResetDirective
    ]
})
export class NostrScrollResetModule
{
}
