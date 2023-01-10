"use strict";(self.webpackChunknostr=self.webpackChunknostr||[]).push([[8256],{8256:(Ce,k,r)=>{r.r(k),r.d(k,{AcademyModule:()=>f});var g=r(1390),_=r(4859),A=r(9549),T=r(7392),w=r(284),C=r(3162),Q=r(4385),Z=r(3267),S=r(455),J=r(266),D=r(5135),q=r(4466),e=r(4650);class x{constructor(){}}x.\u0275fac=function(n){return new(n||x)},x.\u0275cmp=e.Xpm({type:x,selectors:[["academy"]],decls:1,vars:0,template:function(n,t){1&n&&e._UZ(0,"router-outlet")},dependencies:[g.lC],encapsulation:2,changeDetection:0});var p=r(1135),U=r(7579),h=r(2722),Y=r(9841),I=r(8505),O=r(4004),M=r(3900),B=r(2843),$=r(9646),R=r(529);class a{constructor(n){this._httpClient=n,this._categories=new p.X(null),this._course=new p.X(null),this._courses=new p.X(null)}get categories$(){return this._categories.asObservable()}get courses$(){return this._courses.asObservable()}get course$(){return this._course.asObservable()}getCategories(){return this._httpClient.get("api/apps/academy/categories").pipe((0,I.b)(n=>{this._categories.next(n)}))}getCourses(){return this._httpClient.get("api/apps/academy/courses").pipe((0,I.b)(n=>{this._courses.next(n)}))}getCourseById(n){return this._httpClient.get("api/apps/academy/courses/course",{params:{id:n}}).pipe((0,O.U)(t=>(this._course.next(t),t)),(0,M.w)(t=>t?(0,$.of)(t):(0,B._)("Could not found course with id of "+n+"!")))}}a.\u0275fac=function(n){return new(n||a)(e.LFG(R.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"});var F=r(7376),z=r(3238),l=r(6895),L=r(9888);function j(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",15),e._uU(2),e.qZA(),e.BQk()),2&o){const t=n.$implicit;e.xp6(1),e.Q6J("value",t.slug),e.xp6(1),e.Oqu(t.title)}}const E=function(o,n,t,s){return{"text-blue-800 bg-blue-100 dark:text-blue-50 dark:bg-blue-500":o,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":n,"text-pink-800 bg-pink-100 dark:text-pink-50 dark:bg-pink-500":t,"text-amber-800 bg-amber-100 dark:text-amber-50 dark:bg-amber-500":s}};function P(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",45),e._uU(2),e.qZA(),e.BQk()),2&o){const t=n.ngIf;e.xp6(1),e.Q6J("ngClass",e.l5B(2,E,"web"===t.slug,"android"===t.slug,"cloud"===t.slug,"firebase"===t.slug)),e.xp6(1),e.hij(" ",t.title," ")}}function G(o,n){1&o&&(e.ynx(0),e._UZ(1,"mat-icon",46),e.BQk()),2&o&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:badge-check")("matTooltip","You completed this course at least once"))}function H(o,n){1&o&&(e.ynx(0),e.TgZ(1,"div",35),e._uU(2,"Never completed"),e.qZA(),e.BQk())}function K(o,n){1&o&&(e.ynx(0),e._uU(1,"once"),e.BQk())}function X(o,n){1&o&&(e.ynx(0),e._uU(1,"twice"),e.BQk())}const W=function(){return{"=0":"time","=1":"time",other:"times"}};function V(o,n){if(1&o&&(e.ynx(0),e._uU(1),e.ALo(2,"i18nPlural"),e.BQk()),2&o){const t=e.oxw(2).$implicit;e.xp6(1),e.AsE("",t.progress.completed," ",e.xi3(2,2,t.progress.completed,e.DdM(5,W))," ")}}function ee(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",35)(2,"span"),e._uU(3,"Completed"),e.qZA(),e.TgZ(4,"span",47),e.YNc(5,K,2,0,"ng-container",28),e.YNc(6,X,2,0,"ng-container",28),e.YNc(7,V,3,6,"ng-container",28),e.qZA()(),e.BQk()),2&o){const t=e.oxw().$implicit;e.xp6(5),e.Q6J("ngIf",1===t.progress.completed),e.xp6(1),e.Q6J("ngIf",2===t.progress.completed),e.xp6(1),e.Q6J("ngIf",t.progress.completed>2)}}function te(o,n){1&o&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2,"Start"),e.qZA(),e.BQk())}function ne(o,n){1&o&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2,"Start again"),e.qZA(),e.BQk())}function oe(o,n){if(1&o&&(e.ynx(0),e.YNc(1,te,3,0,"ng-container",28),e.YNc(2,ne,3,0,"ng-container",28),e.BQk()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",0===t.progress.completed),e.xp6(1),e.Q6J("ngIf",t.progress.completed>0)}}function re(o,n){1&o&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2,"Continue"),e.qZA(),e.BQk())}const ie=function(o){return[o]};function se(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",25)(2,"div",26)(3,"div",27),e.YNc(4,P,3,7,"ng-container",28),e.ALo(5,"nostrFindByKey"),e.TgZ(6,"div",29),e.YNc(7,G,2,2,"ng-container",28),e.qZA()(),e.TgZ(8,"div",30),e._uU(9),e.qZA(),e.TgZ(10,"div",31),e._uU(11),e.qZA(),e._UZ(12,"div",32),e.TgZ(13,"div",33),e._UZ(14,"mat-icon",34),e.TgZ(15,"div",35),e._uU(16),e.qZA()(),e.TgZ(17,"div",36),e._UZ(18,"mat-icon",34),e.YNc(19,H,3,0,"ng-container",28),e.YNc(20,ee,8,3,"ng-container",28),e.qZA()(),e.TgZ(21,"div",37)(22,"div",38),e._UZ(23,"div",39),e.ALo(24,"percent"),e._UZ(25,"mat-progress-bar",40),e.qZA(),e.TgZ(26,"div",41)(27,"a",42)(28,"span",43),e.YNc(29,oe,3,2,"ng-container",28),e.YNc(30,re,3,0,"ng-container",28),e._UZ(31,"mat-icon",44),e.qZA()()()()(),e.BQk()),2&o){const t=n.$implicit,s=e.oxw(2);e.xp6(4),e.Q6J("ngIf",e.Dn7(5,17,t.category,"slug",s.categories)),e.xp6(3),e.Q6J("ngIf",t.progress.completed>0),e.xp6(2),e.Oqu(t.title),e.xp6(2),e.Oqu(t.description),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:clock"),e.xp6(2),e.hij("",t.duration," minutes"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:academic-cap"),e.xp6(1),e.Q6J("ngIf",0===t.progress.completed),e.xp6(1),e.Q6J("ngIf",t.progress.completed>0),e.xp6(3),e.Q6J("matTooltip",e.lcZ(24,21,t.progress.currentStep/t.totalSteps))("matTooltipPosition","above")("matTooltipClass","-mb-0.5"),e.xp6(2),e.Q6J("value",100*t.progress.currentStep/t.totalSteps),e.xp6(2),e.Q6J("routerLink",e.VKq(23,ie,t.id)),e.xp6(2),e.Q6J("ngIf",0===t.progress.currentStep),e.xp6(1),e.Q6J("ngIf",t.progress.currentStep>0),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:arrow-sm-right")}}function ce(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",24),e.YNc(2,se,32,25,"ng-container",16),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.filteredCourses)("ngForTrackBy",t.trackByFn)}}function ae(o,n){1&o&&(e.TgZ(0,"div",48),e._UZ(1,"mat-icon",49),e.TgZ(2,"div",50),e._uU(3,"No courses found!"),e.qZA()()),2&o&&(e.xp6(1),e.Q6J("svgIcon","heroicons_outline:document-search"))}class y{constructor(n,t,s,i){this._activatedRoute=n,this._changeDetectorRef=t,this._router=s,this._academyService=i,this.filters={categorySlug$:new p.X("all"),query$:new p.X(""),hideCompleted$:new p.X(!1)},this._unsubscribeAll=new U.x}ngOnInit(){this._academyService.categories$.pipe((0,h.R)(this._unsubscribeAll)).subscribe(n=>{this.categories=n,this._changeDetectorRef.markForCheck()}),this._academyService.courses$.pipe((0,h.R)(this._unsubscribeAll)).subscribe(n=>{this.courses=this.filteredCourses=n,this._changeDetectorRef.markForCheck()}),(0,Y.a)([this.filters.categorySlug$,this.filters.query$,this.filters.hideCompleted$]).subscribe(([n,t,s])=>{this.filteredCourses=this.courses,"all"!==n&&(this.filteredCourses=this.filteredCourses.filter(i=>i.category===n)),""!==t&&(this.filteredCourses=this.filteredCourses.filter(i=>i.title.toLowerCase().includes(t.toLowerCase())||i.description.toLowerCase().includes(t.toLowerCase())||i.category.toLowerCase().includes(t.toLowerCase()))),s&&(this.filteredCourses=this.filteredCourses.filter(i=>0===i.progress.completed))})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}filterByQuery(n){this.filters.query$.next(n)}filterByCategory(n){this.filters.categorySlug$.next(n.value)}toggleCompleted(n){this.filters.hideCompleted$.next(n.checked)}trackByFn(n,t){return t.id||n}}y.\u0275fac=function(n){return new(n||y)(e.Y36(g.gz),e.Y36(e.sBO),e.Y36(g.F0),e.Y36(a))},y.\u0275cmp=e.Xpm({type:y,selectors:[["academy-list"]],decls:30,vars:10,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"relative","flex-0","py-8","px-4","sm:p-16","overflow-hidden","bg-gray-800","dark"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],[1,"z-10","relative","flex","flex-col","items-center"],[1,"text-xl","font-semibold"],[1,"mt-1","text-4xl","sm:text-7xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"max-w-2xl","mt-6","sm:text-2xl","text-center","tracking-tight","text-secondary"],[1,"flex","flex-auto","p-6","sm:p-10"],[1,"flex","flex-col","flex-auto","w-full","max-w-xs","sm:max-w-5xl","mx-auto"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-xs","sm:max-w-none"],[1,"w-full","sm:w-36",3,"subscriptSizing"],[3,"value","selectionChange"],[3,"value"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"w-full","sm:w-72","mt-4","sm:mt-0","sm:ml-4",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["placeholder","Search by title or description","matInput","",3,"input"],["query",""],[1,"mt-8","sm:mt-0","sm:ml-auto",3,"color","change"],[4,"ngIf","ngIfElse"],["noCourses",""],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-8","mt-8","sm:mt-10"],[1,"flex","flex-col","h-96","shadow","rounded-2xl","overflow-hidden","bg-card"],[1,"flex","flex-col","p-6"],[1,"flex","items-center","justify-between"],[4,"ngIf"],[1,"flex","items-center"],[1,"mt-4","text-lg","font-medium"],[1,"mt-0.5","line-clamp-2","text-secondary"],[1,"w-12","h-1","my-6","border-t-2"],[1,"flex","items-center","leading-5","text-md","text-secondary"],[1,"icon-size-5","text-hint",3,"svgIcon"],[1,"ml-1.5"],[1,"flex","items-center","mt-2","leading-5","text-md","text-secondary"],[1,"flex","flex-col","w-full","mt-auto"],[1,"relative","h-0.5"],[1,"z-10","absolute","inset-x-0","h-6","-mt-3",3,"matTooltip","matTooltipPosition","matTooltipClass"],[1,"h-0.5",3,"value"],[1,"px-6","py-4","text-right","bg-gray-50","dark:bg-transparent"],["mat-stroked-button","",3,"routerLink"],[1,"inline-flex","items-center"],[1,"ml-1.5","icon-size-5",3,"svgIcon"],[1,"py-0.5","px-3","rounded-full","text-sm","font-semibold",3,"ngClass"],[1,"icon-size-5","text-green-600",3,"svgIcon","matTooltip"],[1,"ml-1"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-6","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(n,t){if(1&n){const s=e.EpF();e.TgZ(0,"div",0)(1,"div",1),e.O4$(),e.TgZ(2,"svg",2)(3,"g",3),e._UZ(4,"circle",4)(5,"circle",5),e.qZA()(),e.kcU(),e.TgZ(6,"div",6)(7,"h2",7),e._uU(8,"NOSTR ACADEMY"),e.qZA(),e.TgZ(9,"div",8),e._uU(10," What do you want to learn today? "),e.qZA(),e.TgZ(11,"div",9),e._uU(12," Our courses will step you through the process of a building small applications, or adding new features to existing applications. "),e.qZA()()(),e.TgZ(13,"div",10)(14,"div",11)(15,"div",12)(16,"mat-form-field",13)(17,"mat-select",14),e.NdJ("selectionChange",function(c){return t.filterByCategory(c)}),e.TgZ(18,"mat-option",15),e._uU(19,"All"),e.qZA(),e.YNc(20,j,3,2,"ng-container",16),e.qZA()(),e.TgZ(21,"mat-form-field",17),e._UZ(22,"mat-icon",18),e.TgZ(23,"input",19,20),e.NdJ("input",function(){e.CHM(s);const c=e.MAs(24);return e.KtG(t.filterByQuery(c.value))}),e.qZA()(),e.TgZ(25,"mat-slide-toggle",21),e.NdJ("change",function(c){return t.toggleCompleted(c)}),e._uU(26," Hide completed "),e.qZA()(),e.YNc(27,ce,3,2,"ng-container",22),e.YNc(28,ae,4,1,"ng-template",null,23,e.W1O),e.qZA()()()}if(2&n){const s=e.MAs(29);e.xp6(16),e.Q6J("subscriptSizing","dynamic"),e.xp6(1),e.Q6J("value","all"),e.xp6(1),e.Q6J("value","all"),e.xp6(2),e.Q6J("ngForOf",t.categories)("ngForTrackBy",t.trackByFn),e.xp6(1),e.Q6J("subscriptSizing","dynamic"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:search"),e.xp6(3),e.Q6J("color","primary"),e.xp6(2),e.Q6J("ngIf",t.filteredCourses.length)("ngIfElse",s)}},dependencies:[g.rH,_.zs,A.KE,A.qo,T.Hw,w.Nt,C.pW,F.PQ,Q.gD,z.ey,S.Rr,J.gM,l.mk,l.sg,l.O5,L.q,l.Zx,l.Gx],encapsulation:2,changeDetection:0});var le=r(9039),b=r(3848);const ge=["courseSteps"],pe=function(o,n,t,s){return{"text-blue-800 bg-blue-100 dark:text-blue-50 dark:bg-blue-500":o,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":n,"text-pink-800 bg-pink-100 dark:text-pink-50 dark:bg-pink-500":t,"text-amber-800 bg-amber-100 dark:text-amber-50 dark:bg-amber-500":s}};function me(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",41),e._uU(2),e.qZA(),e.BQk()),2&o){const t=n.ngIf;e.xp6(1),e.Q6J("ngClass",e.l5B(2,pe,"web"===t.slug,"android"===t.slug,"cloud"===t.slug,"firebase"===t.slug)),e.xp6(1),e.hij(" ",t.title," ")}}const ue=function(o,n){return{"bg-primary":o,"bg-gray-300 dark:bg-gray-600":n}};function de(o,n){if(1&o&&(e.ynx(0),e._UZ(1,"div",48),e.BQk()),2&o){const t=e.oxw().$implicit,s=e.oxw();e.xp6(1),e.Q6J("ngClass",e.WLB(1,ue,t.order<s.currentStep,t.order>=s.currentStep))}}function fe(o,n){1&o&&(e.ynx(0),e._UZ(1,"mat-icon",7),e.BQk()),2&o&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:check"))}function _e(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",49),e._uU(2),e.qZA(),e.BQk()),2&o){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.order+1)}}function xe(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",50),e._uU(2),e.qZA(),e.BQk()),2&o){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.order+1)}}const he=function(o,n,t){return{"bg-primary dark:bg-primary text-on-primary group-hover:bg-primary-800 ring-transparent":o,"ring-primary":n,"ring-gray-300 dark:ring-gray-600 group-hover:ring-gray-400":t}};function ye(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"li",42),e.YNc(2,de,2,4,"ng-container",9),e.TgZ(3,"div",43),e.NdJ("click",function(){const c=e.CHM(t).$implicit,Te=e.oxw();return e.KtG(Te.goToStep(c.order))}),e.TgZ(4,"div",44),e.YNc(5,fe,2,1,"ng-container",9),e.YNc(6,_e,3,1,"ng-container",9),e.YNc(7,xe,3,1,"ng-container",9),e.qZA(),e.TgZ(8,"div",45)(9,"div",46),e._uU(10),e.qZA(),e.TgZ(11,"div",47),e._uU(12),e.qZA()()()(),e.BQk()}if(2&o){const t=n.$implicit,s=n.last,i=e.oxw();e.xp6(1),e.ekj("current-step",t.order===i.currentStep),e.xp6(1),e.Q6J("ngIf",!s),e.xp6(2),e.Q6J("ngClass",e.kEZ(9,he,t.order<i.currentStep,t.order===i.currentStep,t.order>i.currentStep)),e.xp6(1),e.Q6J("ngIf",t.order<i.currentStep),e.xp6(1),e.Q6J("ngIf",t.order===i.currentStep),e.xp6(1),e.Q6J("ngIf",t.order>i.currentStep),e.xp6(3),e.Oqu(t.title),e.xp6(2),e.Oqu(t.subtitle)}}function ve(o,n){if(1&o&&e._UZ(0,"div",52),2&o){const t=e.oxw().$implicit;e.Q6J("innerHTML",t.content,e.oJD)}}function Ze(o,n){1&o&&(e.ynx(0),e.TgZ(1,"mat-tab"),e.YNc(2,ve,1,1,"ng-template",51),e.qZA(),e.BQk())}const N=function(){return[".."]};class v{constructor(n,t,s,i,c){this._document=n,this._academyService=t,this._changeDetectorRef=s,this._elementRef=i,this._nostrMediaWatcherService=c,this.currentStep=0,this.drawerMode="side",this.drawerOpened=!0,this._unsubscribeAll=new U.x}ngOnInit(){this._academyService.categories$.pipe((0,h.R)(this._unsubscribeAll)).subscribe(n=>{this.categories=n,this._changeDetectorRef.markForCheck()}),this._academyService.course$.pipe((0,h.R)(this._unsubscribeAll)).subscribe(n=>{this.course=n,this.goToStep(n.progress.currentStep),this._changeDetectorRef.markForCheck()}),this._nostrMediaWatcherService.onMediaChange$.pipe((0,h.R)(this._unsubscribeAll)).subscribe(({matchingAliases:n})=>{n.includes("lg")?(this.drawerMode="side",this.drawerOpened=!0):(this.drawerMode="over",this.drawerOpened=!1),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}goToStep(n){this.currentStep=n,this.courseSteps.selectedIndex=this.currentStep,this._changeDetectorRef.markForCheck()}goToPreviousStep(){0!==this.currentStep&&(this.goToStep(this.currentStep-1),this._scrollCurrentStepElementIntoView())}goToNextStep(){this.currentStep!==this.course.totalSteps-1&&(this.goToStep(this.currentStep+1),this._scrollCurrentStepElementIntoView())}trackByFn(n,t){return t.id||n}_scrollCurrentStepElementIntoView(){setTimeout(()=>{const n=this._document.getElementsByClassName("current-step")[0];n&&n.scrollIntoView({behavior:"smooth",block:"start"})})}}v.\u0275fac=function(n){return new(n||v)(e.Y36(l.K0),e.Y36(a),e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(le.m))},v.\u0275cmp=e.Xpm({type:v,selectors:[["academy-details"]],viewQuery:function(n,t){if(1&n&&e.Gf(ge,7),2&n){let s;e.iGM(s=e.CRH())&&(t.courseSteps=s.first)}},decls:68,vars:37,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full"],[1,"w-90","dark:bg-gray-900",3,"autoFocus","mode","opened"],["matDrawer",""],[1,"flex","flex-col","items-start","p-8","border-b"],[1,"inline-flex","items-center","leading-6","text-primary","hover:underline",3,"routerLink"],[1,"inline-flex","items-center"],[1,"icon-size-5","text-current",3,"svgIcon"],[1,"ml-1.5","font-medium","leading-5"],[4,"ngIf"],[1,"mt-3","text-2xl","font-semibold"],[1,"text-secondary"],[1,"mt-6","flex","items-center","leading-5","text-md","text-secondary"],[1,"icon-size-5","text-hint",3,"svgIcon"],[1,"ml-1.5"],[1,"py-2","px-8"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","flex-col","overflow-hidden"],[1,"lg:hidden","flex","flex-0","items-center","py-2","pl-4","pr-6","sm:py-4","md:pl-6","md:pr-8","border-b","lg:border-b-0","bg-card","dark:bg-transparent"],["mat-icon-button","",3,"routerLink"],[3,"svgIcon"],[1,"ml-2.5","text-md","sm:text-xl","font-medium","tracking-tight","truncate"],[1,"hidden","lg:block","flex-0","h-0.5","w-full",3,"value"],["cdkScrollable","",1,"flex-auto","overflow-y-auto"],[1,"nostr-mat-no-header",3,"animationDuration"],["courseSteps",""],[1,"z-10","sticky","hidden","lg:flex","bottom-4","p-4"],[1,"flex","items-center","justify-center","mx-auto","p-2","rounded-full","shadow-lg","bg-primary"],["mat-flat-button","",1,"flex-0",3,"color","click"],[1,"mr-2",3,"svgIcon"],[1,"mr-1"],[1,"flex","items-center","justify-center","mx-2.5","font-medium","leading-5","text-on-primary"],[1,"mx-0.5","text-hint"],[1,"ml-1"],[1,"ml-2",3,"svgIcon"],[1,"lg:hidden","flex","items-center","p-4","border-t","bg-card"],["mat-icon-button","",3,"click"],[1,"flex","items-center","justify-center","ml-1","lg:ml-2","font-medium","leading-5"],[1,"flex-auto","ml-6","rounded-full",3,"value"],["mat-icon-button","",1,"ml-4",3,"click"],["mat-icon-button","",1,"ml-0.5",3,"click"],[1,"mt-7","py-0.5","px-3","rounded-full","text-sm","font-semibold",3,"ngClass"],[1,"relative","group","py-6"],[1,"relative","flex","items-start","cursor-pointer",3,"click"],[1,"flex","flex-0","items-center","justify-center","w-8","h-8","rounded-full","ring-2","ring-inset","bg-card","dark:bg-default",3,"ngClass"],[1,"ml-4"],[1,"font-medium","leading-4"],[1,"mt-1.5","text-md","leading-4","text-secondary"],[1,"absolute","top-6","left-4","w-0.5","h-full","-ml-px",3,"ngClass"],[1,"text-md","font-semibold","text-primary","dark:text-primary-500"],[1,"text-md","font-semibold","text-hint","group-hover:text-secondary"],["matTabContent",""],[1,"prose","prose-sm","max-w-3xl","mx-auto","sm:my-2","lg:mt-4","p-6","sm:p-10","sm:py-12","rounded-2xl","shadow","overflow-hidden","bg-card",3,"innerHTML"]],template:function(n,t){if(1&n){const s=e.EpF();e.TgZ(0,"div",0)(1,"mat-drawer-container",1)(2,"mat-drawer",2,3)(4,"div",4)(5,"a",5)(6,"span",6),e._UZ(7,"mat-icon",7),e.TgZ(8,"span",8),e._uU(9,"Back to courses"),e.qZA()()(),e.YNc(10,me,3,7,"ng-container",9),e.ALo(11,"nostrFindByKey"),e.TgZ(12,"div",10),e._uU(13),e.qZA(),e.TgZ(14,"div",11),e._uU(15),e.qZA(),e.TgZ(16,"div",12),e._UZ(17,"mat-icon",13),e.TgZ(18,"div",14),e._uU(19),e.qZA()()(),e.TgZ(20,"div",15)(21,"ol"),e.YNc(22,ye,13,13,"ng-container",16),e.qZA()()(),e.TgZ(23,"mat-drawer-content",17)(24,"div",18)(25,"a",19),e._UZ(26,"mat-icon",20),e.qZA(),e.TgZ(27,"h2",21),e._uU(28),e.qZA()(),e._UZ(29,"mat-progress-bar",22),e.TgZ(30,"div",23)(31,"mat-tab-group",24,25),e.YNc(33,Ze,3,0,"ng-container",16),e.qZA(),e.TgZ(34,"div",26)(35,"div",27)(36,"button",28),e.NdJ("click",function(){return t.goToPreviousStep()}),e.TgZ(37,"span",6),e._UZ(38,"mat-icon",29),e.TgZ(39,"span",30),e._uU(40,"Prev"),e.qZA()()(),e.TgZ(41,"div",31)(42,"span"),e._uU(43),e.qZA(),e.TgZ(44,"span",32),e._uU(45,"/"),e.qZA(),e.TgZ(46,"span"),e._uU(47),e.qZA()(),e.TgZ(48,"button",28),e.NdJ("click",function(){return t.goToNextStep()}),e.TgZ(49,"span",6)(50,"span",33),e._uU(51,"Next"),e.qZA(),e._UZ(52,"mat-icon",34),e.qZA()()()()(),e.TgZ(53,"div",35)(54,"button",36),e.NdJ("click",function(){e.CHM(s);const c=e.MAs(3);return e.KtG(c.toggle())}),e._UZ(55,"mat-icon",20),e.qZA(),e.TgZ(56,"div",37)(57,"span"),e._uU(58),e.qZA(),e.TgZ(59,"span",32),e._uU(60,"/"),e.qZA(),e.TgZ(61,"span"),e._uU(62),e.qZA()(),e._UZ(63,"mat-progress-bar",38),e.TgZ(64,"button",39),e.NdJ("click",function(){return t.goToPreviousStep()}),e._UZ(65,"mat-icon",20),e.qZA(),e.TgZ(66,"button",40),e.NdJ("click",function(){return t.goToNextStep()}),e._UZ(67,"mat-icon",20),e.qZA()()()()()}2&n&&(e.xp6(2),e.Q6J("autoFocus",!1)("mode",t.drawerMode)("opened",t.drawerOpened),e.xp6(3),e.Q6J("routerLink",e.DdM(35,N)),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:arrow-sm-left"),e.xp6(3),e.Q6J("ngIf",e.Dn7(11,31,t.course.category,"slug",t.categories)),e.xp6(3),e.Oqu(t.course.title),e.xp6(2),e.Oqu(t.course.description),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:clock"),e.xp6(2),e.hij("",t.course.duration," minutes"),e.xp6(3),e.Q6J("ngForOf",t.course.steps)("ngForTrackBy",t.trackByFn),e.xp6(3),e.Q6J("routerLink",e.DdM(36,N)),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:arrow-sm-left"),e.xp6(2),e.hij(" ",t.course.title," "),e.xp6(1),e.Q6J("value",100*(t.currentStep+1)/t.course.totalSteps),e.xp6(2),e.Q6J("animationDuration","200"),e.xp6(2),e.Q6J("ngForOf",t.course.steps)("ngForTrackBy",t.trackByFn),e.xp6(3),e.Q6J("color","primary"),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-left"),e.xp6(5),e.Oqu(t.currentStep+1),e.xp6(4),e.Oqu(t.course.totalSteps),e.xp6(1),e.Q6J("color","primary"),e.xp6(4),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-right"),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:view-list"),e.xp6(3),e.Oqu(t.currentStep+1),e.xp6(4),e.Oqu(t.course.totalSteps),e.xp6(1),e.Q6J("value",100*(t.currentStep+1)/t.course.totalSteps),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-left"),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-right"))},dependencies:[g.rH,_.lW,_.o6,_.RK,T.Hw,C.pW,F.PQ,Z.jA,Z.kh,Z.LW,l.mk,l.sg,l.O5,b.Vc,b.uX,b.SP,L.q],encapsulation:2,changeDetection:0});var be=r(262);class m{constructor(n){this._academyService=n}resolve(n,t){return this._academyService.getCategories()}}m.\u0275fac=function(n){return new(n||m)(e.LFG(a))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});class u{constructor(n){this._academyService=n}resolve(n,t){return this._academyService.getCourses()}}u.\u0275fac=function(n){return new(n||u)(e.LFG(a))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"});class d{constructor(n,t){this._router=n,this._academyService=t}resolve(n,t){return this._academyService.getCourseById(n.paramMap.get("id")).pipe((0,be.K)(s=>{console.error(s);const i=t.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(i),(0,B._)(s)}))}}d.\u0275fac=function(n){return new(n||d)(e.LFG(g.F0),e.LFG(a))},d.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"});const Ae=[{path:"",component:x,resolve:{categories:m},children:[{path:"",pathMatch:"full",component:y,resolve:{courses:u}},{path:":id",component:v,resolve:{course:d}}]}];class f{}f.\u0275fac=function(n){return new(n||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({imports:[g.Bz.forChild(Ae),_.ot,A.lN,T.Ps,w.c,C.Cv,Q.LD,Z.SJ,S.rP,J.AV,D.i,q.m,b.Nh]})}}]);