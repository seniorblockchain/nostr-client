import { NgModule } from '@angular/core';
import { NostrScrollbarDirective } from '@theme/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        NostrScrollbarDirective
    ],
    exports     : [
        NostrScrollbarDirective
    ]
})
export class NostrScrollbarModule
{
}
