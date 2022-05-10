(function(){"use strict";var t={4678:function(t,e,o){o(6992),o(8674),o(9601),o(7727);var i=o(8935),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("NotificationMovies"),o("LoaderMovie"),o("PosterBG",{attrs:{poster:t.posterBg}}),o("MovieHeader"),o("MoviesList",{attrs:{list:t.moviesList},on:{changePoster:t.onChangePoster}}),o("MoviesPagination",{attrs:{"current-page":t.currentPage,"per-page":t.moviesPerPage,total:t.moviesLength},on:{pageChanged:t.onPageChanged}})],1)},r=[],s=o(4367),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div")},c=[],u=o(4665),l={name:"NotificationMovies",computed:(0,s.Z)({},(0,u.Se)(["messagePool"])),watch:{messagePool:"showNotification"},methods:{showNotification:function(t){var e=t.variant,o=t.msg,i=t.title;this.$bvToast.toast(o,{title:i,variant:e,solid:!0,autoHideDelay:5e3})}}},v=l,m=o(1001),d=(0,m.Z)(v,a,c,!1,null,"e8ecb070",null),f=d.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("BContainer",[o("h3",{staticClass:"List-title"},[t._v(t._s(t.listTitle))]),o("BRow",[t.isExist?t._l(t.list,(function(e,i){return o("BCol",{key:i,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[o("MovieItem",{attrs:{movie:e},on:{removeItem:t.onRemoveItem,showModal:t.onShowMovieInfo},nativeOn:{mouseover:function(o){return t.onMouseOver(e.Poster)}}})],1)})):[o("div",[t._v("Empty List")])]],2),o("BModal",{attrs:{"body-class":"movie-modal-body",id:t.movieInfoModalId,size:"xl","hide-footer":"","hide-header":""}},[o("MovieInfo",{attrs:{movie:t.selectedMovie},on:{closeModal:t.onCloseModal}})],1)],1)},p=[],g=o(6198),_=(o(8975),o(7941),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"movie-item mb-3"},[o("div",{staticClass:"movie-item-poster",style:t.posterBG}),o("div",{staticClass:"movie-item-info-wrap d-flex flex-column justify-content-between"},[o("div",{staticClass:"movie-item-info"},[o("h3",{staticClass:"movie-title"},[t._v(t._s(t.movie.Title))]),o("span",{staticClass:"movie-year"},[t._v(t._s(t.movie.Year))])]),o("div",{staticClass:"movie-item-controls row no-gutters"},[o("div",{staticClass:"col pr-2"},[o("BButton",{staticClass:"block",attrs:{size:"md",block:"",variant:"outline-light"},on:{click:t.showInfoModalEvent}},[t._v("Info")])],1),o("div",{staticClass:"col pl-2"},[o("BButton",{staticClass:"block",attrs:{size:"md",block:"",variant:"outline-light"},on:{click:t.emitRemoveIvent}},[t._v("Remove")])],1)])])])}),M=[],b={name:"MovieItem",props:{movie:{type:Object,required:!0}},computed:{posterBG:function(){return{"background-image":"url(".concat(this.movie.Poster,")")}}},methods:{emitRemoveIvent:function(){this.$emit("removeItem",{id:this.movie.imdbID,title:this.movie.Title})},showInfoModalEvent:function(){this.$emit("showModal",this.movie.imdbID)}}},P=b,C=(0,m.Z)(P,_,M,!1,null,"2ecf6581",null),S=C.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"movie-info-wrap"},[o("header",{staticClass:"movie-info-header"},[o("h6",{staticClass:"movie-info-header-title"},[t._v("Movie view")]),o("BIconX",{staticClass:"movie-info-header-icon",on:{click:t.closeModal}})],1),o("div",{staticClass:"movie-info-content"},[o("BRow",[o("BCol",{attrs:{sm:"4"}},[o("div",{staticClass:"movie-poster-wrap"},[o("div",{staticClass:"movie-poster",style:t.posterStyle})])]),o("BCol",{attrs:{sm:"8"}},[o("h3",{staticClass:"movie-title"},[t._v(t._s(t.movie.Title))]),o("b-form-rating",{staticClass:"movie-rating",attrs:{readonly:"","show-value":"",precision:"1",stars:"10","show-value-max":"","no-border":""},model:{value:t.movie.imdbRating,callback:function(e){t.$set(t.movie,"imdbRating",e)},expression:"movie.imdbRating"}}),o("p",{staticClass:"movie-description"},[t._v(" "+t._s(t.movie.Plot)+" ")]),o("div",{staticClass:"mt-3 mt-4 badges"},[o("div",{staticClass:"mr-2 badge"},[t._v(t._s(t.movie.Year))]),o("div",{staticClass:"mr-2 badge"},[t._v(t._s(t.movie.Runtime))]),o("div",{staticClass:"mr-2 badge"},[t._v(t._s(t.movie.Genre))]),o("div",{staticClass:"mr-2 badge"},[t._v(t._s(t.movie.Language))])]),o("table",{staticClass:"table small"},[o("tbody",[o("tr",[o("th",[t._v("Production")]),o("td",[t._v(t._s(t.movie.Production))])]),o("tr",[o("th",[t._v("Country")]),o("td",[t._v(t._s(t.movie.Country))])]),o("tr",[o("th",[t._v("Director")]),o("td",[t._v(t._s(t.movie.Director))])]),o("tr",[o("th",[t._v("Writer")]),o("td",[t._v(t._s(t.movie.Writer))])]),o("tr",[o("th",[t._v("Actors")]),o("td",[t._v(t._s(t.movie.Actors))])]),o("tr",[o("th",[t._v("Awards")]),o("td",[t._v(t._s(t.movie.Awards))])])])])],1)],1)],1)])},E=[],O={name:"MovieInfo",props:{movie:{type:Object,required:!0}},methods:{closeModal:function(){this.$emit("closeModal")}},data:function(){return{defaultPosterBG:"linear-gradient(45deg,rgb(0, 3, 38) 0%,rgb(82, 15, 117) 100%)"}},computed:{posterStyle:function(){return{"background-image":this.posterBG}},posterBG:function(){return this.movie?"url(".concat(this.movie.Poster,")"):this.defaultPosterBG}}},I=O,y=(0,m.Z)(I,w,E,!1,null,"330caca4",null),L=y.exports,x={name:"MoviesList",components:{MovieItem:S,MovieInfo:L},data:function(){return{movieInfoModalId:"movie-info",selectedMovieID:""}},props:{list:{type:Object,default:function(){return{}}}},computed:(0,s.Z)((0,s.Z)({isExist:function(){return Boolean(Object.keys(this.list).length)}},(0,u.Se)("movies",["isSerach"])),{},{listTitle:function(){return this.isSerach?"Search results":"IMDB Top 250"},selectedMovie:function(){return this.selectedMovieID?this.list[this.selectedMovieID]:null}}),methods:(0,s.Z)((0,s.Z)((0,s.Z)({onMouseOver:function(t){this.$emit("changePoster",t)},onRemoveItem:function(t){var e=this;return(0,g.Z)(regeneratorRuntime.mark((function o(){var i,n,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i=t.id,n=t.title,o.next=3,e.$bvModal.msgBoxConfirm("Delete ".concat(n,"?"));case 3:r=o.sent,r&&(e.removeMovie(i),e.showNotify({msg:"Movie deleted successful",title:"Success",variant:"success"},{root:!0}));case 5:case"end":return o.stop()}}),o)})))()}},(0,u.nv)("movies",["removeMovie"])),(0,u.nv)(["showNotify"])),{},{onShowMovieInfo:function(t){this.$bvModal.show(this.movieInfoModalId),this.selectedMovieID=t,console.log(t)},onCloseModal:function(){this.selectedMovieID=null,this.$bvModal.hide(this.movieInfoModalId)}})},R=x,B=(0,m.Z)(R,h,p,!1,null,"27e6ef43",null),G=B.exports,T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"poster-page-bg",style:t.posterStyle})},Z=[],k={name:"PosterBG",props:{poster:{type:String,default:""}},data:function(){return{defaultPosterBG:"linear-gradient(45deg,rgb(0, 3, 38) 0%,rgb(82, 15, 117) 100%)"}},computed:{posterStyle:function(){return{"background-image":this.posterBG}},posterBG:function(){return this.poster?"url(".concat(this.poster,")"):this.defaultPosterBG}}},D=k,N=(0,m.Z)(D,T,Z,!1,null,"ccfb7344",null),A=N.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isShowLoader?o("div",{staticClass:"loader-wrap"},[o("b-spinner",{staticStyle:{width:"5rem",height:"5rem"},attrs:{type:"grow",variant:"light"}})],1):t._e()},V=[],j={name:"LoaderMovie",computed:(0,s.Z)({},(0,u.Se)(["isShowLoader"]))},H=j,W=(0,m.Z)(H,$,V,!1,null,"c4e7779e",null),Y=W.exports,F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"movies-pagination d-flex"},[o("BPagination",{attrs:{"per-page":t.perPage,"total-rows":t.total,"prev-text":"Prev","next-text":"Next"},model:{value:t.currentPageModel,callback:function(e){t.currentPageModel=e},expression:"currentPageModel"}})],1)},U=[],q=(o(9653),{name:"MoviesPagination",props:{currentPage:{type:Number,default:1},total:{type:Number,default:1},perPage:{type:Number,default:1}},computed:{currentPageModel:{get:function(){return this.currentPage},set:function(t){this.$emit("pageChanged",t)}}}}),z=q,X=(0,m.Z)(z,F,U,!1,null,"5de4ae44",null),J=X.exports,K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("BNavbar",{staticClass:"navbar",attrs:{type:"dark",variant:"dark"}},[o("BContainer",[o("BNavbarBrand",{attrs:{href:"#"}},[t._v("MovieDB")]),o("b-nav-form",[o("b-form-input",{staticClass:"mr-sm-2 search-input",attrs:{placeholder:"Search",debounce:"500"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1)],1)],1)},Q=[],tt={name:"MovieHeader",data:function(){return{searchValue:""}},watch:{searchValue:"onSearchValueChange"},methods:(0,s.Z)((0,s.Z)({},(0,u.nv)("movies",["searchMovies","fetchMovies","toggleSearchState"])),{},{onSearchValueChange:function(t){t?(this.searchMovies(t),this.toggleSearchState(!0)):(this.fetchMovies(),this.toggleSearchState(!1))}})},et=tt,ot=(0,m.Z)(et,K,Q,!1,null,"f225943a",null),it=ot.exports,nt={name:"App",components:{MoviesList:G,PosterBG:A,MoviesPagination:J,LoaderMovie:Y,MovieHeader:it,NotificationMovies:f},data:function(){return{posterBg:""}},mounted:function(){},methods:(0,s.Z)((0,s.Z)({},(0,u.nv)("movies",["changeCurrentPage"])),{},{onChangePoster:function(t){this.posterBg=t},onPageChanged:function(t){this.changeCurrentPage(t)}}),computed:(0,s.Z)({},(0,u.Se)("movies",["moviesList","moviesPerPage","currentPage","moviesLength"]))},rt=nt,st=(0,m.Z)(rt,n,r,!1,null,null,null),at=st.exports,ct=o(3796),ut=(o(1539),o(7042),o(561),o(1249),o(8783),o(3948),o(4553),o(1703),o(6166)),lt=o.n(ut);function vt(t){var e=t.params||{};return t.params=Object.assign(e,{apikey:"3350e7a",plot:"full"}),t}function mt(t){return t.data}function dt(t){t.interceptors.request.use(vt),t.interceptors.response.use(mt)}var ft=lt().create({baseURL:"http://www.omdbapi.com"});dt(ft);var ht,pt=ft,gt=["tt0111161","tt0068646","tt0071562","tt0468569","tt0050083","tt0108052","tt0167260","tt0110912","tt0060196","tt0137523","tt0120737","tt0109830","tt0080684","tt1375666","tt0167261","tt0073486","tt0099685","tt0133093","tt0047478","tt0114369","tt0317248","tt0076759","tt0102926","tt0038650","tt0118799","tt4633694","tt0114814","tt0245429","tt0120815","tt0110413","tt0120689","tt0816692","tt0054215","tt0120586","tt0021749","tt0064116","tt0034583","tt0027977","tt0253474","tt1675434","tt0407887","tt0088763","tt0103064","tt2582802","tt0047396","tt0082971","tt0110357","tt0172495","tt0482571","tt0078788","tt0209144","tt0078748","tt0095765","tt0032553","tt0095327","tt0043014","tt0405094","tt0057012","tt4154756","tt0050825","tt0081505","tt1853728","tt0910970","tt0119698","tt0051201","tt0364569","tt1345836","tt0169547","tt0090605","tt0087843","tt2380307","tt0082096","tt0033467","tt0112573","tt0052357","tt0053125","tt0105236","tt0086190","tt5311514","tt0022100","tt0086879","tt5074352","tt0180093","tt0986264","tt0056172","tt1187043","tt0338013","tt0062622","tt0066921","tt0114709","tt0211915","tt0036775","tt0045152","tt0075314","tt0361748","tt0093058","tt0040522","tt0056592","tt0012349","tt0070735","tt0119217","tt0435761","tt2106476","tt0208092","tt0086250","tt0071853","tt0059578","tt0053604","tt0017136","tt0119488","tt1832382","tt0097576","tt0042876","tt1049413","tt0042192","tt0372784","tt0055630","tt0053291","tt0105695","tt0363163","tt0095016","tt0040897","tt0113277","tt8108198","tt0044741","tt1255953","tt0081398","tt0057115","tt0118849","tt0457430","tt0476735","tt0071315","tt0041959","tt0096283","tt0347149","tt0089881","tt0055031","tt1305806","tt0015864","tt0050212","tt0268978","tt1727824","tt0120735","tt0112641","tt0047296","tt5027774","tt0050976","tt2096673","tt0080678","tt0993846","tt3170832","tt0434409","tt0031679","tt1291584","tt0083658","tt0046912","tt0050986","tt0017925","tt0477348","tt0117951","tt0469494","tt0167404","tt0031381","tt0084787","tt0116282","tt1205489","tt0077416","tt0266543","tt0091251","tt0015324","tt0118715","tt1130884","tt0266697","tt0061512","tt0032976","tt0046438","tt0978762","tt2119532","tt2267998","tt0892769","tt0018455","tt3011894","tt0107290","tt0758758","tt0120382","tt0107207","tt2278388","tt0025316","tt0079470","tt0092005","tt0091763","tt0079944","tt0116231","tt0074958","tt0353969","tt0060827","tt0052618","tt0395169","tt2024544","tt0405159","tt0060107","tt0019254","tt0046268","tt0112471","tt1979320","tt1392190","tt0053198","tt1392214","tt1028532","tt1895587","tt3315342","tt0245712","tt0405508","tt0093779","tt0264464","tt0087544","tt1201607","tt0064115","tt0075148","tt0072684","tt0198781","tt0032551","tt0033870","tt0097165","tt0088247","tt0246578","tt0083987","tt0046911","tt0113247","tt0107048","tt0050783","tt0032138","tt0118694","tt0073195","tt1454029","tt4016934","tt2991224","tt4430212","tt0056443","tt0381681","tt0070510","tt0087884","tt0092067","tt1954470","tt0036868","tt0083922","tt2338151","tt2015381","tt0169102","tt0056801"],_t={MOVIES:"MOVIES",CURRENT_PAGE:"CURRENT_PAGE",TOGGLE_LOADER:"TOGGLE_LOADER",REMOVE_MOVIE:"REMOVE_MOVIE",TOGGLE_SEARCH:"TOGGLE_SEARCH",SHOW_TOAST_NOTIFY:"SHOW_TOAST_NOTIFY"};function Mt(t){return t.reduce((function(t,e){return t[e.imdbID]=e,t}),{})}var bt=_t.MOVIES,Pt=_t.CURRENT_PAGE,Ct=_t.REMOVE_MOVIE,St=_t.TOGGLE_SEARCH,wt={namespaced:!0,state:{top250IDs:gt,moviesPerPage:12,currentPage:1,movies:{},isSerach:!1},getters:{moviesList:function(t){var e=t.movies;return e},slicedIDs:function(t){var e=t.top250IDs;return function(t,o){return e.slice(t,o)}},currentPage:function(t){var e=t.currentPage;return e},moviesPerPage:function(t){var e=t.moviesPerPage;return e},moviesLength:function(t){var e=t.top250IDs;return Object.keys(e).length},isSerach:function(t){var e=t.isSerach;return e}},mutations:(ht={},(0,ct.Z)(ht,bt,(function(t,e){t.movies=e})),(0,ct.Z)(ht,Pt,(function(t,e){t.currentPage=e})),(0,ct.Z)(ht,Ct,(function(t,e){t.top250IDs.splice(e,1)})),(0,ct.Z)(ht,St,(function(t,e){t.isSerach=e})),ht),actions:{initMoviesStore:{handler:function(t){var e=t.dispatch;e("fetchMovies")},root:!0},fetchMovies:function(t){return(0,g.Z)(regeneratorRuntime.mark((function e(){var o,i,n,r,s,a,c,u,l,v,m,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.getters,i=t.commit,n=t.dispatch,e.prev=1,n("toggleLoader",!0,{root:!0}),r=o.currentPage,s=o.moviesPerPage,a=o.slicedIDs,c=r*s-s,u=r*s,l=a(c,u),v=l.map((function(t){return pt.get("/?i=".concat(t))})),e.next=10,Promise.all(v);case 10:m=e.sent,d=Mt(m),i(bt,d),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](1),console.log(e.t0);case 18:return e.prev=18,n("toggleLoader",!1,{root:!0}),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,15,18,21]])})))()},changeCurrentPage:function(t,e){var o=t.commit,i=t.dispatch;o("CURRENT_PAGE",e),i("fetchMovies")},removeMovie:function(t,e){var o=t.commit,i=t.dispatch,n=t.state,r=n.top250IDs.findIndex((function(t){return t===e}));-1!==r&&(o("REMOVE_MOVIE",r),i("fetchMovies"))},searchMovies:function(t,e){return(0,g.Z)(regeneratorRuntime.mark((function o(){var i,n,r,s;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i=t.commit,n=t.dispatch,o.prev=1,n("toggleLoader",!0,{root:!0}),o.next=5,pt.get("/?s=".concat(e));case 5:if(r=o.sent,!r.Error){o.next=8;break}throw Error(r.Error);case 8:s=Mt(r.Search),i("MOVIES",s),o.next=16;break;case 12:o.prev=12,o.t0=o["catch"](1),n("showNotify",{msg:o.t0.message,title:"Error",variant:"danger"},{root:!0}),console.log(o.t0.message);case 16:return o.prev=16,n("toggleLoader",!1,{root:!0}),o.finish(16);case 19:case"end":return o.stop()}}),o,null,[[1,12,16,19]])})))()},toggleSearchState:function(t,e){var o=t.commit;o("TOGGLE_SEARCH",e)}},modules:{}},Et=wt,Ot=_t.TOGGLE_LOADER,It={state:{isShowLoader:!1},getters:{isShowLoader:function(t){var e=t.isShowLoader;return e}},mutations:(0,ct.Z)({},Ot,(function(t,e){t.isShowLoader=e})),actions:{toggleLoader:function(t,e){var o=t.commit;o("TOGGLE_LOADER",e)}}},yt=It,Lt=_t.SHOW_TOAST_NOTIFY,xt={state:{messagePool:[]},getters:{messagePool:function(t){var e=t.messagePool;return e[e.length-1]}},mutations:(0,ct.Z)({},Lt,(function(t,e){t.messagePool.push(e)})),actions:{showNotify:function(t,e){var o=t.commit;o("SHOW_TOAST_NOTIFY",e)}}},Rt=xt;i["default"].use(u.ZP);var Bt=new u.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{movies:Et,loader:yt,notification:Rt}});Bt.dispatch("initMoviesStore");var Gt=Bt,Tt=o(8262),Zt=o(3266);o(44);i["default"].use(Tt.XG7),i["default"].use(Zt.A7),new i["default"]({store:Gt,render:function(t){return t(at)}}).$mount("#app")}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={id:i,loaded:!1,exports:{}};return t[i](r,r.exports,o),r.loaded=!0,r.exports}o.m=t,function(){var t=[];o.O=function(e,i,n,r){if(!i){var s=1/0;for(l=0;l<t.length;l++){i=t[l][0],n=t[l][1],r=t[l][2];for(var a=!0,c=0;c<i.length;c++)(!1&r||s>=r)&&Object.keys(o.O).every((function(t){return o.O[t](i[c])}))?i.splice(c--,1):(a=!1,r<s&&(s=r));if(a){t.splice(l--,1);var u=n();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[i,n,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,r,s=i[0],a=i[1],c=i[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(c)var l=c(o)}for(e&&e(i);u<s.length;u++)r=s[u],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(l)},i=self["webpackChunkmovies_app"]=self["webpackChunkmovies_app"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(4678)}));i=o.O(i)})();
//# sourceMappingURL=app-legacy.d0acf517.js.map