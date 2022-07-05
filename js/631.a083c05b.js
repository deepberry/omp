"use strict";(self["webpackChunkomp"]=self["webpackChunkomp"]||[]).push([[631],{631:function(l,e,a){a.r(e),a.d(e,{default:function(){return O}});var o=a(252),t=a(577),i=a(262),s=a(239);const d={class:"u-table-button"},n=(0,o.Uk)("停用"),u=(0,o.Uk)("编辑"),c=(0,o.Uk)("查看详情 ");var r={__name:"companyTable",props:{table:Array,label:String},emits:["toDialog"],setup(l,{emit:e}){function a(l,a){e("toDialog",{id:l,type:a})}return(e,t)=>{const i=(0,o.up)("el-table-column"),s=(0,o.up)("el-button"),r=(0,o.up)("router-link"),m=(0,o.up)("el-table");return(0,o.wg)(),(0,o.j4)(m,{class:"m-table",data:l.table,border:"",style:{width:"100%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{prop:"id",label:"企业ID",width:"180"}),(0,o.Wm)(i,{prop:"name",label:"企业名称",width:"180"}),(0,o.Wm)(i,{prop:"address",label:"企业Logo"}),(0,o.Wm)(i,{prop:"address",label:"联系人"}),(0,o.Wm)(i,{prop:"address",label:"手机号码"}),(0,o.Wm)(i,{prop:"address",label:"企业状态"}),(0,o.Wm)(i,{prop:"address",label:"账户创建时间"}),(0,o.Wm)(i,{prop:"address",label:"操作"},{default:(0,o.w5)((e=>[(0,o._)("div",d,[(0,o.Wm)(s,{link:"",type:"primary",size:"small",onClick:l=>a(e.row.id,"close")},{default:(0,o.w5)((()=>[n])),_:2},1032,["onClick"]),(0,o.Wm)(s,{link:"",type:"primary",size:"small",onClick:l=>a(e.row.id,"edit")},{default:(0,o.w5)((()=>[u])),_:2},1032,["onClick"]),(0,o.Wm)(r,{to:{path:`/${l.label}/details/${e.row.id}`},class:"u-table-more"},{default:(0,o.w5)((()=>[c])),_:2},1032,["to"])])])),_:1})])),_:1},8,["data"])}}},m=a(744);const p=(0,m.Z)(r,[["__scopeId","data-v-70d408f2"]]);var g=p;const b={class:"m-box"},w=["src"],f={key:1,class:"u-box"},_=(0,o._)("div",{class:"u-tips"},[(0,o._)("span",null," 尺寸建议：宽180 x 高60"),(0,o._)("span",null," 格式建议：透明背景图片，PNG或gif,logo图形使用深色")],-1),k={key:0,class:"dialog-footer"},W={emits:["dialogClose","dialogSuccess"]};var v=Object.assign(W,{__name:"companyFormDialog",props:{dialogObject:Object},setup(l,{emit:e}){const a=l,s=(0,i.qj)({name:"",imageUrl:"",user:"",phone:""}),d=(0,o.Fl)({get(){return a.dialogObject.dialogVisible},set(l){return l}}),n={dialogTitle:a.dialogObject.title||"企业信息",dialogWidth:a.dialogObject.width||"780px",dialogCloseBtnText:a.dialogObject.closeBtnText||"取消",dialogSuccessBtnText:a.dialogObject.successBtnText||"成功",dialogIsFooter:a.dialogObject.isFooter||!0,dialogContent:a.dialogObject.content||"是否停用"},u=()=>{e("dialogClose",!1,"close")},c=()=>{e("dialogSuccess",!1,"success")},r=(l,e)=>{s.imageUrl=URL.createObjectURL(e.raw)},m=l=>"image/jpeg"!==l.type?(console.log("Avatar picture must be JPG format!"),!1):!(l.size/1024/1024>2)||(console.log("Avatar picture size can not exceed 2MB!"),!1);return(l,e)=>{const a=(0,o.up)("el-input"),p=(0,o.up)("el-form-item"),g=(0,o.up)("Picture"),W=(0,o.up)("el-upload"),v=(0,o.up)("el-form"),j=(0,o.up)("el-button"),y=(0,o.up)("el-dialog");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(y,{modelValue:(0,i.SU)(d),"onUpdate:modelValue":e[3]||(e[3]=l=>(0,i.dq)(d)?d.value=l:null),title:n.dialogTitle,width:n.dialogWidth,"before-close":u,draggable:""},{footer:(0,o.w5)((()=>[n.dialogIsFooter?((0,o.wg)(),(0,o.iD)("span",k,[(0,o.Wm)(j,{onClick:u},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(n.dialogCloseBtnText),1)])),_:1}),(0,o.Wm)(j,{type:"primary",onClick:c},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(n.dialogSuccessBtnText),1)])),_:1})])):(0,o.kq)("",!0)])),default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"m-form-content",model:s,"label-width":"120px"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{label:"企业名称"},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{modelValue:s.name,"onUpdate:modelValue":e[0]||(e[0]=l=>s.name=l)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(p,{label:"企业/组织Logo"},{default:(0,o.w5)((()=>[(0,o._)("div",b,[(0,o.Wm)(W,{class:"m-uploader",action:"#","show-file-list":!1,"on-success":r,"before-upload":m},{default:(0,o.w5)((()=>[s.imageUrl?((0,o.wg)(),(0,o.iD)("img",{key:0,src:s.imageUrl,class:"avatar"},null,8,w)):((0,o.wg)(),(0,o.iD)("div",f,[(0,o.Wm)(g,{class:"u-icon"})]))])),_:1}),_])])),_:1}),(0,o.Wm)(p,{label:"联系人"},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{modelValue:s.user,"onUpdate:modelValue":e[1]||(e[1]=l=>s.user=l)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(p,{label:"手机号码"},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{modelValue:s.phone,"onUpdate:modelValue":e[2]||(e[2]=l=>s.phone=l)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title","width"])])}}});const j=v;var y=j;const h={class:"v-company"},U={class:"m-title"},V={class:"m-search-box"},C=(0,o.Uk)("企业开户"),D=(0,o._)("div",{class:"m-tips-content"},[(0,o._)("span",{class:"u-title"},"是否启用/停用企业账户"),(0,o._)("span",null,"湖南XXXXXXXXXX公司"),(0,o._)("span",null,"(vfnjkehgnjkedhbngjk)")],-1);var S={__name:"CompanyList",setup(l){const e=(0,s.t)(),{label:a,deepBerry:d}=e,{title:n}=d[a],u={uid:"",placeholder:"请输入企业ID/企业名称/联系人/联系电话",status_title:"-- 企业账户状态 --",status:[{label:"正常",value:1},{label:"已停用",value:0}]},c=[{id:1}],r=(0,i.qj)({page:1,per:1,total:0});function m(){}let p=(0,i.iH)("tips");function b({id:l,type:e}){w.dialogVisible=!0,p.value="edit"==e?"form":"tips"}const w=(0,i.qj)({dialogVisible:!1}),f=()=>{w.dialogVisible=!1},_=()=>{w.dialogVisible=!1};function k(){w.dialogVisible=!0,p.value="form"}return(l,e)=>{const s=(0,o.up)("search-bar"),d=(0,o.up)("el-button"),W=(0,o.up)("commonPagination"),v=(0,o.up)("tipsDialog");return(0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("h2",U,(0,t.zw)((0,i.SU)(n)),1),(0,o._)("div",V,[(0,o.Wm)(s,{data:u,onToQuery:m}),(0,o.Wm)(d,{class:"u-add",type:"primary",onClick:k},{default:(0,o.w5)((()=>[C])),_:1})]),(0,o.Wm)((0,i.SU)(g),{table:c,label:(0,i.SU)(a),onToDialog:b},null,8,["label"]),(0,o.Wm)(W,{pagination:r},null,8,["pagination"]),"tips"==(0,i.SU)(p)?((0,o.wg)(),(0,o.j4)(v,{key:0,class:"m-tips","dialog-object":w,onDialogClose:f,onDialogSuccess:_},{default:(0,o.w5)((()=>[D])),_:1},8,["dialog-object"])):(0,o.kq)("",!0),"form"==(0,i.SU)(p)?((0,o.wg)(),(0,o.j4)((0,i.SU)(y),{key:1,class:"m-form","dialog-object":w,onDialogClose:f,onDialogSuccess:_},null,8,["dialog-object"])):(0,o.kq)("",!0)])}}};const x=S;var O=x}}]);
//# sourceMappingURL=631.a083c05b.js.map