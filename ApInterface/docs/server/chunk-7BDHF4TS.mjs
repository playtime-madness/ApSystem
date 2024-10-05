import './polyfills.server.mjs';
import{$ as Ne,A as o,B as p,C as se,D as d,E as Fe,F as ae,G as W,H as l,I as O,J as N,K as P,L as k,M as D,O as xe,T as Se,V as Ie,W as L,X as b,Y as le,_ as Oe,a as Ve,aa as Pe,b as Me,c as De,d as Ae,da as ke,e as V,f as _,g as M,h as we,ha as Te,i as v,j as m,k as te,ka as ue,l as x,m as S,n as I,o as U,p as ne,q as u,r as c,s as ie,t as H,u as C,v as re,w as oe,x as y,y as Ee,z as s}from"./chunk-WRMOBCRL.mjs";import{a as h,b as f}from"./chunk-5XUXGTUW.mjs";var $e=(()=>{class n{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(i){return new(i||n)(c(ie),c(ne))}}static{this.\u0275dir=m({type:n})}}return n})(),qe=(()=>{class n extends $e{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=I(n)))(r||n)}})()}static{this.\u0275dir=m({type:n,features:[C]})}}return n})(),fe=new M("");var at={provide:fe,useExisting:V(()=>K),multi:!0};function lt(){let n=le()?le().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var ut=new M(""),K=(()=>{class n extends $e{constructor(t,i,r){super(t,i),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!lt())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(i){return new(i||n)(c(ie),c(ne),c(ut,8))}}static{this.\u0275dir=m({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&d("input",function(g){return r._handleInput(g.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(g){return r._compositionEnd(g.target.value)})},features:[D([at]),C]})}}return n})();function q(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}var me=new M(""),ct=new M("");function dt(n){return e=>{if(q(e.value)||q(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function ht(n){return e=>{if(q(e.value)||q(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function Re(n){return null}function ze(n){return n!=null}function Ze(n){return xe(n)?Me(n):n}function Ye(n){let e={};return n.forEach(t=>{e=t!=null?h(h({},e),t):e}),Object.keys(e).length===0?null:e}function Je(n,e){return e.map(t=>t(n))}function pt(n){return!n.validate}function Ke(n){return n.map(e=>pt(e)?e:t=>e.validate(t))}function ft(n){if(!n)return null;let e=n.filter(ze);return e.length==0?null:function(t){return Ye(Je(t,e))}}function Xe(n){return n!=null?ft(Ke(n)):null}function mt(n){if(!n)return null;let e=n.filter(ze);return e.length==0?null:function(t){let i=Je(t,e).map(Ze);return Ae(i).pipe(De(Ye))}}function Qe(n){return n!=null?mt(Ke(n)):null}function je(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function gt(n){return n._rawValidators}function _t(n){return n._rawAsyncValidators}function ce(n){return n?Array.isArray(n)?n:[n]:[]}function z(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ge(n,e){let t=ce(e);return ce(n).forEach(r=>{z(t,r)||t.push(r)}),t}function Be(n,e){return ce(e).filter(t=>!z(n,t))}var Z=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Xe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Qe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},de=class extends Z{get formDirective(){return null}get path(){return null}},B=class extends Z{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},he=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},vt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},cn=f(h({},vt),{"[class.ng-submitted]":"isSubmitted"}),et=(()=>{class n extends he{constructor(t){super(t)}static{this.\u0275fac=function(i){return new(i||n)(c(B,2))}}static{this.\u0275dir=m({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&Ee("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[C]})}}return n})();var T="VALID",$="INVALID",A="PENDING",R="DISABLED",E=class{},Y=class extends E{constructor(e,t){super(),this.value=e,this.source=t}},j=class extends E{constructor(e,t){super(),this.pristine=e,this.source=t}},G=class extends E{constructor(e,t){super(),this.touched=e,this.source=t}},w=class extends E{constructor(e,t){super(),this.status=e,this.source=t}};function yt(n){return(X(n)?n.validators:n)||null}function Ct(n){return Array.isArray(n)?Xe(n):n||null}function bt(n,e){return(X(e)?e.asyncValidators:n)||null}function Vt(n){return Array.isArray(n)?Qe(n):n||null}function X(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var pe=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=L(()=>this.statusReactive()),this.statusReactive=H(void 0),this._pristine=L(()=>this.pristineReactive()),this.pristineReactive=H(!0),this._touched=L(()=>this.touchedReactive()),this.touchedReactive=H(!1),this._events=new Ve,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return b(this.statusReactive)}set status(e){b(()=>this.statusReactive.set(e))}get valid(){return this.status===T}get invalid(){return this.status===$}get pending(){return this.status==A}get disabled(){return this.status===R}get enabled(){return this.status!==R}get pristine(){return b(this.pristineReactive)}set pristine(e){b(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return b(this.touchedReactive)}set touched(e){b(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ge(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ge(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Be(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Be(e,this._rawAsyncValidators))}hasValidator(e){return z(this._rawValidators,e)}hasAsyncValidator(e){return z(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(f(h({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new G(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new G(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(f(h({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new j(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new j(!0,i))}markAsPending(e={}){this.status=A;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new w(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(f(h({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=R,this.errors=null,this._forEachChild(r=>{r.disable(f(h({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Y(this.value,i)),this._events.next(new w(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(h({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=T,this._forEachChild(i=>{i.enable(f(h({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(h({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===T||this.status===A)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Y(this.value,t)),this._events.next(new w(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(f(h({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?R:T}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Ze(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new w(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new U,this.statusChanges=new U}_calculateStatus(){return this._allControlsDisabled()?R:this.errors?$:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus($)?$:T}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new j(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new G(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){X(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ct(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Vt(this._rawAsyncValidators)}};var tt=new M("CallSetDisabledState",{providedIn:"root",factory:()=>ge}),ge="always";function Mt(n,e){return[...e.path,n]}function Dt(n,e,t=ge){wt(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),Et(n,e),xt(n,e),Ft(n,e),At(n,e)}function Ue(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function At(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function wt(n,e){let t=gt(n);e.validator!==null?n.setValidators(je(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=_t(n);e.asyncValidator!==null?n.setAsyncValidators(je(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Ue(e._rawValidators,r),Ue(e._rawAsyncValidators,r)}function Et(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&nt(n,e)})}function Ft(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&nt(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function nt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function xt(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function St(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function It(n){return Object.getPrototypeOf(n.constructor)===qe}function Ot(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(a=>{a.constructor===K?t=a:It(a)?i=a:r=a}),r||i||t||null}function He(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function We(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Nt=class extends pe{constructor(e=null,t,i){super(yt(t),bt(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),X(t)&&(t.nonNullable||t.initialValueIsDefault)&&(We(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){He(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){He(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){We(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Pt={provide:B,useExisting:V(()=>_e)},Le=Promise.resolve(),_e=(()=>{class n extends B{constructor(t,i,r,a,g,st){super(),this._changeDetectorRef=g,this.callSetDisabledState=st,this.control=new Nt,this._registered=!1,this.name="",this.update=new U,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Ot(this,a)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),St(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Dt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Le.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&Ie(i);Le.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Mt(t,this._parent):[t]}static{this.\u0275fac=function(i){return new(i||n)(c(de,9),c(me,10),c(ct,10),c(fe,10),c(Se,8),c(tt,8))}}static{this.\u0275dir=m({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[D([Pt]),C,te]})}}return n})();var kt={provide:fe,useExisting:V(()=>ve),multi:!0},ve=(()=>{class n extends qe{writeValue(t){let i=t??"";this.setProperty("value",i)}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=I(n)))(r||n)}})()}static{this.\u0275dir=m({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&d("input",function(g){return r.onChange(g.target.value)})("blur",function(){return r.onTouched()})},features:[D([kt]),C]})}}return n})();function it(n){return typeof n=="number"?n:parseFloat(n)}var rt=(()=>{class n{constructor(){this._validator=Re}ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Re,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=m({type:n,features:[te]})}}return n})(),Tt={provide:me,useExisting:V(()=>ye),multi:!0},ye=(()=>{class n extends rt{constructor(){super(...arguments),this.inputName="max",this.normalizeInput=t=>it(t),this.createValidator=t=>ht(t)}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=I(n)))(r||n)}})()}static{this.\u0275dir=m({type:n,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&oe("max",r._enabled?r.max:null)},inputs:{max:"max"},features:[D([Tt]),C]})}}return n})(),Rt={provide:me,useExisting:V(()=>Ce),multi:!0},Ce=(()=>{class n extends rt{constructor(){super(...arguments),this.inputName="min",this.normalizeInput=t=>it(t),this.createValidator=t=>dt(t)}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=I(n)))(r||n)}})()}static{this.\u0275dir=m({type:n,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&oe("min",r._enabled?r.min:null)},inputs:{min:"min"},features:[D([Rt]),C]})}}return n})();var jt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=v({type:n})}static{this.\u0275inj=_({})}}return n})();var ot=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:tt,useValue:t.callSetDisabledState??ge}]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=v({type:n})}static{this.\u0275inj=_({imports:[jt]})}}return n})();function Bt(n,e){if(n&1){let t=se();s(0,"div",30)(1,"div",31)(2,"label"),l(3),o(),s(4,"input",32),k("ngModelChange",function(r){let a=x(t).$implicit;return P(a.value,r)||(a.value=r),S(r)}),o(),s(5,"input",33),k("ngModelChange",function(r){let a=x(t).$implicit;return P(a.maxValue,r)||(a.maxValue=r),S(r)}),o()()()}if(n&2){let t=e.$implicit;u(3),O(" ",t.name," "),u(),W("id","stat",t.name,""),ae("max",t.maxValue),N("ngModel",t.value),u(),W("id","statMax",t.name,""),ae("max",t.maxValue),N("ngModel",t.maxValue)}}function Ut(n,e){if(n&1){let t=se();s(0,"div",30)(1,"label"),l(2),o(),s(3,"input",34),k("ngModelChange",function(r){let a=x(t).$implicit;return P(a.value,r)||(a.value=r),S(r)}),d("ngModelChange",function(r){let a=x(t).$implicit,g=Fe();return S(g.statChanged(r,a))}),o(),p(4,"span",35),o()}if(n&2){let t=e.$implicit;u(2),O(" ",t.name," "),u(),W("id","stat",t.name,""),N("ngModel",t.value)}}var F=class n{title="ApInterface";baseStats=[{name:"Health",value:3,maxValue:5},{name:"Armor",value:5,maxValue:5},{name:"Sanity",value:5,maxValue:5}];playerStats=[{name:"Strength",value:3,points:0,calc:!1},{name:"Speed",value:0,points:0,calc:!1},{name:"Agility",value:0,points:0,calc:!1},{name:"Resilience",value:0,points:0,calc:!1},{name:"Awareness",value:0,points:0,calc:!1},{name:"Knowledge",value:0,points:0,calc:!1},{name:"Wisdom",value:0,points:0,calc:!1},{name:"Presence",value:0,points:0,calc:!1},{name:"Articulation",value:0,points:0,calc:!1}];statTotal=3;apCurrent=3;apMax=3;statCalc=0;statChanged(e,t){console.log(e),console.log(t),this.updateTotal()}updateTotal(){this.statTotal=0;for(let e=0;e<this.playerStats.length;e++)this.statTotal+=this.playerStats[e].value}useAction(e){this.apCurrent-e>=0&&(this.apCurrent-=e)}nextTurn(){this.apCurrent=this.apMax}selectedFile;jsonObj={};uploadFile(e){this.selectedFile=e.target.files[0];let t=new FileReader;t.readAsText(this.selectedFile,"UTF-8"),t.onload=()=>{t.result!=null&&(this.jsonObj=JSON.parse(t.result.toString()),console.log(this.jsonObj))},t.onerror=i=>{console.log(i)}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=we({type:n,selectors:[["app-root"]],decls:86,vars:11,consts:[["type","file","id","file",1,"form-control",3,"change"],[1,"sectionWrapper","d-block","w-100"],[1,"sectionInner","section-flex"],["class","statItemWrapper",4,"ngFor","ngForOf"],[1,"sectionWrapper","w-100"],[1,"sectionInner"],[1,"statWrapper","section-flex"],["type","number","id","statTotal",3,"ngModelChange","ngModel"],[1,"sectionWrapper","d-block"],[2,"font-size","18px"],["id","apCurrent"],["id","apMax"],[2,"display","flex","flex-direction","row","flex-wrap","nowrap","gap","15px"],[1,"btnActionWrapper","w-100",2,"margin-top","10px"],[1,"actionBtn",3,"click","disabled"],[1,"nextBtn",3,"click"],[1,""],["type","number","disabled","","id","statCalc"],["id","accordionExample",1,"accordion"],[1,"accordion-item"],["id","headingOne",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"accordion-button"],["id","collapseOne","aria-labelledby","headingOne","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse","show"],[1,"accordion-body"],["id","headingTwo",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseTwo","aria-expanded","false","aria-controls","collapseTwo",1,"accordion-button","collapsed"],["id","collapseTwo","aria-labelledby","headingTwo","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse"],["id","headingThree",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseThree","aria-expanded","false","aria-controls","collapseThree",1,"accordion-button","collapsed"],["id","collapseThree","aria-labelledby","headingThree","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse"],[1,"statItemWrapper"],[1,"progress-bar__wrapper"],["type","number","min","0",3,"ngModelChange","id","ngModel","max"],["type","number","min","0","disabled","",3,"ngModelChange","id","ngModel","max"],["type","number",3,"ngModelChange","id","ngModel"],[2,"border","1px solid grey","border-radius","30px","height","10px","width","10px","display","inline-block"]],template:function(t,i){t&1&&(s(0,"h1"),l(1,"Ap system Heading"),o(),p(2,"br"),s(3,"p"),l(4,"Placeholder paragraph"),o(),s(5,"label"),l(6,"Upload mapping Json file "),o(),s(7,"input",0),d("change",function(a){return i.uploadFile(a)}),o(),p(8,"br"),s(9,"section",1)(10,"div",2),re(11,Bt,6,9,"div",3),o()(),s(12,"section",4)(13,"div",5)(14,"h3"),l(15," Stats "),o(),s(16,"div",6),re(17,Ut,5,4,"div",3),s(18,"input",7),k("ngModelChange",function(a){return P(i.statTotal,a)||(i.statTotal=a),a}),o()()()(),s(19,"section",8)(20,"div",5)(21,"h4"),l(22," Actions "),o(),s(23,"div")(24,"label"),l(25," AP "),o(),s(26,"div",9)(27,"Span",10),l(28),o(),l(29," / "),s(30,"Span",11),l(31),o()()(),s(32,"div",12)(33,"div",13)(34,"button",14),d("click",function(){return i.useAction(1)}),l(35," Move 30ft (1) "),o(),s(36,"button",14),d("click",function(){return i.useAction(1)}),l(37," Inspect "),o(),s(38,"button",14),d("click",function(){return i.useAction(1)}),l(39," Use Object "),o()(),s(40,"div",13)(41,"button",14),d("click",function(){return i.useAction(1)}),l(42," Light Attack (1) "),o(),s(43,"button",14),d("click",function(){return i.useAction(1)}),l(44," Heavy Attack (2) "),o(),s(45,"button",14),d("click",function(){return i.useAction(1)}),l(46," Block "),o(),s(47,"button",15),d("click",function(){return i.nextTurn()}),l(48," Next turn "),o()()()(),p(49,"hr"),s(50,"section",16),p(51,"input",17),o()(),s(52,"div",18)(53,"div",19)(54,"h2",20)(55,"button",21),l(56," Turn 1 "),o()(),s(57,"div",22)(58,"div",23),l(59," On your turn you can Move or Interact with a object or feature of the environment. "),p(60,"br"),l(61," Movement can take the form of walking, climbing and swimming. "),p(62,"br"),l(63," Interactions include, Attacking, Using Objects, Or Investigating."),p(64,"br")(65,"br"),l(66," Different actions have Different costs. "),o()()(),s(67,"div",19)(68,"h2",24)(69,"button",25),l(70," Accordion Item #2 "),o()(),s(71,"div",26),p(72,"div",23),o()(),s(73,"div",19)(74,"h2",27)(75,"button",28),l(76," Accordion Item #3 "),o()(),s(77,"div",29)(78,"div",23)(79,"strong"),l(80,"This is the third item's accordion body."),o(),l(81," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "),s(82,"code"),l(83,".accordion-body"),o(),l(84,", though the transition does limit overflow. "),o()()()(),p(85,"router-outlet")),t&2&&(u(11),y("ngForOf",i.baseStats),u(6),y("ngForOf",i.playerStats),u(),N("ngModel",i.statTotal),u(10),O(" ",i.apCurrent," "),u(3),O(" ",i.apMax," "),u(3),y("disabled",!(i.apCurrent>=1)),u(2),y("disabled",!(i.apCurrent>=1)),u(2),y("disabled",!(i.apCurrent>=1)),u(3),y("disabled",!(i.apCurrent>=1)),u(2),y("disabled",!(i.apCurrent>=2)),u(2),y("disabled",!(i.apCurrent>=1)))},dependencies:[Oe,Te,K,ve,et,Ce,ye,_e],styles:[`[_nghost-%COMP%] {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(180deg,
        var(--orange-red) 0%,
        var(--vivid-pink) 50%,
        var(--electric-violet) 100%);

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(90deg,
        var(--orange-red) 0%,
        var(--vivid-pink) 50%,
        var(--electric-violet) 100%);

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }



  p[_ngcontent-%COMP%] {
    margin: 0;
    color: var(--gray-700);
  }

  main[_ngcontent-%COMP%] {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: inherit;
    position: relative;
  }

  .angular-logo[_ngcontent-%COMP%] {
    max-width: 9.2rem;
  }

  .content[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    margin-top: 1.75rem;
  }

  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-top: 1.5rem;
  }

  .divider[_ngcontent-%COMP%] {
    width: 1px;
    background: var(--red-to-pink-to-purple-vertical-gradient);
    margin-inline: 0.5rem;
  }

  .pill-group[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .pill[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    --pill-accent: var(--bright-blue);
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    border-radius: 2.75rem;
    border: 0;
    transition: background 0.3s ease;
    font-family: var(--inter-font);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.00875rem;
    text-decoration: none;
  }

  .pill[_ngcontent-%COMP%]:hover {
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
  }

  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 1) {
    --pill-accent: var(--bright-blue);
  }

  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 2) {
    --pill-accent: var(--french-violet);
  }

  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 3), 
   .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 4), 
   .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 5) {
    --pill-accent: var(--hot-red);
  }

  .pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    margin-inline-start: 0.25rem;
  }

  .social-links[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 0.73rem;
    margin-top: 1.5rem;
  }

  .social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    fill: var(--gray-900);
  }

  @media screen and (max-width: 650px) {
    .content[_ngcontent-%COMP%] {
      flex-direction: column;
      width: max-content;
    }

    .divider[_ngcontent-%COMP%] {
      height: 1px;
      width: 100%;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      margin-block: 1.5rem;
    }


  }`,`*[_ngcontent-%COMP%] {
    font-family: monospace;
  }

  h3[_ngcontent-%COMP%] {
    margin-top: 0px;
    ;
  }



  label[_ngcontent-%COMP%] {
    font-weight: bold;
    margin-bottom: 6px;
    display: inline-block;
    min-width: 100px;
  }

  .statWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
    width: 45px;
    border: 1px solid #0936bd69;
    border-radius: 4px;
    padding: 2px 2px 2px 8px;
    font-size: 21px;
  }



  .statItemWrapper[_ngcontent-%COMP%] {
    --pill-accent: #0936bd;

    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);


    border-radius: 4px;
    padding: 4px 8px;
  }`]})};var Ht=[],Q=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=v({type:n});static \u0275inj=_({imports:[Ne,ue.forRoot(Ht),ue]})};var ee=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=v({type:n,bootstrap:[F]});static \u0275inj=_({imports:[Pe,Q,ot]})};var be=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=v({type:n,bootstrap:[F]});static \u0275inj=_({imports:[ee,ke]})};export{be as a};
