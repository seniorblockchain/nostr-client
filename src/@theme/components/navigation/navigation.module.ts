import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NostrScrollbarModule } from '@theme/directives/scrollbar/public-api';
import { NostrHorizontalNavigationBasicItemComponent } from '@theme/components/navigation/horizontal/components/basic/basic.component';
import { NostrHorizontalNavigationBranchItemComponent } from '@theme/components/navigation/horizontal/components/branch/branch.component';
import { NostrHorizontalNavigationDividerItemComponent } from '@theme/components/navigation/horizontal/components/divider/divider.component';
import { NostrHorizontalNavigationSpacerItemComponent } from '@theme/components/navigation/horizontal/components/spacer/spacer.component';
import { NostrHorizontalNavigationComponent } from '@theme/components/navigation/horizontal/horizontal.component';
import { NostrVerticalNavigationAsideItemComponent } from '@theme/components/navigation/vertical/components/aside/aside.component';
import { NostrVerticalNavigationBasicItemComponent } from '@theme/components/navigation/vertical/components/basic/basic.component';
import { NostrVerticalNavigationCollapsableItemComponent } from '@theme/components/navigation/vertical/components/collapsable/collapsable.component';
import { NostrVerticalNavigationDividerItemComponent } from '@theme/components/navigation/vertical/components/divider/divider.component';
import { NostrVerticalNavigationGroupItemComponent } from '@theme/components/navigation/vertical/components/group/group.component';
import { NostrVerticalNavigationSpacerItemComponent } from '@theme/components/navigation/vertical/components/spacer/spacer.component';
import { NostrVerticalNavigationComponent } from '@theme/components/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        NostrHorizontalNavigationBasicItemComponent,
        NostrHorizontalNavigationBranchItemComponent,
        NostrHorizontalNavigationDividerItemComponent,
        NostrHorizontalNavigationSpacerItemComponent,
        NostrHorizontalNavigationComponent,
        NostrVerticalNavigationAsideItemComponent,
        NostrVerticalNavigationBasicItemComponent,
        NostrVerticalNavigationCollapsableItemComponent,
        NostrVerticalNavigationDividerItemComponent,
        NostrVerticalNavigationGroupItemComponent,
        NostrVerticalNavigationSpacerItemComponent,
        NostrVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        NostrScrollbarModule
    ],
    exports     : [
        NostrHorizontalNavigationComponent,
        NostrVerticalNavigationComponent
    ]
})
export class NostrNavigationModule
{
}
