(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{104:function(e,a,t){},109:function(e,a,t){},110:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){},119:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(8),l=t.n(n),i=(t(86),t(54)),s=t(11),o=(t(87),t(7)),m=t(14),_=t(6),u=Object(c.createContext)(),d={tracks:[],searchedTracks:[],currentTrack:{},loading:!1,status:"out-of-sync",error:null,filterUsed:!1,searchUsed:!1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_TRACKS":e=Object(_.a)(Object(_.a)({},e),{},{tracks:e.tracks.concat(a.payload)});break;case"EMPTY_TRACKS":e=Object(_.a)(Object(_.a)({},e),{},{tracks:d.tracks});break;case"PLAY_TRACK":e=Object(_.a)(Object(_.a)({},e),{},{currentTrack:Object(_.a)({},a.payload)});break;case"SET_TRACK_DURATION":e=Object(_.a)(Object(_.a)({},e),{},{currentTrack:Object(_.a)(Object(_.a)({},e.currentTrack),{},{duration:a.payload})});break;case"START":e=Object(_.a)(Object(_.a)({},e),{},{loading:!0});break;case"COMPLETE":e=Object(_.a)(Object(_.a)({},e),{},{loading:!1});break;case"SYNCED":e=Object(_.a)(Object(_.a)({},e),{},{status:"synced"});break;case"NOT-SYNCED":e=Object(_.a)(Object(_.a)({},e),{},{status:"out-of-sync"});break;case"FILTER_USED":e=Object(_.a)(Object(_.a)({},e),{},{filterUsed:a.payload});break;case"SEARCH_USED":e=Object(_.a)(Object(_.a)({},e),{},{searchUsed:a.payload});break;case"SEARCHED_TRACKS":e=Object(_.a)(Object(_.a)({},e),{},{searchedTracks:Object(m.a)(a.payload)});break;default:e=e}return Object(_.a)({},e)},b=function(e){var a=Object(c.useReducer)(p,d),t=Object(o.a)(a,2),n=t[0],l=t[1];return r.a.createElement(u.Provider,{value:[n,l]},e.children)},y=t(151),f=t(35),E=t.n(f),k=t(155),v=t(163),O=(t(104),t(74)),h=t(27),j=t(22),g=(t(109),function(e){var a=e.title,t=e.album,n=Object(O.a)(e,["title","album"]),l=Object(c.useContext)(u),i=Object(o.a)(l,2),s=i[0],m=i[1],d=Object(c.useState)(!1),p=Object(o.a)(d,2),b=p[0],y=p[1],f=Object(c.useState)("visible"),k=Object(o.a)(f,2),v=k[0],g=k[1],T=Object(c.useState)(j.b),N=Object(o.a)(T,2),C=N[0],S=N[1],w=Object(c.useRef)(),A=Object(c.useRef)();Object(c.useEffect)((function(){s.currentTrack&&w.current&&(s.currentTrack._id===w.current.id?(y(!0),S(j.f),g("hidden")):(y(!1),S(j.b),g("visible")))}),[s.currentTrack]);return r.a.createElement("div",{className:"media-player__music-player__music-tracks"},r.a.createElement("div",{className:"media-player__music-player__music-tracks__container"},r.a.createElement("div",{className:"media-player__music-player__music-tracks__container__album"}),r.a.createElement("div",{className:"media-player__music-player__music-tracks__container__track-info"},r.a.createElement("div",{className:"media-player__music-player__music-tracks__container__track-info__title"},a),r.a.createElement("div",{className:"media-player__music-player__music-tracks__container__track-info__audio-length"},t)),r.a.createElement("button",{className:"media-player__music-player__music-tracks__container__remove-button",id:n._id,onClick:function(){var e;e=A.current.id,E.a.delete("http://localhost:3001/api/track/".concat(e)).then((function(e){m({type:"NOT-SYNCED"})})).catch((function(e){throw e}))},disabled:b,ref:A},r.a.createElement(h.a,{visibility:v,id:"play-button",icon:j.e,color:"grey"})),r.a.createElement("button",{className:"media-player__music-player__music-tracks__container__play-button",id:n._id,onClick:function(){var e;e=Object(_.a)({title:a,album:t},n),m({type:"PLAY_TRACK",payload:e})},disabled:b,ref:w},r.a.createElement(h.a,{id:"play-button",icon:C,color:"#a237f3"}))))}),T=t(70);t(110);var N=function(e){var a=e.title,t=e.album,n=Object(c.useContext)(u),l=Object(o.a)(n,2),i=l[0],s=l[1],m=Object(c.useState)(!0),d=Object(o.a)(m,2),p=d[0],b=d[1],f=Object(c.useState)(!1),E=Object(o.a)(f,2),k=E[0],v=E[1],O=Object(c.useState)(!1),g=Object(o.a)(O,2),N=g[0],C=g[1],S=Object(c.useState)(0),w=Object(o.a)(S,2),A=w[0],R=w[1],x=k?"grey":"#a237f3",D=p?"grey":"#a237f3",L=Object(c.useRef)(),P=Object(c.useRef)(),U=Object(c.useRef)(),K=function(){b(!0),v(!1),L.current.pause()},M=function(e){var a=1e3*e,t=a?Math.floor(a/6e4):"-",c=a?(a%6e4/1e3).toFixed(0):"--";return"".concat(t,":").concat(c<10?"0":"").concat(c)},Y=M(A),I=M(i.currentTrack.duration),F=document.querySelector("progress");Object(c.useEffect)((function(){F&&F.addEventListener("click",H)}),[F]),Object(c.useEffect)((function(){L.current.onloadedmetadata=function(e){s({type:"SET_TRACK_DURATION",payload:L.current.duration})},L.current.ontimeupdate=function(){q()},i.currentTrack.duration?(b(!0),v(!1)):(b(!0),v(!0))}),[s,i.currentTrack.duration]);var q=function(){R(L.current.currentTime)};function H(e){var a=e.offsetX/this.offsetWidth;L.current.currentTime>0&&(L.current.currentTime=a*L.current.duration,P.current.value=a/100)}return r.a.createElement("div",{className:"media-player__music-player__music-view"},r.a.createElement("div",{className:"media-player__music-player__music-view__container"},r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:12,md:3,lg:2},r.a.createElement("div",{className:"media-player__music-player__music-view__container__album"})),r.a.createElement(y.a,{item:!0,xs:12,md:9,lg:10},r.a.createElement("div",{className:"media-player__music-player__music-view__container__track-info"},r.a.createElement("div",{className:"media-player__music-player__music-view__container__track-info__title"},a),r.a.createElement("div",{className:"media-player__music-player__music-view__container__track-info__subtitle"},t),i.tracks&&i.tracks.length>1&&r.a.createElement(h.a,{style:{marginTop:"1rem"},icon:j.d,color:"#a237f3",onClick:function(){var e,a=i.tracks[Math.floor(Math.random()*i.tracks.length)];a._id&&(e=Object(_.a)({title:a.label,album:a.album},a),s({type:"PLAY_TRACK",payload:e}),v(!1))}}),r.a.createElement(y.a,{item:!0,md:12},r.a.createElement("progress",{ref:P,className:"media-player__music-player__music-view__container__track-info__progress-bar",id:"audio-progress",value:A,max:i.currentTrack.duration&&i.currentTrack.duration}),r.a.createElement("audio",{className:"media-player__music-player__music-view__container__track-info__audio",src:i.currentTrack.fileLocation&&"http://localhost:3001/".concat(i.currentTrack.fileLocation),ref:L,type:i.currentTrack.fileType&&i.currentTrack.fileType})),r.a.createElement("div",{className:"media-player__music-player__music-view__container__track-info__timing"},r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement("div",{className:"media-player__music-player__music-view__container__track-info__timing__minutes"},Y)),r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement("div",{className:"media-player__music-player__music-view__container__track-info__timing__seconds"},I))),N&&r.a.createElement("div",{className:"media-player__music-player__music-view__container__track-info__idle-warning"},"You have been idle for 30 seconds or longer so we have just paused your track for you"))),r.a.createElement("hr",null),r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement("div",{className:"media-player__music-player__music-view__container__controls"},r.a.createElement("button",{disabled:k,className:"media-player__music-player__music-view__container__controls__play",onClick:function(){return v(!0),b(!1),C(!1),void L.current.play()}},r.a.createElement(h.a,{icon:j.b,color:x})),r.a.createElement("button",{disabled:p,className:"media-player__music-player__music-view__container__controls__pause",onClick:function(){return K()}},r.a.createElement(h.a,{icon:j.a,color:D})),r.a.createElement(T.a,{ref:U,element:document,timeout:3e4,onIdle:function(){i.currentTrack&&i.currentTrack.fileLocation&&!p&&(C(!0),U.current.reset(),K())}}))))))},C=t(33);t(113),t(114);var S=function(e){var a=e.label,t=e.name,c=e.type,n=e.labelClass,l=e.inputClass,i=e.register,s=e.validation,o=e.errors,m=e.accepts;return r.a.createElement("div",{className:"media-player__form__input"},r.a.createElement("label",{htmlFor:t,className:"media-player__form__input__label ".concat(n)},a),r.a.createElement("br",null),r.a.createElement("input",{type:c,name:t,className:"media-player__form__input__".concat(c," ").concat(l),accept:m,ref:i(Object(_.a)({},s))}),o&&o.hasOwnProperty(t)&&r.a.createElement("div",{className:"media-player__form__input__error-message"},r.a.createElement(C.b,{errors:o,name:t})))};t(115);var w=function(e){var a=e.name,t=e.label,c=e.accept,n=e.register,l=e.labelClass,i=e.validation,s=e.onChange,o=document.querySelector(".media-player__form__file-input");return r.a.useEffect((function(){o&&function(e){var a=e.querySelector('[type="file"]'),t=e.querySelector("[data-js-label]");a.onchange=a.onmouseout=function(){if(a.value){var c=a.value.replace(/^.*[\\/]/,"");a.setAttribute("value",a.value.replace(/C:\\fakepath\\/g,"")),e.className+=" -chosen",t.innerText=c}}}(o)}),[o]),r.a.createElement("div",{className:"media-player__form__file-input"},r.a.createElement("label",{htmlFor:a,className:"media-player__form__input__label ".concat(l)},t),r.a.createElement("br",null),r.a.createElement("input",{type:"file",name:a,id:"track",accept:c,ref:n(Object(_.a)({},i)),onChange:s}),r.a.createElement("span",{className:"button"},"Choose"),r.a.createElement("span",{className:"label","data-js-label":!0},"No file selected"))},A=function(e){var a=e.onDismiss,t=Object(C.c)({mode:"onChange"}),n=t.register,i=t.control,s=t.handleSubmit,m=t.errors,_=Object(c.useContext)(u),d=Object(o.a)(_,2)[1];return l.a.createPortal(r.a.createElement("form",{onSubmit:s((function(e){var t=new FormData;t.set("label",e.label),t.set("album",e.album),t.append("track",e.track[0]),E.a.post("http://localhost:3001/api/track",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){d({type:"NOT-SYNCED"}),a()})).catch((function(e){return console.log(e)}))})),onKeyPress:function(e){13===(e.keyCode?e.keyCode:e.which)&&e.preventDefault()}},r.a.createElement("div",{className:"media-player__modal"},r.a.createElement("div",{className:"media-player__modal__content"},r.a.createElement("div",{className:"media-player__modal__content__heading"},"Upload a new Track"),r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12,md:6},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(C.a,{as:S,name:"label",label:"Track Name",type:"text",control:i,defaultValue:"",labelClass:"media-player__modal__content__track-label",inputClass:"media-player__modal__content__track-label__input",register:n,validation:{required:"Please provide a track name"},errors:m}),r.a.createElement(C.a,{as:S,control:i,defaultValue:"",type:"text",label:"Album name",name:"album",labelClass:"media-player__modal__content__track-album",inputClass:"media-player__modal__content__track-album__input",register:n}))),r.a.createElement(y.a,{item:!0,xs:12,md:6},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement("div",{className:"media-player__modal__content__uploader__container"},r.a.createElement(C.a,{label:"Please choose your track",as:w,control:i,defaultValue:"",type:"file",name:"track",id:"track",accept:"audio/*",register:n,labelClass:"media-player__modal__content__track-file"}))),r.a.createElement("div",{className:"media-player__modal__content__buttons"},r.a.createElement("button",{onClick:function(){return a()},className:"media-player__modal__content__buttons__close"},"Cancel"),r.a.createElement("button",{className:"media-player__modal__content__buttons__upload"},"Upload"))))))),document.querySelector("#modal"))},R=(t(116),function(e){return r.a.createElement("div",{className:"media-player__add-track"},r.a.createElement("label",{htmlFor:"addTrack"},"Add a song"),r.a.createElement("button",{className:"media-player__add-track__button",onClick:e.onClick,id:"media-player__add-track__button addTrack"},r.a.createElement(h.a,{id:"add-button",icon:j.c,color:"#a237f3"})))}),x=t(13),D=t(156),L=t(161),P=t(159),U=t(160),K=(t(117),Object(k.a)((function(e){return{formControl:Object(x.a)({margin:e.spacing(1),minWidth:120},e.breakpoints.down("768"),{width:"100%"}),selectEmpty:{marginTop:e.spacing(2)},select:{"&:after":{borderColor:"#a237f3"}}}}))),M=function(){var e=Object(c.useContext)(u),a=Object(o.a)(e,2),t=a[0],n=a[1],l=K(),i=Object(c.useState)(""),s=Object(o.a)(i,2),m=s[0],_=s[1],d=function(e,a){return e.sort((function(e,t){return e[a]<t[a]?-1:e[a]>t[a]?1:0}))};return r.a.createElement("div",{className:"music-player__filter"},r.a.createElement(D.a,{className:l.formControl},r.a.createElement(L.a,{id:"music-player__filter__label",style:{color:"#000"}},"Sort by"),r.a.createElement(P.a,{labelId:"music-player__filter__label",id:"music-player__filte__select",value:m,onChange:function(e){var a;switch(e.target.value){case"trackAZ":a=d(t.tracks,"label"),n({type:"EMPTY_TRACKS"}),n({type:"GET_TRACKS",payload:a}),n({type:"FILTER_USED",payload:!0});break;case"albumAZ":a=d(t.tracks,"album"),n({type:"EMPTY_TRACKS"}),n({type:"GET_TRACKS",payload:a}),n({type:"FILTER_USED",payload:!0});break;default:a=t.tracks}_(e.target.value)},className:l.select},r.a.createElement(U.a,{value:"trackAZ",id:"trackAZ"},"Ascending - Track"),r.a.createElement(U.a,{value:"albumAZ",d:"albumAZ"},"Ascending - Album"))))},Y=Object(k.a)((function(e){return{textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%",display:"flex","& .MuiInput-underline:after":{borderBottomColor:"#a237f3"}}}})),I=function(){var e=Y(),a=Object(c.useContext)(u),t=Object(o.a)(a,2),n=t[0],l=t[1],i=Object(c.useState)(!1),s=Object(o.a)(i,2),m=s[0],_=s[1],d=Object(c.useState)(n.tracks),p=Object(o.a)(d,2),b=p[0],f=p[1];Object(c.useEffect)((function(){"out-of-sync"===n.status&&E.a.get("http://localhost:3001/api/track").then((function(e){var a=e.data;l({type:"START"}),l({type:"EMPTY_TRACKS"}),l({type:"GET_TRACKS",payload:a.track}),l({type:"SYNCED"}),l({type:"COMPLETE"}),f(a.track)})).catch((function(e){throw e})),n.filterUsed&&!n.searchUsed&&(f(n.tracks),l({type:"FILTER_USED",payload:!1}))}),[l,n.status,n.tracks,n.filterUsed,n.searchUsed]);var k=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=document.querySelector("#modal");a&&e&&(a.classList.add("active"),_(e)),a&&!e&&(a.classList.remove("active"),_(e))};return r.a.createElement("div",{className:"media-player__wrapper"},r.a.createElement("div",{className:"media-player__wrapper__heading"},r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:12,md:8},r.a.createElement("div",{className:"media-player__wrapper__heading__title"},"My Music Player")),r.a.createElement("div",{className:"media-player__wrapper__heading__search"},r.a.createElement(v.a,{id:"standard-search",label:"Search track",type:"Standard",InputLabelProps:{style:{color:"#000"}},className:e.textField,margin:"normal",onChange:function(e){var a=e.target.value;if(a){var t=n.tracks.filter((function(e){return e.label.toLowerCase()===a.toLowerCase()}));l({type:"SEARCH_USED",payload:!0}),l({type:"SEARCHED_TRACKS",payload:t}),f(t)}else l({type:"SEARCH_USED",payload:!1}),f(n.tracks)}}))),r.a.createElement(y.a,{container:!0,spacing:2,style:{alignItems:"flex-end"}},r.a.createElement(y.a,{item:!0,xs:12,style:{padding:0}},r.a.createElement("div",{className:"media-player__wrapper__heading__add-track-heading"},r.a.createElement(M,null),r.a.createElement(R,{onClick:k}))))),r.a.createElement("div",{className:"media-player__wrapper__music-player"},r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:12,md:7,lg:7},r.a.createElement(N,{title:n.currentTrack.title||"Please select a track",album:n.currentTrack.album||"Please select a track"})),r.a.createElement(y.a,{item:!0,xs:12,md:5,lg:5},r.a.createElement("div",{className:"media-player__wrapper__music-player__tracks"},!n.loading&&b.length>0&&b.map((function(e){return r.a.createElement(g,Object.assign({key:e._id,title:e.label,album:e.album},e))}))))),m&&r.a.createElement(A,{onDismiss:function(){return k(!1)}})))},F=function(e){var a=e.location;return r.a.createElement("div",{className:"wrong-path"},r.a.createElement("div",{className:"wrong-path__heading"},r.a.createElement("h1",null,"Whoops!")),r.a.createElement("div",{className:"wrong-path__body"},r.a.createElement("h3",null,"No match for ",r.a.createElement("code",null,a.pathname)),r.a.createElement(i.b,{className:"wrong-path__body__button",to:"/player"},"Home")))},q=function(){return r.a.createElement("div",{className:"media-player"},r.a.createElement(i.a,null,r.a.createElement(b,null,r.a.createElement(s.d,null,r.a.createElement(s.a,{exact:!0,from:"/",to:"/player"}),r.a.createElement(s.b,{path:"/player",exact:!0,component:I}),r.a.createElement(s.b,{component:F})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))},81:function(e,a,t){e.exports=t(119)},86:function(e,a,t){},87:function(e,a,t){}},[[81,1,2]]]);