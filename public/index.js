(()=>{var ge={compose:function(n){return function(r){return function(e){return n(r(e))}}}},Ce=function(n){return n.compose};var J=function(n){return n.identity},z={identity:function(n){return n},Semigroupoid0:function(){return ge}};var kn=function(n){return function(r){return function(e){return n(e)(r)}}},dn=function(n){return function(r){return n}};var f=function(n){return n.map},Mr=function(n){var r=f(n);return function(e){return function(t){return r(t)(e)}}},Mn=function(n){return f(n)(dn(void 0))};var Kr={map:Ce(ge)};var ji=J(z);var tt={apply:function(n){return function(r){return function(e){return n(e)(r(e))}}},Functor0:function(){return Kr}};var tn=function(n){return n.apply};var Fr=function(n){var r=tn(n),e=f(n.Functor0());return function(t){return function(o){return r(e(dn(ji))(t))(o)}}},Wn=function(n){var r=tn(n),e=f(n.Functor0());return function(t){return function(o){return function(a){return r(e(t)(o))(a)}}}};var T=function(n){return n.pure};var ye=function(n){var r=tn(n.Apply0()),e=T(n);return function(t){return function(o){return r(e(t))(o)}}};var jt={pure:function(n){return function(r){return n}},Apply0:function(){return tt}};var Ki=J(z),Vn=function(n){return n.discard};var M=function(n){return n.bind},rr=function(n){return kn(M(n))};var jn={discard:function(n){return M(n)}};var zt=function(n){var r=M(n);return function(e){return r(e)(Ki)}};var Yi=function(n){return function(r){if(n<1)return[];var e=new Array(n);return e.fill(r)}},Xi=function(n){return function(r){for(var e=[],t=0,o=0;o<n;o++)e[t++]=r;return e}},Gt=typeof Array.prototype.fill=="function"?Yi:Xi,Zi=function(){function n(o,a){this.head=o,this.tail=a}var r={};function e(o){return function(a){return new n(o,a)}}function t(o){for(var a=[],u=0,l=o;l!==r;)a[u++]=l.head,l=l.tail;return a}return function(o){return function(a){return t(o(e)(r)(a))}}}();var nf=function(){function n(r,e,t,o,a,u){var l,i,x,h,Y,un,X;for(l=a+(u-a>>1),l-a>1&&n(r,e,o,t,a,l),u-l>1&&n(r,e,o,t,l,u),i=a,x=l,h=a;i<l&&x<u;)Y=o[i],un=o[x],X=e(r(Y)(un)),X>0?(t[h++]=un,++x):(t[h++]=Y,++i);for(;i<l;)t[h++]=o[i++];for(;x<u;)t[h++]=o[x++]}return function(r){return function(e){return function(t){var o;return t.length<2?t:(o=t.slice(0),n(r,e,o,t.slice(0),0,t.length),o)}}}}();var aa=function(n){return function(r){return n.length===0?r:r.length===0?n:n.concat(r)}};var at={append:function(n){return function(r){return void 0}}};var Xr={append:aa};var U=function(n){return n.append};var Ir=function(n){var r=M(n.Bind1()),e=T(n.Applicative0());return function(t){return function(o){return r(t)(function(a){return r(o)(function(u){return e(a(u))})})}}};var uf=String.fromCharCode(65535),ff=String.fromCharCode(0),cf=Number.POSITIVE_INFINITY,lf=Number.NEGATIVE_INFINITY;var ca=function(n){return n.toString()};var Yt={show:ca};var Z=function(n){return n.show};var If=J(z),F=function(){function n(){}return n.value=new n,n}(),b=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}();var Sr=function(n){return function(r){return function(e){if(e instanceof F)return n;if(e instanceof b)return r(e.value0);throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): "+[n.constructor.name,r.constructor.name,e.constructor.name])}}};var ur={map:function(n){return function(r){return r instanceof b?new b(n(r.value0)):F.value}}};var Ee=function(n){return Sr(n)(If)};var Nn=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}(),xn=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}();var ee={mempty:void 0,Semigroup0:function(){return at}};var no={mempty:[],Semigroup0:function(){return Xr}};var q=function(n){return n.mempty};var ro=function(n){return function(){return n}},la=function(n){return function(r){return function(){return r(n())()}}};var pa=function(n,r,e){var t=0,o;return function(a){if(t===2)return o;if(t===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+r+", line "+a+")",r,a);return t=1,o=e(),t=2,o}},ir={Applicative0:function(){return Un},Bind1:function(){return gr}},gr={bind:la,Apply0:function(){return eo(0)}},Un={pure:ro,Apply0:function(){return eo(0)}},ma=pa("functorEffect","Effect",function(){return{map:ye(Un)}}),eo=pa("applyEffect","Effect",function(){return{apply:Ir(ir),Functor0:function(){return ma(0)}}}),P=ma(20),Me=eo(23),Hf=Wn(Me),ct=function(n){return{append:Hf(U(n))}},Bn=function(n){var r=ct(n.Semigroup0());return{mempty:ro(q(n)),Semigroup0:function(){return r}}};var sa=function(n){return function(){return{value:n}}};var fr=function(n){return function(){return n.value}};var Yn=function(n){return function(r){return function(){r.value=n}}};var Pr=sa;var Bf=function(){function n(r,e,t,o,a,u){var l,i,x,h,Y,un,X;for(l=a+(u-a>>1),l-a>1&&n(r,e,o,t,a,l),u-l>1&&n(r,e,o,t,l,u),i=a,x=l,h=a;i<l&&x<u;)Y=o[i],un=o[x],X=e(r(Y)(un)),X>0?(t[h++]=un,++x):(t[h++]=Y,++i);for(;i<l;)t[h++]=o[i++];for(;x<u;)t[h++]=o[x++]}return function(r){return function(e){return function(t){return function(){return t.length<2||n(r,e,t,t.slice(0),0,t.length),t}}}}}();var ya=function(n){return function(r){return function(e){for(var t=r,o=e.length,a=o-1;a>=0;a--)t=n(e[a])(t);return t}}},Da=function(n){return function(r){return function(e){for(var t=r,o=e.length,a=0;a<o;a++)t=n(t)(e[a]);return t}}};var j=function(){function n(r,e){this.value0=r,this.value1=e}return n.create=function(r){return function(e){return new n(r,e)}},n}();var cr=function(n){return n.value1};var Ar=function(n){return n.value0};var c=function(n){return n};var st=function(n){return n.foldr};var lr=function(n){var r=Fr(n.Apply0()),e=T(n);return function(t){var o=st(t);return function(a){return o(function(u){return r(a(u))})(e(void 0))}}},po=function(n){var r=lr(n);return function(e){return kn(r(e))}};var mo={foldr:function(n){return function(r){return function(e){if(e instanceof F)return r;if(e instanceof b)return n(e.value0)(r);throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): "+[n.constructor.name,r.constructor.name,e.constructor.name])}}},foldl:function(n){return function(r){return function(e){if(e instanceof F)return r;if(e instanceof b)return n(r)(e.value0);throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): "+[n.constructor.name,r.constructor.name,e.constructor.name])}}},foldMap:function(n){var r=q(n);return function(e){return function(t){if(t instanceof F)return r;if(t instanceof b)return e(t.value0);throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): "+[e.constructor.name,t.constructor.name])}}}};var Aa=function(n){var r=st(n);return function(e){var t=U(e.Semigroup0()),o=q(e);return function(a){return r(function(u){return function(l){return t(a(u))(l)}})(o)}}},Tr={foldr:ya,foldl:Da,foldMap:function(n){return Aa(Tr)(n)}};var bc=function(){function n(o){return[o]}function r(o){return function(a){return[o,a]}}function e(o){return function(a){return function(u){return[o,a,u]}}}function t(o){return function(a){return o.concat(a)}}return function(o){return function(a){return function(u){return function(l){return function(i){function x(h,Y){switch(Y-h){case 0:return u([]);case 1:return a(n)(l(i[h]));case 2:return o(a(r)(l(i[h])))(l(i[h+1]));case 3:return o(o(a(e)(l(i[h])))(l(i[h+1])))(l(i[h+2]));default:var un=h+Math.floor((Y-h)/4)*2;return o(a(t)(x(h,un)))(x(un,Y))}}return x(0,i.length)}}}}}}();var Xn=function(n){return n.ask};var wn=function(n){return n.lift};var Zn=function(n){return n.tell};var yr={liftEffect:J(z),Monad0:function(){return ir}},K=function(n){return n.liftEffect};var Ga=function(n){return n};var Se=function(n){return n};var yt={lift:function(n){return function(r){return Ga(dn(r))}}},Qa=wn(yt),Ka=function(n){return function(r){return function(e){return n(r(e))}}},Ya=function(n){return{map:function(){var r=f(n);return function(e){return Ka(r(e))}}()}};var To=function(n){var r=tn(n),e=Ya(n.Functor0());return{apply:function(t){return function(o){return function(a){return r(t(a))(o(a))}}},Functor0:function(){return e}}},ae=function(n){var r=M(n),e=To(n.Apply0());return{bind:function(t){return function(o){return function(a){return r(t(a))(function(u){var l=o(u);return l(a)})}}},Apply0:function(){return e}}};var Dt=function(n){var r=To(n.Apply0());return{pure:function(){var e=T(n);return function(t){return Ga(dn(e(t)))}}(),Apply0:function(){return r}}},Pe=function(n){var r=Dt(n.Applicative0()),e=ae(n.Bind1());return{Applicative0:function(){return r},Bind1:function(){return e}}},He=function(n){var r=Pe(n);return{ask:T(n.Applicative0()),Monad0:function(){return r}}};var bt=function(n){var r=n.Monad0(),e=Pe(r);return{liftEffect:function(){var t=Qa(r),o=K(n);return function(a){return t(o(a))}}(),Monad0:function(){return e}}};var Xa=function(n){var r=n.Monad1(),e=n.Semigroup0(),t=Pe(r);return{tell:function(){var o=Qa(r),a=Zn(n);return function(u){return o(a(u))}}(),Semigroup0:function(){return e},Monad1:function(){return t}}};var fl=function(n){return n},Ae=function(n){return n};var yo=function(n){var r=q(n);return{lift:function(e){var t=M(e.Bind1()),o=T(e.Applicative0());return function(a){return t(a)(function(u){return o(new j(u,r))})}}}},Za=function(n){return function(r){return n(r)}},Do=function(n){var r=f(n);return{map:function(e){return Za(r(function(t){return new j(e(t.value0),t.value1)}))}}};var Mt=function(n){var r=U(n);return function(e){var t=tn(e),o=e.Functor0(),a=f(o),u=Do(o);return{apply:function(l){return function(i){var x=function(h){return function(Y){return new j(h.value0(Y.value0),r(h.value1)(Y.value1))}};return t(a(x)(l))(i)}},Functor0:function(){return u}}}},ue=function(n){var r=U(n),e=Mt(n);return function(t){var o=M(t),a=t.Apply0(),u=f(a.Functor0()),l=e(a);return{bind:function(i){return function(x){return o(i)(function(h){var Y=x(h.value0);return u(function(un){return new j(un.value0,r(h.value1)(un.value1))})(Y)})}},Apply0:function(){return l}}}};var Or=function(n){var r=q(n),e=Mt(n.Semigroup0());return function(t){var o=T(t),a=e(t.Apply0());return{pure:function(u){return o(new j(u,r))},Apply0:function(){return a}}}},Jr=function(n){var r=Or(n),e=ue(n.Semigroup0());return function(t){var o=r(t.Applicative0()),a=e(t.Bind1());return{Applicative0:function(){return o},Bind1:function(){return a}}}};var We=function(n){var r=wn(yo(n)),e=Jr(n);return function(t){var o=t.Monad0(),a=e(o);return{liftEffect:function(){var u=r(o),l=K(t);return function(i){return u(l(i))}}(),Monad0:function(){return a}}}};var $e=function(n){var r=n.Semigroup0(),e=Jr(n);return function(t){var o=e(t);return{tell:function(){var a=T(t.Applicative0()),u=j.create(void 0);return function(l){return fl(a(u(l)))}}(),Semigroup0:function(){return r},Monad1:function(){return o}}}};var Sn=function(){var n={},r="Pure",e="Throw",t="Catch",o="Sync",a="Async",u="Bind",l="Bracket",i="Fork",x="Sequential",h="Map",Y="Apply",un="Alt",X="Cons",pr="Resume",mr="Release",zr="Finalizer",Gr="Finalized",oa="Forked",Zs="Fiber",nd="Thunk";function E(v,A,fn,$){this.tag=v,this._1=A,this._2=fn,this._3=$}function On(v){var A=function(fn,$,g){return new E(v,fn,$,g)};return A.tag=v,A}function Bt(v){return new E(r,void 0)}function Wi(v){try{v()}catch(A){setTimeout(function(){throw A},0)}}function $i(v,A,fn){try{return A(fn())}catch($){return v($)}}function Ui(v,A,fn){try{return A(fn)()}catch($){return fn(v($))(),Bt}}var Ye=function(){var v=1024,A=0,fn=0,$=new Array(v),g=!1;function m(){var W;for(g=!0;A!==0;)A--,W=$[fn],$[fn]=void 0,fn=(fn+1)%v,W();g=!1}return{isDraining:function(){return g},enqueue:function(W){var I,en;A===v&&(en=g,m(),g=en),$[(fn+A)%v]=W,A++,g||m()}}}();function qi(v){var A={},fn=0,$=0;return{register:function(g){var m=fn++;g.onComplete({rethrow:!0,handler:function(W){return function(){$--,delete A[m]}}})(),A[m]=g,$++},isEmpty:function(){return $===0},killAll:function(g,m){return function(){if($===0)return m();var W=0,I={};function en(O){I[O]=A[O].kill(g,function(mn){return function(){delete I[O],W--,v.isLeft(mn)&&v.fromLeft(mn)&&setTimeout(function(){throw v.fromLeft(mn)},0),W===0&&m()}})()}for(var bn in A)A.hasOwnProperty(bn)&&(W++,en(bn));return A={},fn=0,$=0,function(O){return new E(o,function(){for(var mn in I)I.hasOwnProperty(mn)&&I[mn]()})}}}}}var Qr=0,Pn=1,Xe=2,Ze=3,nt=4,An=5,ve=6;function Vt(v,A,fn){var $=0,g=Qr,m=fn,W=null,I=null,en=null,bn=null,O=null,mn=0,Er=0,Jn=null,sr=!0;function dr(C){for(var y,N,H;;)switch(y=null,N=null,H=null,g){case Xe:g=Pn;try{m=en(m),bn===null?en=null:(en=bn._1,bn=bn._2)}catch(In){g=An,W=v.left(In),m=null}break;case Ze:v.isLeft(m)?(g=An,W=m,m=null):en===null?g=An:(g=Xe,m=v.fromRight(m));break;case Pn:switch(m.tag){case u:en&&(bn=new E(X,en,bn)),en=m._2,g=Pn,m=m._1;break;case r:en===null?(g=An,m=v.right(m._1)):(g=Xe,m=m._1);break;case o:g=Ze,m=$i(v.left,v.right,m._1);break;case a:g=nt,m=Ui(v.left,m._1,function(In){return function(){$===C&&($++,Ye.enqueue(function(){$===C+1&&(g=Ze,m=In,dr($))}))}});return;case e:g=An,W=v.left(m._1),m=null;break;case t:en===null?O=new E(X,m,O,I):O=new E(X,m,new E(X,new E(pr,en,bn),O,I),I),en=null,bn=null,g=Pn,m=m._1;break;case l:mn++,en===null?O=new E(X,m,O,I):O=new E(X,m,new E(X,new E(pr,en,bn),O,I),I),en=null,bn=null,g=Pn,m=m._1;break;case i:g=Ze,y=Vt(v,A,m._2),A&&A.register(y),m._1&&y.run(),m=v.right(y);break;case x:g=Pn,m=Ji(v,A,m._1);break}break;case An:if(en=null,bn=null,O===null)g=ve,m=I||W||m;else switch(y=O._3,H=O._1,O=O._2,H.tag){case t:I&&I!==y&&mn===0?g=An:W&&(g=Pn,m=H._2(v.fromLeft(W)),W=null);break;case pr:I&&I!==y&&mn===0||W?g=An:(en=H._1,bn=H._2,g=Xe,m=v.fromRight(m));break;case l:mn--,W===null&&(N=v.fromRight(m),O=new E(X,new E(mr,H._2,N),O,y),(I===y||mn>0)&&(g=Pn,m=H._3(N)));break;case mr:O=new E(X,new E(Gr,m,W),O,I),g=Pn,I&&I!==y&&mn===0?m=H._1.killed(v.fromLeft(I))(H._2):W?m=H._1.failed(v.fromLeft(W))(H._2):m=H._1.completed(v.fromRight(m))(H._2),W=null,mn++;break;case zr:mn++,O=new E(X,new E(Gr,m,W),O,I),g=Pn,m=H._1;break;case Gr:mn--,g=An,m=H._1,W=H._2;break}break;case ve:for(var ln in Jn)Jn.hasOwnProperty(ln)&&(sr=sr&&Jn[ln].rethrow,Wi(Jn[ln].handler(m)));Jn=null,I&&W?setTimeout(function(){throw v.fromLeft(W)},0):v.isLeft(m)&&sr&&setTimeout(function(){if(sr)throw v.fromLeft(m)},0);return;case Qr:g=Pn;break;case nt:return}}function cn(C){return function(){if(g===ve)return sr=sr&&C.rethrow,C.handler(m)(),function(){};var y=Er++;return Jn=Jn||{},Jn[y]=C,function(){Jn!==null&&delete Jn[y]}}}function D(C,y){return function(){if(g===ve)return y(v.right(void 0))(),function(){};var N=cn({rethrow:!1,handler:function(){return y(v.right(void 0))}})();switch(g){case Qr:I=v.left(C),g=ve,m=I,dr($);break;case nt:I===null&&(I=v.left(C)),mn===0&&(g===nt&&(O=new E(X,new E(zr,m(C)),O,I)),g=An,m=null,W=null,dr(++$));break;default:I===null&&(I=v.left(C)),mn===0&&(g=An,m=null,W=null)}return N}}function L(C){return function(){var y=cn({rethrow:!1,handler:C})();return g===Qr&&dr($),y}}return{kill:D,join:L,onComplete:cn,isSuspended:function(){return g===Qr},run:function(){g===Qr&&(Ye.isDraining()?dr($):Ye.enqueue(function(){dr($)}))}}}function Oi(v,A,fn,$){var g=0,m={},W=0,I={},en=new Error("[ParAff] Early exit"),bn=null,O=n;function mn(cn,D,L){var C=D,y=null,N=null,H=0,ln={},In,_e;n:for(;;)switch(In=null,C.tag){case oa:if(C._3===n&&(In=m[C._1],ln[H++]=In.kill(cn,function(ki){return function(){H--,H===0&&L(ki)()}})),y===null)break n;C=y._2,N===null?y=null:(y=N._1,N=N._2);break;case h:C=C._2;break;case Y:case un:y&&(N=new E(X,y,N)),y=C,C=C._1;break}if(H===0)L(v.right(void 0))();else for(_e=0,In=H;_e<In;_e++)ln[_e]=ln[_e]();return ln}function Er(cn,D,L){var C,y,N,H,ln,In;v.isLeft(cn)?(C=cn,y=null):(y=cn,C=null);n:for(;;){if(N=null,H=null,ln=null,In=null,bn!==null)return;if(D===null){$(C||y)();return}if(D._3!==n)return;switch(D.tag){case h:C===null?(D._3=v.right(D._1(v.fromRight(y))),y=D._3):D._3=C;break;case Y:if(N=D._1._3,H=D._2._3,C){if(D._3=C,ln=!0,In=W++,I[In]=mn(en,C===N?D._2:D._1,function(){return function(){delete I[In],ln?ln=!1:L===null?Er(C,null,null):Er(C,L._1,L._2)}}),ln){ln=!1;return}}else{if(N===n||H===n)return;y=v.right(v.fromRight(N)(v.fromRight(H))),D._3=y}break;case un:if(N=D._1._3,H=D._2._3,N===n&&v.isLeft(H)||H===n&&v.isLeft(N))return;if(N!==n&&v.isLeft(N)&&H!==n&&v.isLeft(H))C=y===N?H:N,y=null,D._3=C;else if(D._3=y,ln=!0,In=W++,I[In]=mn(en,y===N?D._2:D._1,function(){return function(){delete I[In],ln?ln=!1:L===null?Er(y,null,null):Er(y,L._1,L._2)}}),ln){ln=!1;return}break}L===null?D=null:(D=L._1,L=L._2)}}function Jn(cn){return function(D){return function(){delete m[cn._1],cn._3=D,Er(D,cn._2._1,cn._2._2)}}}function sr(){var cn=Pn,D=fn,L=null,C=null,y,N;n:for(;;)switch(y=null,N=null,cn){case Pn:switch(D.tag){case h:L&&(C=new E(X,L,C)),L=new E(h,D._1,n,n),D=D._2;break;case Y:L&&(C=new E(X,L,C)),L=new E(Y,n,D._2,n),D=D._1;break;case un:L&&(C=new E(X,L,C)),L=new E(un,n,D._2,n),D=D._1;break;default:N=g++,cn=An,y=D,D=new E(oa,N,new E(X,L,C),n),y=Vt(v,A,y),y.onComplete({rethrow:!1,handler:Jn(D)})(),m[N]=y,A&&A.register(y)}break;case An:if(L===null)break n;L._1===n?(L._1=D,cn=Pn,D=L._2,L._2=n):(L._2=D,D=L,C===null?L=null:(L=C._1,C=C._2))}for(O=D,N=0;N<g;N++)m[N].run()}function dr(cn,D){bn=v.left(cn);var L;for(var C in I)if(I.hasOwnProperty(C)){L=I[C];for(C in L)L.hasOwnProperty(C)&&L[C]()}I=null;var y=mn(cn,O,D);return function(N){return new E(a,function(H){return function(){for(var ln in y)y.hasOwnProperty(ln)&&y[ln]();return Bt}})}}return sr(),function(cn){return new E(a,function(D){return function(){return dr(cn,D)}})}}function Ji(v,A,fn){return new E(a,function($){return function(){return Oi(v,A,fn,$)}})}return E.EMPTY=n,E.Pure=On(r),E.Throw=On(e),E.Catch=On(t),E.Sync=On(o),E.Async=On(a),E.Bind=On(u),E.Bracket=On(l),E.Fork=On(i),E.Seq=On(x),E.ParMap=On(h),E.ParApply=On(Y),E.ParAlt=On(un),E.Fiber=Vt,E.Supervisor=qi,E.Scheduler=Ye,E.nonCanceler=Bt,E}(),nu=Sn.Pure,cl=Sn.Throw;function ru(n){return function(r){return r.tag===Sn.Pure.tag?Sn.Pure(n(r._1)):Sn.Bind(r,function(e){return Sn.Pure(n(e))})}}function eu(n){return function(r){return Sn.Bind(n,r)}}var tu=Sn.Sync;function ou(n){return function(r){return Sn.ParMap(n,r)}}function au(n){return function(r){return Sn.ParApply(n,r)}}var ht=Sn.Async;function uu(n,r){return function(){return Sn.Fiber(n,null,r)}}var ll=function(){function n(e,t){return e===0&&typeof setImmediate<"u"?setImmediate(t):setTimeout(t,e)}function r(e,t){return e===0&&typeof clearImmediate<"u"?clearImmediate(t):clearTimeout(t)}return function(e,t){return Sn.Async(function(o){return function(){var a=n(t,o(e()));return function(){return Sn.Sync(function(){return e(r(t,a))})}}})}}(),iu=Sn.Seq;var Ft=function(n){return n.sequential},ie=function(n){return n.parallel};var bl=J(z),El=function(n){var r=Ft(n),e=lr(n.Applicative1()),t=ie(n);return function(o){var a=e(o);return function(u){var l=a(function(i){return t(u(i))});return function(i){return r(l(i))}}}};var cu=function(n){var r=El(n);return function(e){return r(e)(bl)}};var lu=function(n){return n()};var pu=function(n){throw new Error(n)};var mu=function(){return pu};var Rl=mu(),Ll=lu,Eo=function(n){return Ll(function(){return Rl(n)})};var su=function(n,r,e){var t=0,o;return function(a){if(t===2)return o;if(t===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+r+", line "+a+")",r,a);return t=1,o=e(),t=2,o}};var Hl=Mn(P);var Al=function(n){return n};var Wl={map:ou},du={map:ru};var $l=function(){var n=function(t){if(t instanceof xn)return t.value0;if(t instanceof Nn)return Eo("unsafeFromRight: Left");throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): "+[t.constructor.name])},r=function(t){if(t instanceof Nn)return t.value0;if(t instanceof xn)return Eo("unsafeFromLeft: Right");throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): "+[t.constructor.name])},e=function(t){if(t instanceof Nn)return!0;if(t instanceof xn)return!1;throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): "+[t.constructor.name])};return{isLeft:e,fromLeft:r,fromRight:n,left:Nn.create,right:xn.create}}(),Ul=function(n){return uu($l,n)},ql=function(n){return function(){var e=Ul(n)();return e.run(),e}},Mo=function(n){return Hl(ql(n))};var Ol={apply:au,Functor0:function(){return Wl}};var ho={Applicative0:function(){return Ue},Bind1:function(){return kr}},kr={bind:eu,Apply0:function(){return vu(0)}},Ue={pure:nu,Apply0:function(){return vu(0)}},vu=su("applyAff","Effect.Aff",function(){return{apply:Ir(ho),Functor0:function(){return du}}});var _u=T(Ue);var fe={liftEffect:tu,Monad0:function(){return ho}},Jl=K(fe),gu=function(n){return Al(dn(Jl(n)))};var Cu={parallel:c,sequential:iu,Monad0:function(){return ho},Applicative1:function(){return kl(0)}},kl=su("applicativeParAff","Effect.Aff",function(){return{pure:function(){var n=ie(Cu);return function(r){return n(_u(r))}}(),Apply0:function(){return Ol}}});var Bl=cu(Cu)(Tr);var Vl={append:function(n){return function(r){return function(e){return Bl([n(e),r(e)])}}}};var jl=dn(_u(void 0)),Tu={mempty:jl,Semigroup0:function(){return Vl}};var yu=n=>()=>({subscriptions:new Set,value:n}),Du=n=>r=>()=>{n.value=r(n.value),n.subscriptions.forEach(e=>{e.cleaner(),e.cleaner=e.callback(n.value)()})},xo=n=>()=>n.value,bu=n=>r=>()=>{let e={callback:r,cleaner:r(n.value)()};return n.subscriptions.add(e),()=>{e.cleaner(),n.subscriptions.delete(e)}};var Kl=f(P),Yl=tn(Me),Xl=T(Un),Zl=J(z),np=Fr(Me),rp=q(Bn(Bn(ee)));var zn={map:function(n){return function(r){return{run:function(e){return r.run(function(t){return e(n(t))})},get:Kl(n)(r.get)}}}},Eu=Mr(zn);var Io={apply:function(n){return function(r){return{run:function(e){return n.run(function(t){return r.run(function(o){return e(t(o))})})},get:Yl(n.get)(r.get)}}},Functor0:function(){return zn}},ep=Wn(Io),Mu={bind:function(n){return function(r){return{run:function(e){return n.run(function(t){var o=r(t);return o.run(e)})},get:function(){var t=n.get(),o=r(t);return o.get()}}}},Apply0:function(){return Io}},qe=function(n){return{append:ep(U(n))}},Dr={pure:function(n){return{run:function(r){return r(n)},get:Xl(n)}},Apply0:function(){return Io}},tp=T(Dr);var xt=function(n){var r=qe(n.Semigroup0());return{mempty:tp(q(n)),Semigroup0:function(){return r}}},hu=function(n){return{run:bu(n),get:xo(n)}},It=function(n){var r=K(n);return function(e){return r(e.run(Zl))}},Fu=function(n){var r=M(n.Monad0().Bind1()),e=K(n),t=It(n);return function(o){return r(e(Pr(!0)))(function(a){return t(Eu(o)(function(u){return function(){var i=fr(a)();return i?np(Yn(!1)(a))(rp)():u()}}))})}},wt=function(n){var r=K(n);return function(e){return r(e.get)}},xu=function(n){var r=K(n);return function(e){return r(yu(e))}},Rt=function(n){var r=n.Monad0(),e=M(r.Bind1()),t=xu(n),o=T(r.Applicative0());return function(a){return e(t(a))(function(u){return o(new j(hu(u),u))})}},op=function(n){var r=K(n);return function(e){return function(t){return r(Du(e)(t))}}},wo=function(n){var r=op(n);return function(e){return function(t){return r(e)(dn(t))}}},ap=wo(yr);var Iu=function(n){var r=n.Monad0(),e=M(r.Bind1()),t=xu(n),o=It(n),a=T(r.Applicative0());return function(u){return e(t(void 0))(function(l){return e(o(Eu(u)(function(i){return function(){var h=i();return ap(l)(h.value0)(),h.value1}})))(function(i){return a(new j(hu(l),i))})})}};function Oe(n){return function(){return function(r){return n(r)()}}}function Je(n){return function(r){return function(e){return function(t){return function(){return t.addEventListener(n,r,e)}}}}}function ke(n){return function(r){return function(e){return function(t){return function(){return t.removeEventListener(n,r,e)}}}}}var Nt=Bn(ee),ip=ct(at),fp=Mr(zn);var cp=wo(yr),St=Vn(jn),Ru=K(yr),lp=wn(yt),Lt=f(zn),pp=zt(Mu);var mp=Mn(P),Lu=Zn($e(Nt)(ir));var Ro=Jr(Nt)(ir),Be=We(Nt)(yr),sp=Iu(Be);var le=ue(ip)(gr),dp=M(le),vp=St(le);var Lo=Or(Nt)(Un),_p=T(Lo),Ve=function(n){return n.useHooks},gp=function(n){var r=Mn(n.MonadEffect0().Monad0().Bind1().Apply0().Functor0()),e=Ve(n);return function(t){return r(e(t))}};var br=function(n){return n.useCleaner},Cp=function(n){var r=n.MonadEffect0(),e=r.Monad0(),t=e.Bind1(),o=M(t),a=Rt(r),u=T(e.Applicative0()),l=K(r),i=Fr(t.Apply0()),x=St(t),h=br(n),Y=gp(n);return function(un){return function(X){return o(a(u(void 0)))(function(pr){return o(l(un(function(mr){return cp(pr.value1)(i(X(mr))(u(void 0)))})))(function(mr){return x(h(mr))(function(){return Y(pr.value0)})})})}}},Nu=function(n){var r=Cp(n);return function(e){return function(t){return function(o){var a=function(u){return function(){var i=Ru(Oe(u))();return Ru(Je(t)(i)(!1)(e))(),ke(t)(i)(!1)(e)}};return r(a)(o)}}}};var No=function(n){var r=n.MonadEffect0(),e=r.Monad0(),t=lp(e),o=M(ae(e.Bind1())),a=Xn(He(e)),u=Ve(n),l=bt(r);return{useCleaner:function(){var i=br(n);return function(x){return t(i(x))}}(),useHooks:function(i){return o(a)(function(x){return t(u(Lt(kn(Se)(x))(i)))})},MonadEffect0:function(){return l}}},Su=function(n){var r=n.MonadEffect0(),e=r.Monad0(),t=br(n),o=e.Bind1(),a=Ve(n),u=e.Applicative0();return function(l){var i=xt(l),x=wn(yo(i))(e),h=ue(qe(l.Semigroup0()))(o),Y=M(h),un=St(h),X=Zn($e(i)(e)),pr=T(Or(i)(u)),mr=We(i)(r);return{useCleaner:function(zr){return x(t(zr))},useHooks:function(zr){return Y(x(a(Lt(Ae)(zr))))(function(Gr){return un(X(pp(Lt(cr)(Gr))))(function(){return pr(Lt(Ar)(Gr))})})},MonadEffect0:function(){return mr}}}};var Pu=function(n){var r=K(n);return function(e){return r(Ae(e))}},Hu=Pu(yr),Au=function(n){return mp(Hu(n))},So={useCleaner:function(n){return Lu(n)},useHooks:function(n){return dp(sp(fp(n)(function(r){return Hu(r)})))(function(r){return vp(Lu(r.value1))(function(){return _p(r.value0)})})},MonadEffect0:function(){return Be}};var Wu=function(n){var r=n.MonadEffect0(),e=r.Monad0(),t=e.Bind1(),o=M(t),a=Pu(r),u=St(t),l=br(n),i=T(e.Applicative0());return function(x){return o(a(x))(function(h){return u(l(h.value1))(function(){return i(h.value0)})})}};var Tp=T(Dr),Ho=function(){function n(r,e){this.value0=r,this.value1=e}return n.create=function(r){return function(e){return new n(r,e)}},n}(),$u=function(){function n(r,e){this.value0=r,this.value1=e}return n.create=function(r){return function(e){return new n(r,e)}},n}(),Uu=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}(),pe=function(){return{toAttrValue:b.create}}();var yp=function(n){return n.toAttrValue};var me=function(n){var r=yp(n);return function(e){return function(t){return new Ho(e,Tp(r(t)))}}};var qu=function(n){return n.textSig};var Pt=function(n){return n.el},Ou=function(n){var r=Pt(n);return function(e){return r(e)([])}};var ku=function(n){return Ou(n)("div")},Ht=function(n){return Pt(n)("div")};var Bu=function(n){return Pt(n)("button")};var Dp=me(pe),bp=f(zn),Ep=Z(Yt),Vu=function(n){var r=Bu(n),e=qu(n);return function(t){return r([Dp("class")("square")])(e(bp(Ep)(t.value)))}};var hp=T(Dr),Fp=Vn(jn),Wo=me(pe),xp=function(n){var r=Vu(n);return function(e){return r({value:hp(e)})}},ju=function(n){var r=n.MonadHooks0().MonadEffect0(),e=r.Monad0().Bind1(),t=M(e),o=Rt(r),a=Fp(e),u=ku(n),l=Ht(n),i=xp(n);return t(o(Gt(9)(F.value)))(function(x){return t(o(!0))(function(h){return a(u(l([Wo("class")("board-row")])(a(i(0))(function(){return a(i(1))(function(){return i(2)})}))))(function(){return a(u(l([Wo("class")("board-row")])(a(i(3))(function(){return a(i(4))(function(){return i(5)})}))))(function(){return u(l([Wo("class")("board-row")])(a(i(6))(function(){return a(i(7))(function(){return i(8)})})))})})})})};var At=function(n){return function(r){return r[n]}},wp=At("namespaceURI"),Rp=At("prefix"),Lp=At("localName"),Np=At("tagName");function $o(n){return function(r){return function(e){return function(){e.setAttribute(n,r)}}}}function Uo(n){return function(r){return function(){r.removeAttribute(n)}}}function zu(n,r,e){return n==null?r:e(n)}function qo(n){return n}var Wt=Sr(null)(qo),an=function(n){return zu(n,F.value,b.create)};var $t=function(n){return function(r){return function(){return r[n]}}},Hp=$t("children"),Ap=$t("firstElementChild"),Wp=$t("lastElementChild"),$p=$t("childElementCount");function Ku(n,r,e,t){if(typeof window<"u"){var o=window[e];if(o!=null&&t instanceof o)return r(t)}for(var a=t;a!=null;){var u=Object.getPrototypeOf(a),l=u.constructor.name;if(l===e)return r(t);if(l==="Object")return n;a=u}return n}var s=function(n){return function(r){return Ku(F.value,b.create,n,r)}};var Br=c,Yu=c;var Ut=s("Element");var Gn=function(){return window};function Zu(n){return n.body}function ni(n){return n.readyState}var ze=function(){function n(){}return n.value=new n,n}(),zp=function(){function n(){}return n.value=new n,n}(),Gp=function(){function n(){}return n.value=new n,n}();var ri=function(n){return n==="loading"?new b(ze.value):n==="interactive"?new b(zp.value):n==="complete"?new b(Gp.value):F.value};var ti=f(P);var se=c;var oi=function(n){return ti(function(){var r=Ee(ze.value);return function(e){return r(ri(e))}}())(function(){return ni(n)})};var ai=function(n){return ti(an)(function(){return Zu(n)})};var ii=c;function nr(n){return function(){return n.document}}var mi=c;var ko="DOMContentLoaded";var qt=rr(gr),zm=T(jt),Gm=Vn(jn),Qm=q(Bn(Tu)),Km=Gm(kr),Ym=M(kr),Xm=K(fe),Zm=T(Ue),ns=f(ur),rs=ht(function(n){return function(){var e=Gn(),t=qt(oi)(qt(nr)(Gn))();if(t instanceof ze){var o=mi(e),a=Oe(zm(n(new xn(void 0))))();return Je(ko)(a)(!1)(o)(),gu(ke(ko)(a)(!1)(o))}return n(new xn(void 0))(),Qm()}});var vi=Km(rs)(function(){return Ym(Xm(qt(ai)(qt(nr)(Gn))))(function(n){return Zm(ns(ii)(n))})});var Bo=n=>r=>e=>t=>()=>t.implementation.createDocumentType(n,r,e),Vo=n=>()=>{let r=document.createElement("div");return r.innerHTML=n,Array.from(r.childNodes)},Ot=n=>r=>()=>{let e=Array.from(n.childNodes),t=new Set(r);e.filter(u=>!t.has(u)).forEach(u=>n.removeChild(u));let a=n.firstChild;for(let u of r){if(a===u){a=a.nextSibling;continue}if(a===null){n.appendChild(u);continue}n.insertBefore(u,a)}};var jr=function(n){return function(r){return function(){return r[n]}}},os=jr("URL"),as=jr("documentURI"),us=jr("origin"),is=jr("compatMode"),fs=jr("characterSet"),cs=jr("contentType");var ls=jr("documentElement");function Jt(n){return function(r){return function(){return r.createElement(n)}}}function _i(n){return function(r){return function(e){return function(){return e.createElementNS(n,r)}}}}function jo(n){return function(r){return function(){return r.createTextNode(n)}}}var gi=function(n){return _i(Wt(n))};var zo=function(n){return function(r){return r[n]}},ss=zo("name"),ds=zo("publicId"),vs=zo("systemId");var Ci=c;var Ti=s("DocumentType");var Qn=function(n){return function(r){return function(){return r[n]}}};var gs=Qn("baseURI"),Cs=Qn("ownerDocument"),Ts=Qn("parentNode"),ys=Qn("parentElement");var Ds=Qn("childNodes"),yi=Qn("firstChild"),bs=Qn("lastChild"),Es=Qn("previousSibling"),Di=Qn("nextSibling"),Ms=Qn("nodeValue");var hs=Qn("textContent");function Go(n){return function(r){return function(){r.textContent=n}}}var bi=f(P);var Qo=function(){var n=bi(an);return function(r){return n(Di(r))}}();var Ei=function(){var n=bi(an);return function(r){return n(yi(r))}}();var Ko=c;var Mi=s("Text");var kt=xt(no),Ls=Jr(kt)(Ro),Ns=qe(Xr),ra=Mr(zn),Ii=Vn(jn),ea=q(Bn(Bn(ee))),hi=T(Dr),Fi=M(le),wi=K(Be),Ss=rr(gr),Ps=Ii(le),Ge=f(P),Hs=f(zn),As=po(Un)(Tr);var Ws=Xa($e(kt)(Ro)),Xo=Zn(Ws);var Ke=No(Su(So)(no)),xi=Wu(Ke),$s=Ve(Ke),Ri=bt(We(kt)(Be)),Rn=K(Ri),Us=wt(Ri),qs=He(Ls),Li=Xn(qs);var Ni=ae(ue(Ns)(le)),Tn=M(Ni),de=Ii(Ni);var Os=Dt(Or(kt)(Lo)),Zo=T(Os),ta=function(n){return function(r){var e=It(r),t=Fu(r);return function(o){return o?e:t}}},Js=function(n){var r=n.MonadEffect0(),e=M(r.Monad0().Bind1()),t=ta(n)(r),o=br(n);return function(a){return function(u){return function(l){return e(t(a)(ra(l)(function(i){return function(){return Ot(u)(i)(),ea()}})))(function(i){return o(i)})}}}},ks=Js(So),Bs=function(n){var r=n.MonadEffect0(),e=M(r.Monad0().Bind1()),t=ta(n)(r),o=br(n),a=Nu(n);return function(u){return function(l){return function(i){if(i instanceof Ho)return e(t(u)(ra(i.value1)(function(x){return function(){return function(){if(x instanceof F)return Uo(i.value0)(l)();if(x instanceof b)return $o(i.value0)(x.value0)(l)();throw new Error("Failed pattern match at Jelly.Hydrate (line 43, column 7 - line 45, column 46): "+[x.constructor.name])}(),ea()}})))(function(x){return o(x)});if(i instanceof $u)return a(Yu(l))(i.value0)(i.value1);if(i instanceof Uu)return i.value0(l);throw new Error("Failed pattern match at Jelly.Hydrate (line 40, column 40 - line 51, column 19): "+[i.constructor.name])}}}},Vs=function(n){var r=lr(n.MonadEffect0().Monad0().Applicative0())(Tr),e=Bs(n);return function(t){return function(o){return function(a){return r(e(t)(o))(a)}}}},Yo=Vs(Ke),js=function(n){var r=n.MonadEffect0(),e=M(r.Monad0().Bind1()),t=ta(n)(r),o=br(n);return function(a){return function(u){return function(l){return e(t(a)(ra(l)(function(i){return function(){return Go(i)(Ko(u))(),ea()}})))(function(i){return o(i)})}}}},zs=js(Ke),Qe=function(n){return function(r){return function(e){return Tn(Li)(function(t){return Tn(Rn(fr(t)))(function(o){var a=function(l){return Tn(Rn(e))(function(i){return de(Xo(hi([r(i)])))(function(){return Zo(new j(i,!1))})})};if(o instanceof b){var u=n(o.value0);return u instanceof b?Tn(Rn(Qo(o.value0)))(function(l){return de(Rn(Yn(l)(t)))(function(){return de(Xo(hi([o.value0])))(function(){return Zo(new j(u.value0,!0))})})}):a(!0)}return a(!0)})})}}},na=function(n){return function(r){return Fi(wi(Ss(Pr)(Ei(r))))(function(e){return Fi(Ae(Se(n)(e)))(function(t){return ks(!0)(r)(t.value1)})})}},Si=function(n){return function(r){return Ps(wi(Ot(r)([])))(function(){return na(n)(r)})}},Pi={el:function(n){return function(r){return function(e){return Tn(Rn(Gn))(function(t){return Tn(Rn(Ge(se)(nr(t))))(function(o){return Tn(Qe(Ut)(Br)(Jt(n)(o)))(function(a){return de(xi(na(e)(Br(a.value0))))(function(){return Yo(!a.value1)(a.value0)(r)})})})})}}},elNS:function(n){return function(r){return function(e){return function(t){return Tn(Rn(Gn))(function(o){return Tn(Rn(Ge(se)(nr(o))))(function(a){return Tn(Qe(Ut)(Br)(gi(new b(n))(r)(a)))(function(u){return de(xi(na(t)(Br(u.value0))))(function(){return Yo(!u.value1)(u.value0)(e)})})})})}}}},elVoid:function(n){return function(r){return Tn(Rn(Gn))(function(e){return Tn(Rn(Ge(se)(nr(e))))(function(t){return Tn(Qe(Ut)(Br)(Jt(n)(t)))(function(o){return Yo(!o.value1)(o.value0)(r)})})})}},textSig:function(n){return Tn(Rn(Gn))(function(r){return Tn(Rn(Ge(se)(nr(r))))(function(e){return Tn(Qe(Mi)(Ko)(jo("")(e)))(function(t){return zs(!t.value1)(t.value0)(n)})})})},rawSig:function(n){return Tn(Li)(function(r){return Tn($s(Hs(function(e){return Rn(Vo(e))})(n)))(function(e){var t=function(){var a=fr(r)();if(a instanceof b){var u=Qo(a.value0)();return Yn(u)(r)()}if(a instanceof F)return Yn(F.value)(r)();throw new Error("Failed pattern match at Jelly.Hydrate (line 143, column 9 - line 147, column 47): "+[a.constructor.name])};return Tn(Us(e))(function(o){return de(Rn(As(o)(function(a){return t})))(function(){return Xo(e)})})})})},doctype:function(n){return function(r){return function(e){return Tn(Rn(Gn))(function(t){return Tn(Rn(Ge(se)(nr(t))))(function(o){return Tn(Qe(Ti)(Ci)(Bo(n)(r)(e)(o)))(function(){return Zo(void 0)})})})}}},MonadHooks0:function(){return Ke}};var Hi=me(pe),Qs=K(fe),Ks=lr(Un)(mo),Ys=function(n){var r=Ht(n);return r([Hi("class")("game")])(r([Hi("class")("game-board")])(ju(n)))},Xs=Ys(Pi),Ai=Mo(M(kr)(vi)(function(n){return Qs(Ks(function(){var r=Si(Xs);return function(e){return Au(r(e))}}())(n))}));Ai();})();
