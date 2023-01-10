"use strict";(self.webpackChunknostr=self.webpackChunknostr||[]).push([[9994],{9994:(P,v,r)=>{r.r(v),r.d(v,{CryptoModule:()=>d});var C=r(1390),f=r(4859),T=r(811),l=r(9549),Z=r(7392),A=r(284),U=r(5655),g=r(4385),m=r(3267),w=r(6308),_=r(671),J=r(3848),b=r(6205),Q=r(4466),q=r(7579),y=r(2722),O=r(1837),t=r(4650),M=r(1135),L=r(8505),S=r(529);class s{constructor(o){this._httpClient=o,this._data=new M.X(null)}get data$(){return this._data.asObservable()}getData(){return this._httpClient.get("api/dashboards/crypto").pipe((0,L.b)(o=>{this._data.next(o)}))}}s.\u0275fac=function(o){return new(o||s)(t.LFG(S.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"});var I=r(9039),B=r(3238),c=r(6895),h=r(4006);const D=["btcChartComponent"],x=function(n,o){return{"text-green-500":n,"text-red-500":o}},k=function(){return["#48BB78"]},F=function(){return["#F56565"]};function Y(n,o){if(1&n&&(t.TgZ(0,"div",42)(1,"div",43)(2,"div",44)(3,"div",45),t._uU(4),t.qZA(),t.TgZ(5,"div",46),t._uU(6),t.qZA()(),t.TgZ(7,"div",47)(8,"div",48),t._uU(9),t.ALo(10,"currency"),t.qZA(),t._UZ(11,"mat-icon",49),t.TgZ(12,"div",50),t._uU(13),t.qZA()()(),t._UZ(14,"apx-chart",51),t.qZA()),2&n){const e=o.$implicit,a=t.oxw();t.xp6(4),t.Oqu(e.title),t.xp6(2),t.hij("(",e.iso,")"),t.xp6(3),t.hij(" ",t.gM2(10,13,e.amount,"USD","symbol","1.2-4")," "),t.xp6(2),t.Q6J("ngClass",t.WLB(18,x,"up"===e.trend.dir,"down"===e.trend.dir))("svgIcon","up"===e.trend.dir?"heroicons_solid:arrow-narrow-up":"heroicons_solid:arrow-narrow-down"),t.xp6(1),t.Q6J("ngClass",t.WLB(21,x,"up"===e.trend.dir,"down"===e.trend.dir)),t.xp6(1),t.hij(" ",e.trend.amount,"% "),t.xp6(1),t.Q6J("chart",a.watchlistChartOptions.chart)("colors","up"===e.trend.dir?t.DdM(24,k):t.DdM(25,F))("series",e.series)("stroke",a.watchlistChartOptions.stroke)("tooltip",a.watchlistChartOptions.tooltip)("xaxis",a.watchlistChartOptions.xaxis)}}function N(n,o){1&n&&(t.TgZ(0,"span",60),t._uU(1," $ "),t.qZA())}function j(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"span",18),t._uU(2,"It will cost:"),t.qZA(),t.TgZ(3,"span",19),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.BQk()),2&n){t.oxw();const e=t.MAs(5),a=t.oxw(),i=t.MAs(24);t.xp6(4),t.hij(" ",t.gM2(5,1,e.value*a.data.prices[i.value],"USD","symbol","1.2-4")," ")}}function R(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"span",18),t._uU(2,"You will receive:"),t.qZA(),t.TgZ(3,"span",19),t._uU(4),t.ALo(5,"number"),t.ALo(6,"uppercase"),t.qZA(),t.BQk()),2&n){t.oxw();const e=t.MAs(5),a=t.oxw(),i=t.MAs(24);t.xp6(4),t.AsE(" ",t.xi3(5,2,e.value/a.data.prices[i.value],"1.2-6")," ",t.lcZ(6,5,i.value)," ")}}function W(n,o){if(1&n&&(t.TgZ(0,"form",52)(1,"mat-form-field",12)(2,"mat-label"),t._uU(3,"Amount"),t.qZA(),t._UZ(4,"input",53,54),t.TgZ(6,"mat-select",55,56)(8,"mat-option",10),t._uU(9),t.ALo(10,"uppercase"),t.qZA(),t.TgZ(11,"mat-option",10),t._uU(12,"USD"),t.qZA()(),t.YNc(13,N,2,0,"span",57),t.TgZ(14,"mat-hint",14),t.YNc(15,j,6,6,"ng-container",58),t.YNc(16,R,7,7,"ng-container",58),t.qZA()(),t.TgZ(17,"button",59),t._uU(18," BUY "),t.qZA()()),2&n){const e=t.MAs(7);t.oxw();const a=t.MAs(24);t.xp6(6),t.Q6J("value","coin"),t.xp6(2),t.Q6J("value","coin"),t.xp6(1),t.Oqu(t.lcZ(10,8,a.value)),t.xp6(2),t.Q6J("value","usd"),t.xp6(2),t.Q6J("ngIf","usd"===e.value),t.xp6(2),t.Q6J("ngIf","coin"===e.value),t.xp6(1),t.Q6J("ngIf","usd"===e.value),t.xp6(1),t.Q6J("color","primary")}}function H(n,o){1&n&&(t.TgZ(0,"span",60),t._uU(1," $ "),t.qZA())}function $(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"span",18),t._uU(2,"You will receive:"),t.qZA(),t.TgZ(3,"span",19),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.BQk()),2&n){t.oxw();const e=t.MAs(5),a=t.oxw(),i=t.MAs(24);t.xp6(4),t.hij(" ",t.gM2(5,1,e.value*a.data.prices[i.value],"USD","symbol","1.2-4")," ")}}function z(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"span",18),t._uU(2,"You will sell:"),t.qZA(),t.TgZ(3,"span",19),t._uU(4),t.ALo(5,"number"),t.ALo(6,"uppercase"),t.qZA(),t.BQk()),2&n){t.oxw();const e=t.MAs(5),a=t.oxw(),i=t.MAs(24);t.xp6(4),t.AsE(" ",t.xi3(5,2,e.value/a.data.prices[i.value],"1.2-6")," ",t.lcZ(6,5,i.value)," ")}}function E(n,o){if(1&n&&(t.TgZ(0,"form",52)(1,"mat-form-field",12)(2,"mat-label"),t._uU(3,"Amount"),t.qZA(),t._UZ(4,"input",53,61),t.TgZ(6,"mat-select",55,62)(8,"mat-option",10),t._uU(9),t.ALo(10,"uppercase"),t.qZA(),t.TgZ(11,"mat-option",10),t._uU(12,"USD"),t.qZA()(),t.YNc(13,H,2,0,"span",57),t.TgZ(14,"mat-hint",14),t.YNc(15,$,6,6,"ng-container",58),t.YNc(16,z,7,7,"ng-container",58),t.qZA()(),t.TgZ(17,"button",59),t._uU(18," SELL "),t.qZA()()),2&n){const e=t.MAs(7);t.oxw();const a=t.MAs(24);t.xp6(6),t.Q6J("value","coin"),t.xp6(2),t.Q6J("value","coin"),t.xp6(1),t.Oqu(t.lcZ(10,8,a.value)),t.xp6(2),t.Q6J("value","usd"),t.xp6(2),t.Q6J("ngIf","usd"===e.value),t.xp6(2),t.Q6J("ngIf","coin"===e.value),t.xp6(1),t.Q6J("ngIf","usd"===e.value),t.xp6(1),t.Q6J("color","primary")}}class p{constructor(o,e,a){this._cryptoService=o,this._changeDetectorRef=e,this._nostrMediaWatcherService=a,this.btcOptions={},this.drawerMode="side",this.drawerOpened=!0,this.watchlistChartOptions={},this._unsubscribeAll=new q.x}ngOnInit(){this._nostrMediaWatcherService.onMediaChange$.pipe((0,y.R)(this._unsubscribeAll)).subscribe(({matchingAliases:o})=>{o.includes("lg")?(this.drawerMode="side",this.drawerOpened=!0):(this.drawerMode="over",this.drawerOpened=!1),this._changeDetectorRef.markForCheck()}),this._cryptoService.data$.pipe((0,y.R)(this._unsubscribeAll)).subscribe(o=>{this.data=o,this._prepareChartData()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}_prepareChartData(){this.btcOptions={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"line",toolbar:{show:!1},zoom:{enabled:!1}},colors:["#5A67D8"],dataLabels:{enabled:!1},grid:{borderColor:"var(--nostr-border)",position:"back",show:!0,strokeDashArray:6,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},legend:{show:!1},series:this.data.btc.price.series,stroke:{width:2,curve:"straight"},tooltip:{shared:!0,theme:"dark",y:{formatter:o=>"$"+o.toFixed(2)}},xaxis:{type:"numeric",crosshairs:{show:!0,position:"back",fill:{type:"color",color:"var(--nostr-border)"},width:3,stroke:{dashArray:0,width:0},opacity:.9},tickAmount:8,axisTicks:{show:!0,color:"var(--nostr-border)"},axisBorder:{show:!1},tooltip:{enabled:!1},labels:{show:!0,trim:!1,rotate:0,minHeight:40,hideOverlappingLabels:!0,formatter:o=>O.ou.now().minus({minutes:Math.abs(parseInt(o,10))}).toFormat("HH:mm"),style:{colors:"currentColor"}}},yaxis:{axisTicks:{show:!0,color:"var(--nostr-border)"},axisBorder:{show:!1},forceNiceScale:!0,labels:{minWidth:40,formatter:o=>"$"+o.toFixed(0),style:{colors:"currentColor"}}}},this.watchlistChartOptions={chart:{animations:{enabled:!1},width:"100%",height:"100%",type:"line",sparkline:{enabled:!0}},colors:["#A0AEC0"],stroke:{width:2,curve:"smooth"},tooltip:{enabled:!1},xaxis:{type:"category"}}}}p.\u0275fac=function(o){return new(o||p)(t.Y36(s),t.Y36(t.sBO),t.Y36(I.m))},p.\u0275cmp=t.Xpm({type:p,selectors:[["crypto"]],viewQuery:function(o,e){if(1&o&&t.Gf(D,5),2&o){let a;t.iGM(a=t.CRH())&&(e.btcChartComponent=a.first)}},decls:101,vars:71,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full"],[1,"w-80",3,"autoFocus","mode","opened"],["matDrawer",""],[1,"flex","flex-col","flex-auto","h-full","dark:bg-default"],[1,"flex","flex-col","flex-0"],["class","flex flex-0 items-center p-5 border-b",4,"ngFor","ngForOf"],[1,"flex","flex-col","flex-auto","shrink-0","pt-6","bg-gray-50","dark:bg-transparent"],[1,"flex","flex-col","px-6","pb-2"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],[3,"value"],["buySellSelect","matSelect"],[1,"w-full"],["walletSelector","matSelect"],[1,"flex","items-center"],[1,"mx-1","text-hint"],[1,"flex","items-center","font-mono"],[1,"ml-1"],[1,"mr-1"],[1,"font-mono","font-medium","text-normal"],["class","flex flex-col px-6",4,"ngIf"],[1,"flex","flex-col"],[1,"flex","flex-col","flex-auto","min-h-full","bg-card","dark:bg-default"],[1,"flex","flex-wrap","items-center","pl-4","pr-6","py-3","md:pl-6","border-b"],["mat-icon-button","",1,"mr-6","lg:hidden",3,"click"],[3,"svgIcon"],[1,"flex","flex-col","flex-auto","my-3","mr-6"],[1,"font-medium","text-2xl","text-secondary","mr-2"],[1,"font-medium","text-lg","text-hint","tracking-wider"],[1,"flex","items-end","mt-1"],[1,"mr-2","font-mono","text-3xl","leading-none","tracking-tight"],[1,"text-green-500","icon-size-5","mr-0.5","mb-px",3,"ngClass","svgIcon"],[1,"font-mono","font-medium","text-lg","leading-none","mb-px",3,"ngClass"],[1,"hidden","sm:flex","items-center","my-3"],[1,"p-4","leading-none","rounded-l-xl","border","border-r-0"],[1,"text-sm","font-medium","text-secondary"],[1,"mt-2","font-mono","text-xl"],[1,"p-4","leading-none","border","border-r-0"],[1,"p-4","leading-none","rounded-r-xl","border"],[1,"relative","flex","flex-auto","bg-gray-50","dark:bg-transparent"],[1,"relative","w-full","h-160","md:absolute","md:inset-0","md:h-auto","overflow-hidden",3,"chart","colors","dataLabels","grid","legend","series","stroke","tooltip","xaxis","yaxis"],["btcChartComponent",""],[1,"flex","flex-0","items-center","p-5","border-b"],[1,"flex","flex-col","flex-auto","pr-6"],[1,"flex","items-baseline"],[1,"mr-1","font-medium","text-md","text-secondary"],[1,"font-medium","text-sm","text-hint","uppercase","tracking-wider"],[1,"flex","items-end","mt-2"],[1,"min-w-20","font-mono","text-2xl","tracking-tighter","leading-none"],[1,"text-green-500","icon-size-3.5","mx-0.5","mb-px",3,"ngClass","svgIcon"],[1,"font-mono","font-medium","text-sm","leading-none","mb-px",3,"ngClass"],[1,"flex","flex-auto","items-center","h-10","overflow-hidden",3,"chart","colors","series","stroke","tooltip","xaxis"],[1,"flex","flex-col","px-6"],["matInput","","autocomplete","off"],["buyAmount",""],["matSuffix","",3,"value"],["buyType","matSelect"],["matPrefix","",4,"ngIf"],[4,"ngIf"],["mat-flat-button","",1,"mt-4","mb-8",3,"color"],["matPrefix",""],["sellAmount",""],["sellType","matSelect"]],template:function(o,e){if(1&o){const a=t.EpF();t.TgZ(0,"div",0)(1,"mat-drawer-container",1)(2,"mat-drawer",2,3)(4,"div",4)(5,"div",5),t.YNc(6,Y,15,26,"div",6),t.qZA(),t.TgZ(7,"div",7)(8,"div",8)(9,"mat-form-field")(10,"mat-label"),t._uU(11,"Action"),t.qZA(),t._UZ(12,"mat-icon",9),t.TgZ(13,"mat-select",10,11)(15,"mat-option",10),t._uU(16,"Buy"),t.qZA(),t.TgZ(17,"mat-option",10),t._uU(18,"Sell"),t.qZA()()()(),t.TgZ(19,"div",8)(20,"mat-form-field",12)(21,"mat-label"),t._uU(22,"Wallet"),t.qZA(),t.TgZ(23,"mat-select",10,13)(25,"mat-select-trigger")(26,"span",14)(27,"span"),t._uU(28),t.qZA(),t.TgZ(29,"span",15),t._uU(30,"-"),t.qZA(),t.TgZ(31,"span",16)(32,"span"),t._uU(33),t.qZA(),t.TgZ(34,"span",17),t._uU(35),t.ALo(36,"uppercase"),t.qZA()()()(),t.TgZ(37,"mat-option",10),t._uU(38,"Bitcoin"),t.qZA(),t.TgZ(39,"mat-option",10),t._uU(40,"Ethereum"),t.qZA(),t.TgZ(41,"mat-option",10),t._uU(42,"Bitcoin Cash"),t.qZA(),t.TgZ(43,"mat-option",10),t._uU(44,"XRP"),t.qZA()(),t.TgZ(45,"mat-hint",14)(46,"span",18),t._uU(47,"USD:"),t.qZA(),t.TgZ(48,"span",19),t._uU(49),t.ALo(50,"currency"),t.qZA()()()(),t.YNc(51,W,19,10,"form",20),t.YNc(52,E,19,10,"form",20),t.qZA()()(),t.TgZ(53,"mat-drawer-content",21)(54,"div",22)(55,"div",23)(56,"button",24),t.NdJ("click",function(){t.CHM(a);const G=t.MAs(3);return t.KtG(G.toggle())}),t._UZ(57,"mat-icon",25),t.qZA(),t.TgZ(58,"div",26)(59,"div",14)(60,"div",27),t._uU(61,"Bitcoin"),t.qZA(),t.TgZ(62,"div",28),t._uU(63,"(BTC)"),t.qZA()(),t.TgZ(64,"div",29)(65,"div",30),t._uU(66),t.ALo(67,"currency"),t.qZA(),t._UZ(68,"mat-icon",31),t.TgZ(69,"div",32),t._uU(70),t.qZA()()(),t.TgZ(71,"div",33)(72,"div",34)(73,"div",35),t._uU(74,"Market Cap"),t.qZA(),t.TgZ(75,"div",36),t._uU(76),t.ALo(77,"currency"),t.ALo(78,"number"),t.qZA()(),t.TgZ(79,"div",37)(80,"div",35),t._uU(81,"Volume"),t.qZA(),t.TgZ(82,"div",36),t._uU(83),t.ALo(84,"currency"),t.ALo(85,"number"),t.qZA()(),t.TgZ(86,"div",37)(87,"div",35),t._uU(88,"Supply"),t.qZA(),t.TgZ(89,"div",36),t._uU(90),t.ALo(91,"number"),t.qZA()(),t.TgZ(92,"div",38)(93,"div",35),t._uU(94,"All Time High"),t.qZA(),t.TgZ(95,"div",36),t._uU(96),t.ALo(97,"currency"),t.qZA()()()(),t.TgZ(98,"div",39),t._UZ(99,"apx-chart",40,41),t.qZA()()()()()}if(2&o){const a=t.MAs(14),i=t.MAs(24);t.xp6(2),t.Q6J("autoFocus",!1)("mode",e.drawerMode)("opened",e.drawerOpened),t.xp6(4),t.Q6J("ngForOf",e.data.watchlist),t.xp6(6),t.Q6J("svgIcon","buy"===a.value?"heroicons_solid:download":"heroicons_solid:upload"),t.xp6(1),t.Q6J("value","buy"),t.xp6(2),t.Q6J("value","buy"),t.xp6(2),t.Q6J("value","sell"),t.xp6(6),t.Q6J("value","btc"),t.xp6(5),t.Oqu(i.triggerValue),t.xp6(5),t.Oqu(e.data.wallets[i.value]),t.xp6(2),t.Oqu(t.lcZ(36,39,i.value)),t.xp6(2),t.Q6J("value","btc"),t.xp6(2),t.Q6J("value","eth"),t.xp6(2),t.Q6J("value","bch"),t.xp6(2),t.Q6J("value","xrp"),t.xp6(6),t.hij(" ",t.xi3(50,41,e.data.wallets[i.value]*e.data.prices[i.value],"USD")," "),t.xp6(2),t.Q6J("ngIf","buy"===a.value),t.xp6(1),t.Q6J("ngIf","sell"===a.value),t.xp6(5),t.Q6J("svgIcon","heroicons_outline:menu"),t.xp6(9),t.Oqu(t.gM2(67,44,e.data.btc.amount,"USD","symbol","1.2-2")),t.xp6(2),t.Q6J("ngClass",t.WLB(65,x,"up"===e.data.btc.trend.dir,"down"===e.data.btc.trend.dir))("svgIcon","up"===e.data.btc.trend.dir?"heroicons_solid:arrow-narrow-up":"heroicons_solid:arrow-narrow-down"),t.xp6(1),t.Q6J("ngClass",t.WLB(68,x,"up"===e.data.btc.trend.dir,"down"===e.data.btc.trend.dir)),t.xp6(1),t.hij(" ",e.data.btc.trend.amount,"% "),t.xp6(6),t.hij("",t.lcZ(77,49,t.xi3(78,51,e.data.btc.marketCap/1e9,"1.0-2")),"B"),t.xp6(7),t.hij("",t.lcZ(84,54,t.xi3(85,56,e.data.btc.volume/1e9,"1.0-2")),"B"),t.xp6(7),t.hij("",t.xi3(91,59,e.data.btc.supply/1e6,"1.0-2"),"M"),t.xp6(6),t.Oqu(t.xi3(97,62,e.data.btc.allTimeHigh,"USD")),t.xp6(3),t.Q6J("chart",e.btcOptions.chart)("colors",e.btcOptions.colors)("dataLabels",e.btcOptions.dataLabels)("grid",e.btcOptions.grid)("legend",e.btcOptions.legend)("series",e.btcOptions.series)("stroke",e.btcOptions.stroke)("tooltip",e.btcOptions.tooltip)("xaxis",e.btcOptions.xaxis)("yaxis",e.btcOptions.yaxis)}},dependencies:[f.lW,f.RK,l.KE,l.hX,l.bx,l.qo,l.R9,Z.Hw,A.Nt,g.gD,g.$L,B.ey,m.jA,m.kh,m.LW,b.x,c.mk,c.sg,c.O5,h._Y,h.JL,h.F,c.gd,c.JJ,c.H9],encapsulation:2,changeDetection:0});class u{constructor(o){this._cryptoService=o}resolve(o,e){return this._cryptoService.getData()}}u.\u0275fac=function(o){return new(o||u)(t.LFG(s))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"});const X=[{path:"",component:p,resolve:{data:u}}];class d{}d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[C.Bz.forChild(X),f.ot,T.vV,l.lN,Z.Ps,A.c,U.Tx,g.LD,m.SJ,w.JX,_.p0,J.Nh,b.X,Q.m]})}}]);