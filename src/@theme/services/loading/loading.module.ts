import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NostrLoadingInterceptor } from '@theme/services/loading/loading.interceptor';

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: NostrLoadingInterceptor,
            multi   : true
        }
    ]
})
export class NostrLoadingModule
{
}
