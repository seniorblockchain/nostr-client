"use strict";(self.webpackChunknostr=self.webpackChunknostr||[]).push([[2917],{2917:(M,f,o)=>{o.r(f),o.d(f,{AuthSignInModule:()=>a});var g=o(1390),c=o(4859),p=o(6709),m=o(9549),h=o(7392),x=o(284),v=o(1572),Z=o(1826),I=o(9818),y=o(4466),i=o(4006),A=o(1503),t=o(4650),w=o(8951),U=o(3562),T=o(6895);const b=["signInNgForm"];function J(e,n){if(1&e&&(t.TgZ(0,"nostr-alert",8),t._uU(1),t.qZA()),2&e){const r=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",r.alert.type)("@shake","error"===r.alert.type),t.xp6(1),t.hij(" ",r.alert.message," ")}}function C(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Email address is required "),t.qZA())}function S(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function Q(e,n){1&e&&t._UZ(0,"mat-icon",29),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function F(e,n){1&e&&t._UZ(0,"mat-icon",29),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function N(e,n){1&e&&(t.TgZ(0,"span"),t._uU(1," Sign in "),t.qZA())}function q(e,n){1&e&&t._UZ(0,"mat-progress-spinner",48),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const _=function(){return["/sign-up"]},j=function(){return["/forgot-password"]};class l{constructor(n,r,s,d){this._activatedRoute=n,this._authService=r,this._formBuilder=s,this._router=d,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({email:["milad.raeisi@company.com",[i.kI.required,i.kI.email]],password:["admin",i.kI.required],rememberMe:[""]})}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe(()=>{const n=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(n)},n=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0}))}}l.\u0275fac=function(n){return new(n||l)(t.Y36(g.gz),t.Y36(w.e),t.Y36(i.QS),t.Y36(g.F0))},l.\u0275cmp=t.Xpm({type:l,selectors:[["auth-sign-in"]],viewQuery:function(n,r){if(1&n&&t.Gf(b,5),2&n){let s;t.iGM(s=t.CRH())&&(r.signInNgForm=s.first)}},decls:82,vars:24,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8",3,"appearance","showIcon","type"],["class","mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-center","justify-between","w-full","mt-1.5"],[1,"-ml-2",3,"color","formControlName"],[1,"text-md","font-medium","text-primary-500","hover:underline",3,"routerLink"],["mat-flat-button","",1,"nostr-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"flex","items-center","mt-8"],[1,"flex-auto","mt-px","border-t"],[1,"mx-2","text-secondary"],[1,"flex","items-center","mt-8","space-x-4"],["type","button","mat-stroked-button","",1,"flex-auto"],[1,"icon-size-5",3,"svgIcon"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[3,"diameter","mode"]],template:function(n,r){if(1&n){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Sign in"),t.qZA(),t.TgZ(7,"div",6)(8,"div"),t._uU(9,"Don't have an account?"),t.qZA(),t.TgZ(10,"a",7),t._uU(11,"Sign up "),t.qZA()(),t.TgZ(12,"nostr-alert",8),t._uU(13," You are browsing "),t.TgZ(14,"strong"),t._uU(15,"Nostr Demo"),t.qZA(),t._uU(16,'. Click on the "Sign in" button to access the Demo and Documentation. '),t.qZA(),t.YNc(17,J,2,5,"nostr-alert",9),t.TgZ(18,"form",10,11)(20,"mat-form-field",12)(21,"mat-label"),t._uU(22,"Email address"),t.qZA(),t._UZ(23,"input",13),t.YNc(24,C,2,0,"mat-error",14),t.YNc(25,S,2,0,"mat-error",14),t.qZA(),t.TgZ(26,"mat-form-field",12)(27,"mat-label"),t._uU(28,"Password"),t.qZA(),t._UZ(29,"input",15,16),t.TgZ(31,"button",17),t.NdJ("click",function(){t.CHM(s);const u=t.MAs(30);return t.KtG(u.type="password"===u.type?"text":"password")}),t.YNc(32,Q,1,1,"mat-icon",18),t.YNc(33,F,1,1,"mat-icon",18),t.qZA(),t.TgZ(34,"mat-error"),t._uU(35," Password is required "),t.qZA()(),t.TgZ(36,"div",19)(37,"mat-checkbox",20),t._uU(38," Remember me "),t.qZA(),t.TgZ(39,"a",21),t._uU(40,"Forgot password? "),t.qZA()(),t.TgZ(41,"button",22),t.NdJ("click",function(){return r.signIn()}),t.YNc(42,N,2,0,"span",14),t.YNc(43,q,1,2,"mat-progress-spinner",23),t.qZA(),t.TgZ(44,"div",24),t._UZ(45,"div",25),t.TgZ(46,"div",26),t._uU(47,"Or continue with"),t.qZA(),t._UZ(48,"div",25),t.qZA(),t.TgZ(49,"div",27)(50,"button",28),t._UZ(51,"mat-icon",29),t.qZA(),t.TgZ(52,"button",28),t._UZ(53,"mat-icon",29),t.qZA(),t.TgZ(54,"button",28),t._UZ(55,"mat-icon",29),t.qZA()()()()(),t.TgZ(56,"div",30),t.O4$(),t.TgZ(57,"svg",31)(58,"g",32),t._UZ(59,"circle",33)(60,"circle",34),t.qZA()(),t.TgZ(61,"svg",35)(62,"defs")(63,"pattern",36),t._UZ(64,"rect",37),t.qZA()(),t._UZ(65,"rect",38),t.qZA(),t.kcU(),t.TgZ(66,"div",39)(67,"div",40)(68,"div"),t._uU(69,"Welcome to"),t.qZA(),t.TgZ(70,"div"),t._uU(71,"our community"),t.qZA()(),t.TgZ(72,"div",41),t._uU(73," Nostr helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),t.qZA(),t.TgZ(74,"div",24)(75,"div",42),t._UZ(76,"img",43)(77,"img",44)(78,"img",45)(79,"img",46),t.qZA(),t.TgZ(80,"div",47),t._uU(81,"More than 17k people joined us, it's your turn"),t.qZA()()()()()}if(2&n){const s=t.MAs(30);t.xp6(10),t.Q6J("routerLink",t.DdM(22,_)),t.xp6(2),t.Q6J("appearance","outline")("showIcon",!1)("type","info"),t.xp6(5),t.Q6J("ngIf",r.showAlert),t.xp6(1),t.Q6J("formGroup",r.signInForm),t.xp6(5),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",r.signInForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",r.signInForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===s.type),t.xp6(1),t.Q6J("ngIf","text"===s.type),t.xp6(4),t.Q6J("color","primary")("formControlName","rememberMe"),t.xp6(2),t.Q6J("routerLink",t.DdM(23,j)),t.xp6(2),t.Q6J("color","primary")("disabled",r.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",!r.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",r.signInForm.disabled),t.xp6(8),t.Q6J("svgIcon","feather:facebook"),t.xp6(2),t.Q6J("svgIcon","feather:twitter"),t.xp6(2),t.Q6J("svgIcon","feather:github")}},dependencies:[g.rH,c.lW,c.RK,p.oG,m.KE,m.hX,m.TO,m.R9,h.Hw,x.Nt,v.Ou,U.f,T.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],encapsulation:2,data:{animation:A.U}});const k=[{path:"",component:l}];class a{}a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.Bz.forChild(k),c.ot,p.p9,m.lN,h.Ps,x.c,v.Cq,Z.y,I.kl,y.m]})}}]);