import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { NostrAlertModule } from '@theme/components/alert';
import { NostrCardModule } from '@theme/components/card';
import { NostrDrawerModule } from '@theme/components/drawer';
import { NostrHighlightModule } from '@theme/components/highlight';
import { NostrLoadingBarModule } from '@theme/components/loading-bar';
import { NostrMasonryModule } from '@theme/components/masonry/masonry.module';
import { NostrNavigationModule } from '@theme/components/navigation';
import { NostrScrollResetModule } from '@theme/directives/scroll-reset';
import { SharedModule } from 'app/shared/shared.module';
import { NostrComponentsComponent } from 'app/modules/admin/ui/nostr-components/nostr-components.component';
import { MockApiComponent } from 'app/modules/admin/ui/nostr-components/libraries/mock-api/mock-api.component';
import { AlertComponent } from 'app/modules/admin/ui/nostr-components/components/alert/alert.component';
import { CardComponent } from 'app/modules/admin/ui/nostr-components/components/card/card.component';
import { DrawerComponent } from 'app/modules/admin/ui/nostr-components/components/drawer/drawer.component';
import { FullscreenComponent } from 'app/modules/admin/ui/nostr-components/components/fullscreen/fullscreen.component';
import { HighlightComponent } from 'app/modules/admin/ui/nostr-components/components/highlight/highlight.component';
import { NavigationComponent } from 'app/modules/admin/ui/nostr-components/components/navigation/navigation.component';
import { MasonryComponent } from 'app/modules/admin/ui/nostr-components/components/masonry/masonry.component';
import { ScrollbarComponent } from 'app/modules/admin/ui/nostr-components/directives/scrollbar/scrollbar.component';
import { ScrollResetComponent } from 'app/modules/admin/ui/nostr-components/directives/scroll-reset/scroll-reset.component';
import { ConfigComponent } from 'app/modules/admin/ui/nostr-components/services/config/config.component';
import { ConfirmationComponent } from 'app/modules/admin/ui/nostr-components/services/confirmation/confirmation.component';
import { LoadingBarComponent } from 'app/modules/admin/ui/nostr-components/components/loading-bar/loading-bar.component';
import { MediaWatcherComponent } from 'app/modules/admin/ui/nostr-components/services/media-watcher/media-watcher.component';
import { SplashScreenComponent } from 'app/modules/admin/ui/nostr-components/services/splash-screen/splash-screen.component';
import { FindByKeyComponent } from 'app/modules/admin/ui/nostr-components/pipes/find-by-key/find-by-key.component';
import { MustMatchComponent } from 'app/modules/admin/ui/nostr-components/validators/must-match/must-match.component';
import { nostrComponentsRoutes } from 'app/modules/admin/ui/nostr-components/nostr-components.routing';

@NgModule({
    declarations: [
        NostrComponentsComponent,
        MockApiComponent,
        AlertComponent,
        CardComponent,
        DrawerComponent,
        FullscreenComponent,
        HighlightComponent,
        LoadingBarComponent,
        MasonryComponent,
        NavigationComponent,
        ScrollbarComponent,
        ScrollResetComponent,
        ConfigComponent,
        ConfirmationComponent,
        SplashScreenComponent,
        MediaWatcherComponent,
        FindByKeyComponent,
        MustMatchComponent
    ],
    imports     : [
        RouterModule.forChild(nostrComponentsRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSidenavModule,
        MatTabsModule,
        MatTreeModule,
        NostrAlertModule,
        NostrCardModule,
        NostrDrawerModule,
        NostrHighlightModule,
        NostrLoadingBarModule,
        NostrMasonryModule,
        NostrNavigationModule,
        NostrScrollResetModule,
        SharedModule
    ]
})
export class NostrComponentsModule
{
}
