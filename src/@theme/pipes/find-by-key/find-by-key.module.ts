import { NgModule } from '@angular/core';
import { NostrFindByKeyPipe } from '@theme/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        NostrFindByKeyPipe
    ],
    exports     : [
        NostrFindByKeyPipe
    ]
})
export class NostrFindByKeyPipeModule
{
}
