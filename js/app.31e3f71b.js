(function(){"use strict";var e={4304:function(e,t,o){var a=o(9242),i=o(3396);const n={class:"wrap"},l={class:"container"};function r(e,t,o,a,r,s){const c=(0,i.up)("ModalView"),d=(0,i.up)("HeaderView"),u=(0,i.up)("RouterView");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(c),(0,i._)("div",n,[(0,i.Wm)(d),(0,i._)("div",l,[(0,i.Wm)(u,{onHide:a.hideIntro},null,8,["onHide"])])])],64)}var s=o(4870),c=o(65);const d=e=>((0,i.dD)("data-v-b087c48e"),e=e(),(0,i.Cn)(),e),u={class:"header"},p=d((()=>(0,i._)("div",{class:"logo-wrap"},[(0,i._)("a",{href:"https://www.ghibli.jp/",target:"_blank"})],-1))),v=d((()=>(0,i._)("h2",null,"Studio Ghibli",-1))),m=[p,v];function f(e,t,o,a,n,l){return(0,i.wg)(),(0,i.iD)("header",u,m)}var g={},h=o(89);const b=(0,h.Z)(g,[["render",f],["__scopeId","data-v-b087c48e"]]);var w=b;const _={class:"modal-wrap"},I=(0,i.uE)('<div class="modal-main" data-v-4b7e1843><div class="modal-up" data-v-4b7e1843><span class="btn1" data-v-4b7e1843></span><span class="btn2" data-v-4b7e1843></span><span class="btn3" data-v-4b7e1843></span></div><div class="modal-bottom" data-v-4b7e1843><h1 data-v-4b7e1843>Ghibli API 스터디</h1><p class="modal-desc" data-v-4b7e1843> 이 사이트는 <span class="checkfont" data-v-4b7e1843>스터디용</span>으로 제작되었습니다. </p><p class="modal-chrome" data-v-4b7e1843> 본 사이트는 <span class="checkfont" data-v-4b7e1843>Chrome</span> 에 최적화되어 있습니다.😊 </p><p class="modal-study" data-v-4b7e1843> 1. ghibli 오픈 api 활용 하였습니다.<br data-v-4b7e1843> 2. router, route 에 대해서 공부하였습니다.<br data-v-4b7e1843></p><button class="modal-close" data-v-4b7e1843> CLOSE </button><p class="warning" data-v-4b7e1843> 해당 사이트 관련 문제 사항이 있으시면 연락 부탁드립니다. </p></div></div>',1),k=[I];function y(e,t,o,a,n,l){return(0,i.wg)(),(0,i.iD)("div",_,k)}var M=o(7387),O=o.n(M),S={setup(){return(0,i.bv)((()=>{let e=O()(".modal-wrap"),t=O()(".modal-close");t.click((function(){e.stop().fadeOut(500)}));let o=O()(".modal-main");o.click((function(e){e.stopPropagation()})),e.click((function(){e.stop().fadeOut(500)})),O()("html").keydown((function(t){13==t.keyCode&&(e.stop().fadeOut(200),O()("html").css("overflow","auto"))}))})),{}}};const T=(0,h.Z)(S,[["render",y],["__scopeId","data-v-4b7e1843"]]);var D=T,L={components:{HeaderView:w,ModalView:D},setup(){const e=(0,c.oR)();e.dispatch("fetchMovieList");const t=(0,s.iH)(!0),o=()=>{t.value=!1,document.querySelector("html").style.overflowY="auto"};return{show:t,hideIntro:o}}};const U=(0,h.Z)(L,[["render",r]]);var z=U,C=o(2483);function E(e,t,o,a,n,l){const r=(0,i.up)("MovieList"),s=(0,i.up)("swiper-slide"),c=(0,i.up)("Swiper");return(0,i.wg)(),(0,i.j4)(c,{effect:"cards",grabCursor:!0,modules:a.modules,class:"sw-movie"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.movieList,((e,t)=>((0,i.wg)(),(0,i.j4)(s,{class:"movie",key:t},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{propsdata:e},null,8,["propsdata"])])),_:2},1024)))),128))])),_:1},8,["modules"])}var j=o(5032),H=o(3489),P=o(7139);const V=e=>((0,i.dD)("data-v-76fcaef0"),e=e(),(0,i.Cn)(),e),x={class:"movie-box"},N={class:"movie-title"},R={class:"a-img"},q=["src"],Z={class:"a-title"},F={class:"a-desc"},Y={class:"a-desc-list"},W=V((()=>(0,i._)("br",null,null,-1))),J=V((()=>(0,i._)("br",null,null,-1))),A=V((()=>(0,i._)("br",null,null,-1)));function $(e,t,o,n,l,r){return(0,i.wg)(),(0,i.iD)("div",x,[(0,i._)("a",{onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>n.detailMove&&n.detailMove(...e)),["stop"]))},[(0,i._)("p",N,(0,P.zw)(o.propsdata.title),1),(0,i._)("div",R,[(0,i._)("img",{src:o.propsdata.image},null,8,q)]),(0,i._)("h2",Z,[(0,i.Uk)((0,P.zw)(o.propsdata.title),1),(0,i._)("small",null,(0,P.zw)(o.propsdata.original_title),1)]),(0,i._)("p",F,(0,P.zw)(o.propsdata.description),1)]),(0,i._)("p",Y,[(0,i.Uk)(" Release Date : "+(0,P.zw)(o.propsdata.release_date)+"년",1),W,(0,i.Uk)(" Director : "+(0,P.zw)(o.propsdata.director),1),J,(0,i.Uk)(" Producer : "+(0,P.zw)(o.propsdata.producer),1),A,(0,i.Uk)(" Running Time : "+(0,P.zw)(o.propsdata.running_time)+"분 ",1)]),(0,i._)("i",{class:(0,P.C_)(["fas fa-check check-bt",{movieComplete:o.propsdata.complete}]),onClick:t[1]||(t[1]=e=>n.updateMemo(o.propsdata))},null,2)])}var G={props:["propsdata"],setup(e){const t=(0,C.tv)(),o=()=>{t.push("/page-ghibli/detail/"+e.propsdata.id)},a=e=>{console.log("id값",e.id)};return{detailMove:o,updateMemo:a}}};const K=(0,h.Z)(G,[["render",$],["__scopeId","data-v-76fcaef0"]]);var B=K,Q={components:{MovieList:B,Swiper:j.tq,SwiperSlide:j.o5},setup(e,t){const o=(0,c.oR)(),a=(0,i.Fl)((()=>o.getters.getMovieList)),n=(0,s.iH)(null);(0,i.bv)((()=>{})),(0,i.ic)((()=>{let e=setTimeout((()=>{clearTimeout(e),t.emit("hide")}),1500)}));const l=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"});const e=document.querySelector(".gotop"),t=window.scrollY;e.style.opacity=t<400?"1":"0";let o=setTimeout((()=>{clearTimeout(o),e.style.opacity="1"}),3e3);console.log(t)};return{movieList:a,gotop:n,moveTop:l,modules:[H.c4]}}};const X=(0,h.Z)(Q,[["render",E],["__scopeId","data-v-152eb56c"]]);var ee=X;const te=e=>((0,i.dD)("data-v-376ee501"),e=e(),(0,i.Cn)(),e),oe={class:"movie-box"},ae=te((()=>(0,i._)("i",{class:"fas fa-long-arrow-left"},null,-1))),ie=[ae],ne={class:"movie-detail"},le=["src"],re={class:"movie-info-wrap"},se={class:"movie-title"},ce={class:"movie-info"},de=te((()=>(0,i._)("br",null,null,-1))),ue=te((()=>(0,i._)("br",null,null,-1))),pe=te((()=>(0,i._)("br",null,null,-1))),ve={class:"movie-desc"},me={key:0,class:"detail-intro"};function fe(e,t,o,n,l,r){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",oe,[(0,i._)("a",{class:"a-back",onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>n.back&&n.back(...e)),["stop"]))},ie),(0,i._)("div",ne,[(0,i._)("img",{class:"movie-image",src:n.movieInfo.image},null,8,le),(0,i._)("div",re,[(0,i._)("h2",se,[(0,i.Uk)((0,P.zw)(n.movieInfo.title)+" ",1),(0,i._)("small",null,(0,P.zw)(n.movieInfo.original_title),1)]),(0,i._)("p",ce,[(0,i.Uk)(" Release Date : "+(0,P.zw)(n.movieInfo.release_date)+"년",1),de,(0,i.Uk)(" Director : "+(0,P.zw)(n.movieInfo.director),1),ue,(0,i.Uk)(" Producer : "+(0,P.zw)(n.movieInfo.producer),1),pe,(0,i.Uk)(" Running Time : "+(0,P.zw)(n.movieInfo.running_time)+"분 ",1)]),(0,i._)("p",ve,(0,P.zw)(n.movieInfo.description),1)])])]),(0,i.Wm)(a.uT,{name:"fade"},{default:(0,i.w5)((()=>[n.show?((0,i.wg)(),(0,i.iD)("div",me)):(0,i.kq)("",!0)])),_:1})])}var ge={setup(e,t){const o=(0,C.yj)(),a=o.params.id,n=(0,c.oR)();n.dispatch("fetchMovieInfo",a);const l=(0,i.Fl)((()=>n.getters.getMovieInfo)),r=(0,C.tv)(),d=()=>{const e=setTimeout((()=>{clearTimeout(e),r.push("/page-ghibli/")}),1e3);document.querySelector(".a-back").style.border="1px solid rgba(0, 0, 0, 0)"},u=(0,s.iH)(!0);(0,i.bv)((()=>{window.scrollTo(0,0),document.querySelector("html").style.overflowY="hidden"})),(0,i.ic)((()=>{document.querySelector("html").style.overflowY="auto",t.emit("hide")}));const p=setTimeout((()=>{clearTimeout(p),u.value=!1}),1500);return{id:a,movieInfo:l,back:d,show:u}}};const he=(0,h.Z)(ge,[["render",fe],["__scopeId","data-v-376ee501"]]);var be=he;const we=(0,i._)("label",null,"페이지를 찾을 수 없습니다.",-1),_e=[we];function Ie(e,t,o,a,n,l){return(0,i.wg)(),(0,i.iD)("div",null,_e)}var ke={setup(e,t){return t.emit("hide"),{}}};const ye=(0,h.Z)(ke,[["render",Ie]]);var Me=ye;const Oe=(0,C.p7)({history:(0,C.PO)(),routes:[{path:"/page-ghibli/home",redirect:"/"},{path:"/page-ghibli/",component:ee},{path:"/page-ghibli/detail/:id",component:be},{path:"/page-ghibli/404",name:"notFound",component:Me},{path:"/:pathMatch(.*)*",redirect:"/page-ghibli/404"}]});var Se=Oe,Te=o(6265),De=o.n(Te);const Le={baseUrl:"https://ghibliapi.herokuapp.com"};function Ue(){return De().get(`${Le.baseUrl}/films`)}function ze(e){return De().get(`${Le.baseUrl}/films/${e}`)}const Ce={getData(){const e=[],t=localStorage.length;if(t>0)for(let o=0;o<t;o++){let t=localStorage.getItem(localStorage.key(o));e.push(JSON.parse(t))}return e}};var Ee=(0,c.MT)({state:{movieList:[],movieInfo:{},movieLocal:Ce.getData()},actions:{fetchMovieList({commit:e}){Ue().then((t=>{e("MOVIE_LIST_INIT",t.data)})).catch((e=>console.log(e)))},fetchMovieInfo({commit:e},t){ze(t).then((t=>{e("MOVIE_INFO",t.data),console.log("id를 받아오나",t.data)})).catch((e=>console.log(e)))},fetchUpdateMemo({commit:e},t){e("UPDATE_MEMO",t),console.log("객체",t)}},mutations:{MOVIE_LIST_INIT(e,t){e.movieList=t},MOVIE_INFO(e,t){e.movieInfo=t},UPDATE_MEMO(e,t){console.log("state",e),console.log("payload",t);let o={id:t.id,complete:!1};localStorage.setItem(o.id,JSON.stringify(o)),e.movieLocal.push(o),e.movieLocal[t.id]=!e.movieLocal[t.id],localStorage.setItem(t.id,JSON.stringify(t)),localStorage.removeItem(t.id),localStorage.setItem(t.id,JSON.stringify(t.item))}},getters:{getMovieList(e){return e.movieList},getMovieInfo(e){return e.movieInfo}}});(0,a.ri)(z).use(Se).use(Ee).mount("#app")}},t={};function o(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,a,i,n){if(!a){var l=1/0;for(d=0;d<e.length;d++){a=e[d][0],i=e[d][1],n=e[d][2];for(var r=!0,s=0;s<a.length;s++)(!1&n||l>=n)&&Object.keys(o.O).every((function(e){return o.O[e](a[s])}))?a.splice(s--,1):(r=!1,n<l&&(l=n));if(r){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,i,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,n,l=a[0],r=a[1],s=a[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)o.o(r,i)&&(o.m[i]=r[i]);if(s)var d=s(o)}for(t&&t(a);c<l.length;c++)n=l[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},a=self["webpackChunkghibli"]=self["webpackChunkghibli"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(4304)}));a=o.O(a)})();
//# sourceMappingURL=app.31e3f71b.js.map