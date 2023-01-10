"use strict";(self.webpackChunknostr=self.webpackChunknostr||[]).push([[4385],{5017:(U,I,o)=>{o.d(I,{A8:()=>y,Ov:()=>T,Z9:()=>x,eX:()=>P,k:()=>A,o2:()=>u,yy:()=>k});var E=o(4033),S=o(7579),t=o(4650);class u{}function x(p){return p&&"function"==typeof p.connect&&!(p instanceof E.c)}class k{applyChanges(s,l,r,m,c){s.forEachOperation((g,C,M)=>{let f,h;if(null==g.previousIndex){const D=r(g,C,M);f=l.createEmbeddedView(D.templateRef,D.context,D.index),h=1}else null==M?(l.remove(C),h=3):(f=l.get(C),l.move(f,M),h=2);c&&c({context:f?.context,operation:h,record:g})})}detach(){}}class P{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(s,l,r,m,c){s.forEachOperation((g,C,M)=>{let f,h;null==g.previousIndex?(f=this._insertView(()=>r(g,C,M),M,l,m(g)),h=f?1:0):null==M?(this._detachAndCacheView(C,l),h=3):(f=this._moveView(C,M,l,m(g)),h=2),c&&c({context:f?.context,operation:h,record:g})})}detach(){for(const s of this._viewCache)s.destroy();this._viewCache=[]}_insertView(s,l,r,m){const c=this._insertViewFromCache(l,r);if(c)return void(c.context.$implicit=m);const g=s();return r.createEmbeddedView(g.templateRef,g.context,g.index)}_detachAndCacheView(s,l){const r=l.detach(s);this._maybeCacheView(r,l)}_moveView(s,l,r,m){const c=r.get(s);return r.move(c,l),c.context.$implicit=m,c}_maybeCacheView(s,l){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(s);else{const r=l.indexOf(s);-1===r?s.destroy():l.remove(r)}}_insertViewFromCache(s,l){const r=this._viewCache.pop();return r&&l.insert(r,s),r||null}}class T{constructor(s=!1,l,r=!0,m){this._multiple=s,this._emitChanges=r,this.compareWith=m,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new S.x,l&&l.length&&(s?l.forEach(c=>this._markSelected(c)):this._markSelected(l[0]),this._selectedToEmit.length=0)}get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}select(...s){this._verifyValueAssignment(s),s.forEach(r=>this._markSelected(r));const l=this._hasQueuedChanges();return this._emitChangeEvent(),l}deselect(...s){this._verifyValueAssignment(s),s.forEach(r=>this._unmarkSelected(r));const l=this._hasQueuedChanges();return this._emitChangeEvent(),l}setSelection(...s){this._verifyValueAssignment(s);const l=this.selected,r=new Set(s);s.forEach(c=>this._markSelected(c)),l.filter(c=>!r.has(c)).forEach(c=>this._unmarkSelected(c));const m=this._hasQueuedChanges();return this._emitChangeEvent(),m}toggle(s){return this.isSelected(s)?this.deselect(s):this.select(s)}clear(s=!0){this._unmarkAll();const l=this._hasQueuedChanges();return s&&this._emitChangeEvent(),l}isSelected(s){if(this.compareWith){for(const l of this._selection)if(this.compareWith(l,s))return!0;return!1}return this._selection.has(s)}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(s){this._multiple&&this.selected&&this._selected.sort(s)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(s){this.isSelected(s)||(this._multiple||this._unmarkAll(),this.isSelected(s)||this._selection.add(s),this._emitChanges&&this._selectedToEmit.push(s))}_unmarkSelected(s){this.isSelected(s)&&(this._selection.delete(s),this._emitChanges&&this._deselectedToEmit.push(s))}_unmarkAll(){this.isEmpty()||this._selection.forEach(s=>this._unmarkSelected(s))}_verifyValueAssignment(s){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}}let y=(()=>{class p{constructor(){this._listeners=[]}notify(l,r){for(let m of this._listeners)m(l,r)}listen(l){return this._listeners.push(l),()=>{this._listeners=this._listeners.filter(r=>l!==r)}}ngOnDestroy(){this._listeners=[]}}return p.\u0275fac=function(l){return new(l||p)},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})();const A=new t.OlP("_ViewRepeater")},4385:(U,I,o)=>{o.d(I,{$L:()=>se,LD:()=>ae,gD:()=>ne});var E=o(8184),S=o(6895),t=o(4650),u=o(3238),x=o(9549),R=o(7376),k=o(2687),P=o(445),T=o(1281),V=o(5017),y=o(9521),A=o(4006),p=o(7579),s=o(9770),l=o(6451),r=o(8675),m=o(3900),c=o(5698),g=o(9300),C=o(4004),M=o(1884),f=o(2722),h=o(7340);const D=["trigger"],H=["panel"];function Y(a,d){if(1&a&&(t.TgZ(0,"span",10),t._uU(1),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Oqu(e.placeholder)}}function G(a,d){if(1&a&&(t.TgZ(0,"span",14),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Oqu(e.triggerValue)}}function z(a,d){1&a&&t.Hsn(0,0,["*ngSwitchCase","true"])}function Z(a,d){if(1&a&&(t.TgZ(0,"span",11),t.YNc(1,G,2,1,"span",12),t.YNc(2,z,1,0,"ng-content",13),t.qZA()),2&a){const e=t.oxw();t.Q6J("ngSwitch",!!e.customTrigger),t.xp6(2),t.Q6J("ngSwitchCase",!0)}}function N(a,d){if(1&a){const e=t.EpF();t.O4$(),t.kcU(),t.TgZ(0,"div",15,16),t.NdJ("@transformPanel.done",function(n){t.CHM(e);const _=t.oxw();return t.KtG(_._panelDoneAnimatingStream.next(n.toState))})("keydown",function(n){t.CHM(e);const _=t.oxw();return t.KtG(_._handleKeydown(n))}),t.Hsn(2,1),t.qZA()}if(2&a){const e=t.oxw();t.Gre("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ",e._getPanelTheme(),""),t.Q6J("ngClass",e.panelClass)("@transformPanel","showing"),t.uIk("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}const Q=[[["mat-select-trigger"]],"*"],j=["mat-select-trigger","*"],J={transformPanelWrap:(0,h.X$)("transformPanelWrap",[(0,h.eR)("* => void",(0,h.IO)("@transformPanel",[(0,h.pV)()],{optional:!0}))]),transformPanel:(0,h.X$)("transformPanel",[(0,h.SB)("void",(0,h.oB)({opacity:0,transform:"scale(1, 0.8)"})),(0,h.eR)("void => showing",(0,h.jt)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,h.oB)({opacity:1,transform:"scale(1, 1)"}))),(0,h.eR)("* => void",(0,h.jt)("100ms linear",(0,h.oB)({opacity:0})))])};let K=0;const F=new t.OlP("mat-select-scroll-strategy"),X=new t.OlP("MAT_SELECT_CONFIG"),q={provide:F,deps:[E.aV],useFactory:function $(a){return()=>a.scrollStrategies.reposition()}},W=new t.OlP("MatSelectTrigger");class ee{constructor(d,e){this.source=d,this.value=e}}const te=(0,u.Kr)((0,u.sb)((0,u.Id)((0,u.FD)(class{constructor(a,d,e,i,n){this._elementRef=a,this._defaultErrorStateMatcher=d,this._parentForm=e,this._parentFormGroup=i,this.ngControl=n,this.stateChanges=new p.x}}))));let ie=(()=>{class a extends te{constructor(e,i,n,_,O,w,v,le,re,oe,ce,he,de,L){super(O,_,v,le,oe),this._viewportRuler=e,this._changeDetectorRef=i,this._ngZone=n,this._dir=w,this._parentFormField=re,this._liveAnnouncer=de,this._defaultOptions=L,this._panelOpen=!1,this._compareWith=(b,B)=>b===B,this._uid="mat-select-"+K++,this._triggerAriaLabelledBy=null,this._destroy=new p.x,this._onChange=()=>{},this._onTouched=()=>{},this._valueId="mat-select-value-"+K++,this._panelDoneAnimatingStream=new p.x,this._overlayPanelClass=this._defaultOptions?.overlayPanelClass||"",this._focused=!1,this.controlType="mat-select",this._multiple=!1,this._disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1,this.ariaLabel="",this.optionSelectionChanges=(0,s.P)(()=>{const b=this.options;return b?b.changes.pipe((0,r.O)(b),(0,m.w)(()=>(0,l.T)(...b.map(B=>B.onSelectionChange)))):this._ngZone.onStable.pipe((0,c.q)(1),(0,m.w)(()=>this.optionSelectionChanges))}),this.openedChange=new t.vpe,this._openedStream=this.openedChange.pipe((0,g.h)(b=>b),(0,C.U)(()=>{})),this._closedStream=this.openedChange.pipe((0,g.h)(b=>!b),(0,C.U)(()=>{})),this.selectionChange=new t.vpe,this.valueChange=new t.vpe,this.ngControl&&(this.ngControl.valueAccessor=this),null!=L?.typeaheadDebounceInterval&&(this._typeaheadDebounceInterval=L.typeaheadDebounceInterval),this._scrollStrategyFactory=he,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(ce)||0,this.id=this.id}get focused(){return this._focused||this._panelOpen}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(A.kI.required)??!1}set required(e){this._required=(0,T.Ig)(e),this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._multiple=(0,T.Ig)(e)}get disableOptionCentering(){return this._disableOptionCentering}set disableOptionCentering(e){this._disableOptionCentering=(0,T.Ig)(e)}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}get typeaheadDebounceInterval(){return this._typeaheadDebounceInterval}set typeaheadDebounceInterval(e){this._typeaheadDebounceInterval=(0,T.su)(e)}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}ngOnInit(){this._selectionModel=new V.Ov(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe((0,M.x)(),(0,f.R)(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen))}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe((0,f.R)(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe((0,r.O)(null),(0,f.R)(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){const e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){const n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute("aria-labelledby",e):n.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(void 0!==this._previousControl&&null!==i.disabled&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}ngOnDestroy(){this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck())}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched())}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){const e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}_isRtl(){return!!this._dir&&"rtl"===this._dir.value}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){const i=e.keyCode,n=i===y.JH||i===y.LH||i===y.oh||i===y.SV,_=i===y.K5||i===y.L_,O=this._keyManager;if(!O.isTyping()&&_&&!(0,y.Vb)(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){const w=this.selected;O.onKeydown(e);const v=this.selected;v&&w!==v&&this._liveAnnouncer.announce(v.viewValue,1e4)}}_handleOpenKeydown(e){const i=this._keyManager,n=e.keyCode,_=n===y.JH||n===y.LH,O=i.isTyping();if(_&&e.altKey)e.preventDefault(),this.close();else if(O||n!==y.K5&&n!==y.L_||!i.activeItem||(0,y.Vb)(e))if(!O&&this._multiple&&n===y.A&&e.ctrlKey){e.preventDefault();const w=this.options.some(v=>!v.disabled&&!v.selected);this.options.forEach(v=>{v.disabled||(w?v.select():v.deselect())})}else{const w=i.activeItemIndex;i.onKeydown(e),this._multiple&&_&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==w&&i.activeItem._selectViaInteraction()}else e.preventDefault(),i.activeItem._selectViaInteraction()}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe((0,c.q)(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this._selectionModel.selected.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{const i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){const i=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return null!=n.value&&this._compareWith(n.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return!!(e!==this._value||this._multiple&&Array.isArray(e))&&(this.options&&this._setSelectionByValue(e),this._value=e,!0)}_initKeyManager(){this._keyManager=new k.s1(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){const e=(0,l.T)(this.options.changes,this._destroy);this.optionSelectionChanges.pipe((0,f.R)(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),(0,l.T)(...this.options.map(i=>i._stateChanges)).pipe((0,f.R)(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){const n=this._selectionModel.isSelected(e);null!=e.value||this._multiple?(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())):(e.deselect(),this._selectionModel.clear(),null!=this.value&&this._propagateChanges(e.value)),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){const e=this.options.toArray();this._selectionModel.sort((i,n)=>this.sortComparator?this.sortComparator(i,n,e):e.indexOf(i)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let i=null;i=this.multiple?this.selected.map(n=>n.value):this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){this._keyManager&&(this.empty?this._keyManager.setFirstItemActive():this._keyManager.setActiveItem(this._selectionModel.selected[0]))}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;const e=this._parentFormField?.getLabelId();return this.ariaLabelledby?(e?e+" ":"")+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;const e=this._parentFormField?.getLabelId();let i=(e?e+" ":"")+this._valueId;return this.ariaLabelledby&&(i+=" "+this.ariaLabelledby),i}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this._panelOpen||!this.empty||this._focused&&!!this._placeholder}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(R.rL),t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(u.rD),t.Y36(t.SBq),t.Y36(P.Is,8),t.Y36(A.F,8),t.Y36(A.sg,8),t.Y36(x.G_,8),t.Y36(A.a5,10),t.$8M("tabindex"),t.Y36(F),t.Y36(k.Kd),t.Y36(X,8))},a.\u0275dir=t.lG2({type:a,viewQuery:function(e,i){if(1&e&&(t.Gf(D,5),t.Gf(H,5),t.Gf(E.pI,5)),2&e){let n;t.iGM(n=t.CRH())&&(i.trigger=n.first),t.iGM(n=t.CRH())&&(i.panel=n.first),t.iGM(n=t.CRH())&&(i._overlayDir=n.first)}},inputs:{userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",placeholder:"placeholder",required:"required",multiple:"multiple",disableOptionCentering:"disableOptionCentering",compareWith:"compareWith",value:"value",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:"typeaheadDebounceInterval",sortComparator:"sortComparator",id:"id"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},features:[t.qOj,t.TTD]}),a})(),se=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275dir=t.lG2({type:a,selectors:[["mat-select-trigger"]],features:[t._Bn([{provide:W,useExisting:a}])]}),a})(),ne=(()=>{class a extends ie{constructor(){super(...arguments),this._positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}]}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}ngOnInit(){super.ngOnInit(),this._viewportRuler.change().pipe((0,f.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(),this._changeDetectorRef.detectChanges())})}ngAfterViewInit(){this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin())}open(){this._overlayWidth=this._getOverlayWidth(),super.open(),this.stateChanges.next()}close(){super.close(),this.stateChanges.next()}_scrollOptionIntoView(e){const i=this.options.toArray()[e];if(i){const n=this.panel.nativeElement,_=(0,u.CB)(e,this.options,this.optionGroups),O=i._getHostElement();n.scrollTop=0===e&&1===_?0:(0,u.jH)(O.offsetTop,O.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ee(this,e)}_getOverlayWidth(){return(this._preferredOverlayOrigin instanceof E.xu?this._preferredOverlayOrigin.elementRef:this._preferredOverlayOrigin||this._elementRef).nativeElement.getBoundingClientRect().width}}return a.\u0275fac=function(){let d;return function(i){return(d||(d=t.n5z(a)))(i||a)}}(),a.\u0275cmp=t.Xpm({type:a,selectors:[["mat-select"]],contentQueries:function(e,i,n){if(1&e&&(t.Suo(n,W,5),t.Suo(n,u.ey,5),t.Suo(n,u.K7,5)),2&e){let _;t.iGM(_=t.CRH())&&(i.customTrigger=_.first),t.iGM(_=t.CRH())&&(i.options=_),t.iGM(_=t.CRH())&&(i.optionGroups=_)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:19,hostBindings:function(e,i){1&e&&t.NdJ("keydown",function(_){return i._handleKeydown(_)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),2&e&&(t.uIk("id",i.id)("tabindex",i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),t.ekj("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matSelect"],features:[t._Bn([{provide:x.Eo,useExisting:a},{provide:u.HF,useExisting:a}]),t.qOj],ngContentSelectors:j,decls:11,vars:11,consts:[["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],[1,"mat-mdc-select-value",3,"ngSwitch"],["class","mat-mdc-select-placeholder mat-mdc-select-min-line",4,"ngSwitchCase"],["class","mat-mdc-select-value-text",3,"ngSwitch",4,"ngSwitchCase"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","backdropClick","attach","detach"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text",3,"ngSwitch"],["class","mat-mdc-select-min-line",4,"ngSwitchDefault"],[4,"ngSwitchCase"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(e,i){if(1&e&&(t.F$t(Q),t.TgZ(0,"div",0,1),t.NdJ("click",function(){return i.toggle()}),t.TgZ(3,"div",2),t.YNc(4,Y,2,1,"span",3),t.YNc(5,Z,3,2,"span",4),t.qZA(),t.TgZ(6,"div",5)(7,"div",6),t.O4$(),t.TgZ(8,"svg",7),t._UZ(9,"path",8),t.qZA()()()(),t.YNc(10,N,3,9,"ng-template",9),t.NdJ("backdropClick",function(){return i.close()})("attach",function(){return i._onAttached()})("detach",function(){return i.close()})),2&e){const n=t.MAs(1);t.uIk("aria-owns",i.panelOpen?i.id+"-panel":null),t.xp6(3),t.Q6J("ngSwitch",i.empty),t.uIk("id",i._valueId),t.xp6(1),t.Q6J("ngSwitchCase",!0),t.xp6(1),t.Q6J("ngSwitchCase",!1),t.xp6(5),t.Q6J("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||n)("cdkConnectedOverlayOpen",i.panelOpen)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)}},dependencies:[S.mk,S.RF,S.n9,S.ED,E.pI,E.xu],styles:['.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.mat-mdc-select{display:inline-block;width:100%;outline:none}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:translateY(-8px)}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-select-arrow{width:10px;height:5px;position:relative}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}.mdc-menu-surface.mat-mdc-select-panel{width:100%;max-height:275px;position:static;outline:0;margin:0;padding:8px 0;list-style-type:none}.mdc-menu-surface.mat-mdc-select-panel:focus{outline:none}.cdk-high-contrast-active .mdc-menu-surface.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) .mdc-menu-surface.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above .mdc-menu-surface.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}'],encapsulation:2,data:{animation:[J.transformPanel]},changeDetection:0}),a})(),ae=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[q],imports:[S.ez,E.U8,u.Ng,u.BQ,R.ZD,x.lN,u.Ng,u.BQ]}),a})()}}]);