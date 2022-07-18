(function(){"use strict";var e={6838:function(e,t,n){var a=n(9963),o=n(6252),l=n(2262),i=n(3577),r=n(2908);const s={class:"m-footer"};function c(e,t,n,a,l,i){return(0,o.wg)(),(0,o.iD)("footer",s)}var u={name:"CommonFooter",props:[],components:{},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){}},d=n(3744);const p=(0,d.Z)(u,[["render",c]]);var m=p,g=n(8825),f=n(1575);const v={class:"m-navigation"},b={class:"m-navigation-logo"},h=["src"],_=(0,o._)("span",{class:"u-title"},"深莓智能运营管理平台",-1),w={class:"m-navigation-ul"},y={class:"u-label"};var k={__name:"commonNavigation",setup(e){const t=(0,g.t)(),{role:n,roleData:a}=(0,f.Jk)(t),s={name:"企业管理",value:"company",icon:"Postcard"},c={name:"用户管理",value:"customer",icon:"User"},u={name:"设备管理",value:"equipment",icon:"SetUp"},d=(0,o.Fl)((()=>{let e=[];const{company:t,customer:o,equipment:l}=a.value;return n.value.forEach((n=>{t[n]&&(e[0]=s),o[n]&&(e[1]=c),l[n]&&(e[2]=u)})),e.filter(Boolean)}));return(e,t)=>{const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("div",b,[(0,o._)("img",{class:"u-logo",src:(0,l.SU)(r),alt:"深莓智能"},null,8,h),_]),(0,o._)("ul",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,l.SU)(d),(e=>((0,o.wg)(),(0,o.iD)("li",{class:"u-item",key:e.value},[(0,o.Wm)(n,{class:"u-txt",to:{name:e.value}},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e.icon),{class:"u-icon"})),(0,o._)("span",y,(0,i.zw)(e.name),1)])),_:2},1032,["to"])])))),128))])])}}};const j=k;var S=j;const U={class:"m-setting"},O={class:"m-list"};var D={__name:"asideSetting",setup(e){const t=(0,g.t)(),{role:n,roleData:a}=(0,f.Jk)(t),r={path:"/role",label:"角色权限"},s={path:"/role/member",label:"成员列表"},c=(0,o.Fl)((()=>{let e=[{path:"/role/details/1",label:"当前账号"}];const{manage:t,user:o}=a.value;return n.value.forEach((n=>{o[n]&&(e[1]=s),t[n]&&(e[2]=r)})),e.filter(Boolean)}));return(e,t)=>{const n=(0,o.up)("Setting"),a=(0,o.up)("router-link"),r=(0,o.up)("el-popover");return(0,o.wg)(),(0,o.iD)("div",U,[(0,o.Wm)(r,{"popper-class":"m-popper-setting",placement:"top",width:"180px",trigger:"hover"},{reference:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"u-setting"})])),default:(0,o.w5)((()=>[(0,o._)("div",O,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,l.SU)(c),((e,t)=>((0,o.wg)(),(0,o.j4)(a,{to:e.path,class:"u-item",key:t},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.label),1)])),_:2},1032,["to"])))),128))])])),_:1})])}}};const C=D;var P=C,q=JSON.parse('{"L1":{"home":{"title":"运营平台","tab_name":"首页","icon":"House"},"company":{"title":"企业信息管理","key_name":"企业","tab_name":"企业管理","icon":"Postcard"},"customer":{"title":"用户信息管理","key_name":"用户","tab_name":"用户管理","icon":"User"},"equipment":{"title":"设备信息管理","key_name":"设备","tab_name":"设备管理","icon":"SetUp"},"role":{"title":"角色权限","key_name":"角色","tab_name":"角色","icon":"Setting"},"details":{"title":"详情","key_name":"详情","tab_name":"详情","icon":"Document"}}}'),x=n(2201);const B=e=>((0,o.dD)("data-v-e3f85690"),e=e(),(0,o.Cn)(),e),T={key:0,class:"v-home"},V=["src"],W=B((()=>(0,o._)("span",{class:"title"},"深莓智能运营管理平台",-1))),E={key:1,class:"m-container"},F={class:"m-aside"},N={class:"m-main"},z={key:0,class:"m-title"},A={class:"u-title-txt"},L={key:1,class:"m-title"},Y={class:"u-title-txt"};var H={__name:"App",setup(e){const t="ww5429d07e97752284",n=encodeURIComponent("https://admin.deepberry.cn/omp/#/role/details/0"),a=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${t}&redirect_uri=${n}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`,s=(0,g.t)(),c=(0,x.yj)(),u=(0,l.qj)((0,x.tv)());let{label:d,deepBerry:p}=(0,f.Jk)(s);d=(0,l.IU)(c).name,p=q.L1,s.label=d,s.deepBerry=p;const v=(0,l.qj)({view:{icon:"",title:""}});(0,o.YP)(d,(e=>{var t,n;v.view.icon=(null===(t=p[e])||void 0===t?void 0:t.icon)||"Notebook",v.view.title=(null===(n=p[e])||void 0===n?void 0:n.title)||"成员列表"}),{immediate:!0});const b=(0,o.Fl)((()=>"role"==c.params.type&&0==c.params.id)),h=(0,o.Fl)((()=>p[c.params.type].key_name));function _(){u.go(-1)}return(0,o.YP)(c,(e=>{console.log("当前页面：",e.name)})),(e,t)=>{const n=(0,o.up)("el-page-header"),s=(0,o.up)("router-view");return"home"==(0,l.SU)(c).name?((0,o.wg)(),(0,o.iD)("div",T,[(0,o._)("img",{class:"logo",src:(0,l.SU)(r),alt:"深莓智能"},null,8,V),W,(0,o._)("a",{href:a,class:"button"},"点击进入")])):((0,o.wg)(),(0,o.iD)("div",E,[(0,o._)("aside",F,[(0,o.Wm)(S),(0,o.Wm)(P)]),(0,o._)("main",N,["details"==(0,l.SU)(d)?((0,o.wg)(),(0,o.iD)("h2",z,[(0,o._)("span",A,[(0,l.SU)(b)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(n,{key:0,title:"返回",onBack:_})),(0,o.Uk)(" "+(0,i.zw)((0,l.SU)(h))+"详情",1)])])):((0,o.wg)(),(0,o.iD)("h2",L,[(0,o._)("span",Y,[v.view.title?((0,o.wg)(),(0,o.j4)((0,o.LL)(v.view.icon),{key:0,class:"u-title-icon"})):(0,o.kq)("",!0),(0,o.Uk)((0,i.zw)(v.view.title),1)])])),(0,o.Wm)(s)]),(0,o.Wm)(m)]))}}};const I=(0,d.Z)(H,[["__scopeId","data-v-e3f85690"]]);var K=I,J=n(1232);const M=()=>n.e(625).then(n.bind(n,3625)),Z=()=>Promise.all([n.e(146),n.e(699),n.e(746)]).then(n.bind(n,5746)),$=()=>Promise.all([n.e(146),n.e(699),n.e(876)]).then(n.bind(n,1876)),G=()=>Promise.all([n.e(146),n.e(699),n.e(469)]).then(n.bind(n,9469)),Q=()=>Promise.all([n.e(146),n.e(304)]).then(n.bind(n,3304)),R=()=>Promise.all([n.e(146),n.e(699),n.e(811)]).then(n.bind(n,7811)),X=()=>Promise.all([n.e(146),n.e(699),n.e(420)]).then(n.bind(n,3420)),ee=[{name:"home",path:"/",component:M},{name:"company",path:"/company",component:Z,meta:{}},{name:"customer",path:"/customer",component:$,meta:{}},{name:"equipment",path:"/equipment",component:G,meta:{}},{name:"details",path:"/:type/details/:id",component:Q,meta:{}},{name:"role",path:"/role/:id?",component:R,meta:{}},{name:"member",path:"/role/member",component:X,meta:{}}],te=(0,x.p7)({history:(0,x.r5)(),routes:ee});var ne=te,ae=n(8958),oe=(n(4415),n(5781));const le={class:"m-searchBar"},ie=(0,o.Uk)("查询");var re={__name:"searchBar",props:{data:Object},emits:["toSearch"],setup(e,{emit:t}){const n=(0,l.qj)({input_txt:"",status_id:"",bind_id:"",connect_id:"",role_id:""});function a(){let e={};Object.keys(n).forEach((t=>{const a=n[t],o=""===a||null===a||void 0===a;o||(e[t]=a)})),t("toSearch",e)}return(t,l)=>{const i=(0,o.up)("Search"),r=(0,o.up)("el-input"),s=(0,o.up)("el-option"),c=(0,o.up)("el-select"),u=(0,o.up)("el-button");return(0,o.wg)(),(0,o.iD)("div",le,[(0,o.Wm)(r,{modelValue:n.input_txt,"onUpdate:modelValue":l[0]||(l[0]=e=>n.input_txt=e),modelModifiers:{lazy:!0},class:"u-input",placeholder:e.data.placeholder},(0,o.Nv)({_:2},[e.data.role?{name:"prepend",fn:(0,o.w5)((()=>[(0,o.Wm)(i,{class:"u-icon"})]))}:void 0]),1032,["modelValue","placeholder"]),e.data.status?((0,o.wg)(),(0,o.j4)(c,{key:0,modelValue:n.status_id,"onUpdate:modelValue":l[1]||(l[1]=e=>n.status_id=e),class:"u-select",placeholder:e.data.status_title},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.data.status,((e,t)=>((0,o.wg)(),(0,o.j4)(s,{key:t,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])):(0,o.kq)("",!0),e.data.bind?((0,o.wg)(),(0,o.j4)(c,{key:1,modelValue:n.bind_id,"onUpdate:modelValue":l[2]||(l[2]=e=>n.bind_id=e),class:"u-select",placeholder:e.data.bind_title},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.data.bind,((e,t)=>((0,o.wg)(),(0,o.j4)(s,{key:t,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])):(0,o.kq)("",!0),e.data.connect?((0,o.wg)(),(0,o.j4)(c,{key:2,modelValue:n.connect_id,"onUpdate:modelValue":l[3]||(l[3]=e=>n.connect_id=e),class:"u-select",placeholder:e.data.connect_title},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.data.connect,((e,t)=>((0,o.wg)(),(0,o.j4)(s,{key:t,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])):(0,o.kq)("",!0),e.data.role?((0,o.wg)(),(0,o.j4)(c,{key:3,modelValue:n.role_id,"onUpdate:modelValue":l[4]||(l[4]=e=>n.role_id=e),class:"u-select",placeholder:e.data.role_title},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.data.role,((e,t)=>((0,o.wg)(),(0,o.j4)(s,{key:t,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])):(0,o.kq)("",!0),(0,o.Wm)(u,{type:"primary",class:"u-button",onClick:a},{default:(0,o.w5)((()=>[ie])),_:1})])}}};const se=re;var ce=se;const ue={class:"m-pagination"};var de={__name:"paginationPage",props:{pagination:Object},emits:["toParams"],setup(e,{emit:t}){const n=e,a=(0,l.qj)({page:1,per:10,total:0,single:!0});function i(e){t("toParams",e)}return(0,o.YP)(n.pagination,(e=>{a.page=e.page,a.per=e.per,a.total=e.total,a.single=!(a.total>a.per)}),{deep:!0,immediate:!0}),(e,t)=>{const n=(0,o.up)("el-pagination");return(0,o.wg)(),(0,o.iD)("div",ue,[(0,o.Wm)(n,{"hide-on-single-page":a.single,currentPage:a.page,"onUpdate:currentPage":t[0]||(t[0]=e=>a.page=e),"page-size":a.per,"onUpdate:page-size":t[1]||(t[1]=e=>a.per=e),background:"",layout:"prev, pager, next, jumper",total:a.total,onCurrentChange:i},null,8,["hide-on-single-page","currentPage","page-size","total"])])}}};const pe=de;var me=pe;const ge={key:0,class:"dialog-footer"},fe={emits:["dialogClose","dialogSuccess"]};var ve=Object.assign(fe,{__name:"tipsDialog",props:{dialogObject:Object},setup(e,{emit:t}){const n=e,a=(0,o.Fl)({get(){return n.dialogObject.dialogVisible},set(e){return e}}),r=(0,o.Fl)((()=>({dialogTitle:n.dialogObject.title||"Tips",dialogWidth:n.dialogObject.width||"760px",dialogCloseBtnText:n.dialogObject.closeBtnText||"取消",dialogSuccessBtnText:n.dialogObject.successBtnText||"确定",dialogIsFooter:n.dialogObject.isFooter||!0,dialogContent:n.dialogObject.content||"是否停用"}))),s=()=>{t("dialogClose")},c=()=>{t("dialogSuccess")};return(e,t)=>{const n=(0,o.up)("el-button"),u=(0,o.up)("el-dialog");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(u,{modelValue:(0,l.SU)(a),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,l.dq)(a)?a.value=e:null),title:(0,l.SU)(r).dialogTitle,width:(0,l.SU)(r).dialogWidth,"before-close":s,draggable:""},{footer:(0,o.w5)((()=>[(0,l.SU)(r).dialogIsFooter?((0,o.wg)(),(0,o.iD)("span",ge,[(0,o.Wm)(n,{onClick:s},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)((0,l.SU)(r).dialogCloseBtnText),1)])),_:1}),(0,o.Wm)(n,{type:"primary",onClick:c},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)((0,l.SU)(r).dialogSuccessBtnText),1)])),_:1})])):(0,o.kq)("",!0)])),default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default")])),_:3},8,["modelValue","title","width"])])}}});const be=ve;var he=be,_e=n(420),we={install:function(e){e.component("searchBar",ce),e.component("commonPagination",me),e.component("tipsDialog",he),e.component("UploadImage",_e.Z)}};const ye=(0,a.ri)(K),ke=(0,J.G6)();ye.use(ke),ye.use(ne);const je=(0,f.WB)();ye.use(je),ye.use(ae.Z);for(const[Se,Ue]of Object.entries(oe))ye.component(Se,Ue);ye.use(we),ye.mount("#app")},8825:function(e,t,n){n.d(t,{t:function(){return l}});var a=n(1575),o=JSON.parse('{"23":"当前账号","equipment":{"7":"设备管理全部权限","18":"查看设备列表权限","19":"添加设备权限","20":"查看设备详情权限","21":"修改设备权限"},"customer":{"6":"用户管理全部权限","14":"查看用户列表权限","15":"用户启用/停用权限","17":"查看用户详情权限"},"company":{"5":"企业管理全部权限","8":"查看企业客户列表权限","9":"企业开户权限","10":"企业客户启用/停用权限","12":"查看企业客户详情权限","13":"修改企业客户信息权限"},"user":{"24":"成员列表","26":"查询成员","28":"角色列表","30":"启/停用","31":"授权角色权限"},"manage":{"25":"角色权限全部权限","29":"功能权限","32":"新建角色","33":"编辑角色信息","34":"删除角色","35":"查看权限列表权限","36":"编辑角色权限","37":"复制权限并新建角色权限"}}');const l=(0,a.Q_)("deepBerry",{state:()=>({deepBerry:{},label:"",role:[],roleData:o}),getters:{},actions:{}})}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,l){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],l=e[u][2];for(var r=!0,s=0;s<a.length;s++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(r=!1,l<i&&(i=l));if(r){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[a,o,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{146:"7db93209",304:"518a8526",420:"a33fa5f7",469:"827467cf",625:"a4a54a8d",699:"a9b1e39c",746:"4fd1e988",811:"7bbcd0b7",876:"22f80b0a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{304:"f0b8f5e9",420:"7703f8eb",469:"b7b564a9",625:"6c7950af",746:"b77d2886",811:"d20ac2bf",876:"e96ed9c1"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="omp:";n.l=function(a,o,l,i){if(e[a])e[a].push(o);else{var r,s;if(void 0!==l)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+l){r=d;break}}r||(s=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+l),r.src=a),e[a]=[o];var p=function(t,n){r.onerror=r.onload=null,clearTimeout(m);var o=e[a];if(delete e[a],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),s&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="https://cdn.deepberry.cn/static/omp/"}(),function(){var e=function(e,t,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var l=function(l){if(o.onerror=o.onload=null,"load"===l.type)n();else{var i=l&&("load"===l.type?"missing":l.type),r=l&&l.target&&l.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=r,o.parentNode.removeChild(o),a(s)}};return o.onerror=o.onload=l,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===e||l===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],l=o.getAttribute("data-href");if(l===e||l===t)return o}},a=function(a){return new Promise((function(o,l){var i=n.miniCssF(a),r=n.p+i;if(t(i,r))return o();e(a,r,o,l)}))},o={143:0};n.f.miniCss=function(e,t){var n={304:1,420:1,469:1,625:1,746:1,811:1,876:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var l=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=l);var i=n.p+n.u(t),r=new Error,s=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var l=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;r.message="Loading chunk "+t+" failed.\n("+l+": "+i+")",r.name="ChunkLoadError",r.type=l,r.request=i,o[1](r)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,l,i=a[0],r=a[1],s=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(s)var u=s(n)}for(t&&t(a);c<i.length;c++)l=i[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},a=self["webpackChunkomp"]=self["webpackChunkomp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6838)}));a=n.O(a)})();
//# sourceMappingURL=app.aa2482d2.js.map