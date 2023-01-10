"use strict";(self.webpackChunknostr=self.webpackChunknostr||[]).push([[7154],{7154:(j,u,o)=>{o.r(u),o.d(u,{IconsModule:()=>r,routes:()=>I});var p=o(4006),Z=o(1390),g=o(9549),d=o(7392),x=o(284),v=o(4385),T=o(2997),A=o(4466),h=o(1135),y=o(7579),C=o(2722),U=o(9841),J=o(4004),n=o(4650),Q=o(8505),z=o(529);class s{constructor(t){this._httpClient=t,this._icons=new h.X(null)}get icons(){return this._icons.asObservable()}getIcons(t){return this._httpClient.get(t="api"+t).pipe((0,Q.b)(e=>{this._icons.next(e)}))}}s.\u0275fac=function(t){return new(t||s)(n.LFG(z.eN))},s.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"});var S=o(3238),w=o(2973),f=o(6895);function b(i,t){if(1&i&&(n.ynx(0),n.TgZ(1,"h1"),n._uU(2),n.qZA(),n.BQk()),2&i){const e=t.ngIf;n.xp6(2),n.Oqu(e.name)}}function O(i,t){if(1&i&&(n.ynx(0),n._UZ(1,"textarea",20),n.BQk()),2&i){const e=n.oxw();n.xp6(1),n.Q6J("code",'<mat-icon svgIcon="'+e.calcSvgIconAttr()+'"></mat-icon>')}}function $(i,t){if(1&i){const e=n.EpF();n.ynx(0),n.TgZ(1,"div",22),n.NdJ("click",function(){const M=n.CHM(e).$implicit,N=n.oxw().ngIf,L=n.oxw();return n.KtG(L.selectIcon(N.namespace,M))}),n.TgZ(2,"div",23),n._UZ(3,"mat-icon",24),n.qZA(),n.TgZ(4,"div",25),n._uU(5),n.qZA()(),n.BQk()}if(2&i){const e=t.$implicit,a=n.oxw().ngIf,c=n.oxw();n.xp6(1),n.ekj("border-primary",c.selectedIcon[1]===e),n.xp6(2),n.Q6J("ngClass",c.iconSize)("svgIcon",a.namespace+":"+e),n.xp6(2),n.Oqu(e)}}function F(i,t){if(1&i&&(n.ynx(0),n.YNc(1,$,6,5,"ng-container",21),n.BQk()),2&i){const e=t.ngIf;n.xp6(1),n.Q6J("ngForOf",e.list)}}class m{constructor(t){this._iconsService=t,this.filterValue$=new h.X(""),this.iconSize="icon-size-8",this._unsubscribeAll=new y.x}ngOnInit(){this.icons$=this._iconsService.icons,this._iconsService.icons.pipe((0,C.R)(this._unsubscribeAll)).subscribe(t=>{this.iconSize=t.grid,this.selectedIcon=[t.namespace,t.list[0]]}),this.filteredIcons$=(0,U.a)([this.icons$,this.filterValue$]).pipe((0,J.U)(([t,e])=>{const a=t.list.filter(c=>c.toLowerCase().includes(e.toLowerCase()));return{...t,list:a}}))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}filterIcons(t){this.filterValue$.next(t.target.value)}selectIcon(t,e){this.selectedIcon=[t,e]}calcSvgIconAttr(){return this.selectedIcon?""===this.selectedIcon[0]?this.selectedIcon[1]:this.selectedIcon.join(":"):""}}m.\u0275fac=function(t){return new(t||m)(n.Y36(s))},m.\u0275cmp=n.Xpm({type:m,selectors:[["icons"]],decls:49,vars:19,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[4,"ngIf"],[1,"flex-auto","p-6","sm:p-10"],[1,"prose","prose-sm","max-w-5xl"],[1,"flex","my-6","xs:flex-col"],[1,"flex-auto"],["matInput","",3,"input"],[1,"min-w-40","ml-8","xs:ml-0"],[3,"ngModel","ngModelChange"],[3,"value"],[1,"flex","flex-wrap","-mx-4"],["nostr-highlight","","lang","html",3,"code"],[4,"ngFor","ngForOf"],[1,"flex","flex-col","items-center","justify-center","m-4","p-4","min-w-36","max-w-36","min-h-30","max-h-30","rounded","border-2","cursor-pointer","bg-card",3,"click"],[1,"flex","items-center","justify-center","mb-3"],[3,"ngClass","svgIcon"],[1,"text-sm","text-center","break-all","text-secondary"]],template:function(t,e){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),n._uU(6,"User Interface"),n.qZA()(),n.TgZ(7,"div",5),n._UZ(8,"mat-icon",6),n.TgZ(9,"a",7),n._uU(10,"Icons"),n.qZA()()(),n.TgZ(11,"div",8)(12,"h2",9),n.YNc(13,b,3,1,"ng-container",10),n.ALo(14,"async"),n.qZA()()()(),n.TgZ(15,"div",11)(16,"div",12)(17,"h2"),n._uU(18,"Usage"),n.qZA(),n.YNc(19,O,2,1,"ng-container",10),n.ALo(20,"async"),n.TgZ(21,"h2"),n._uU(22,"Icons"),n.qZA(),n.TgZ(23,"div",13)(24,"mat-form-field",14)(25,"mat-label"),n._uU(26,"Search an icon"),n.qZA(),n.TgZ(27,"input",15),n.NdJ("input",function(c){return e.filterIcons(c)}),n.qZA()(),n.TgZ(28,"mat-form-field",16)(29,"mat-label"),n._uU(30,"Icon size"),n.qZA(),n.TgZ(31,"mat-select",17),n.NdJ("ngModelChange",function(c){return e.iconSize=c}),n.TgZ(32,"mat-option",18),n._uU(33,"16"),n.qZA(),n.TgZ(34,"mat-option",18),n._uU(35,"20"),n.qZA(),n.TgZ(36,"mat-option",18),n._uU(37,"24"),n.qZA(),n.TgZ(38,"mat-option",18),n._uU(39,"32"),n.qZA(),n.TgZ(40,"mat-option",18),n._uU(41,"40"),n.qZA(),n.TgZ(42,"mat-option",18),n._uU(43,"48"),n.qZA(),n.TgZ(44,"mat-option",18),n._uU(45,"64"),n.qZA()()()(),n.TgZ(46,"div",19),n.YNc(47,F,2,1,"ng-container",10),n.ALo(48,"async"),n.qZA()()()()),2&t&&(n.xp6(8),n.Q6J("svgIcon","heroicons_solid:chevron-right"),n.xp6(5),n.Q6J("ngIf",n.lcZ(14,13,e.icons$)),n.xp6(6),n.Q6J("ngIf",n.lcZ(20,15,e.filteredIcons$)),n.xp6(8),n.uIk("autocomplete","off"),n.xp6(4),n.Q6J("ngModel",e.iconSize),n.xp6(1),n.Q6J("value","icon-size-4"),n.xp6(2),n.Q6J("value","icon-size-5"),n.xp6(2),n.Q6J("value","icon-size-6"),n.xp6(2),n.Q6J("value","icon-size-8"),n.xp6(2),n.Q6J("value","icon-size-10"),n.xp6(2),n.Q6J("value","icon-size-12"),n.xp6(2),n.Q6J("value","icon-size-16"),n.xp6(3),n.Q6J("ngIf",n.lcZ(48,17,e.filteredIcons$)))},dependencies:[p.JJ,g.KE,g.hX,d.Hw,x.Nt,v.gD,S.ey,w.X,f.mk,f.sg,f.O5,p.On,f.Ov],encapsulation:2});class l{constructor(t){this._iconsService=t}resolve(t,e){return this._iconsService.getIcons(e.url)}}l.\u0275fac=function(t){return new(t||l)(n.LFG(s))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"});const I=[{path:"",pathMatch:"full",redirectTo:"material-twotone"},{path:"**",component:m,resolve:{icons:l}}];class r{}r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[p.UX,Z.Bz.forChild(I),g.lN,d.Ps,x.c,v.LD,T.KO,A.m]})}}]);