"use strict";(self["webpackChunkomp"]=self["webpackChunkomp"]||[]).push([[469],{3727:function(e,l,t){t.d(l,{Ol:function(){return n},ag:function(){return i},eM:function(){return o},qM:function(){return d}});var a=t(6146);function o(e){return(0,a.u)().get("/api/Device",{params:e})}function i(e){return(0,a.u)().post("/api/Device",e)}function n(e){return(0,a.u)().put("/api/Device",e)}function d(e){return(0,a.u)().get(`/api/Device/${e}`)}},9469:function(e,l,t){t.r(l),t.d(l,{default:function(){return q}});t(6699);var a=t(6252),o=t(2262),i=t(8825),n=t(5752);const d={class:"u-table-button"},r=(0,a.Uk)("编辑"),u=(0,a.Uk)("查看详情 ");var s={__name:"equipmentTable",props:{table:Array,label:String},emits:["toDialog"],setup(e,{emit:l}){const t=e,s=(0,i.t)(),{role:c}=(0,n.Jk)(s),p=(0,a.Fl)((()=>c.value.includes(21))),m=(0,a.Fl)((()=>c.value.includes(20))),g=[20,21],b=(0,a.Fl)((()=>c.value.map((e=>g.includes(e))).filter(Boolean).length));let f=(0,o.qj)({data:[]});function v(e,t){l("toDialog",{row:e,type:t})}return(0,a.YP)(t,(e=>{f.data=e.table}),{deep:!0}),(l,t)=>{const i=(0,a.up)("el-table-column"),n=(0,a.up)("el-button"),s=(0,a.up)("router-link"),c=(0,a.up)("el-table");return(0,a.wg)(),(0,a.j4)(c,{class:"m-table",data:(0,o.SU)(f).data,border:"",fit:"",style:{width:"100%"}},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{prop:"deviceId",label:"设备ID"}),(0,a.Wm)(i,{prop:"deviceName",label:"硬件名称"}),(0,a.Wm)(i,{prop:"orgzName",label:"归属企业"}),(0,a.Wm)(i,{prop:"hard_version",label:"硬件版本"}),(0,a.Wm)(i,{prop:"soft_version",label:"固件版本"}),(0,a.Wm)(i,{prop:"iccid",label:"ICCID"}),(0,o.SU)(b)?((0,a.wg)(),(0,a.j4)(i,{key:0,label:"操作",width:"180"},{default:(0,a.w5)((l=>[(0,a._)("div",d,[(0,o.SU)(p)?((0,a.wg)(),(0,a.j4)(n,{key:0,link:"",type:"primary",size:"small",onClick:e=>v(l.row)},{default:(0,a.w5)((()=>[r])),_:2},1032,["onClick"])):(0,a.kq)("",!0),(0,o.SU)(m)?((0,a.wg)(),(0,a.j4)(s,{key:1,to:{path:`/${e.label}/details/${l.row.deviceId}`},class:"u-table-more"},{default:(0,a.w5)((()=>[u])),_:2},1032,["to"])):(0,a.kq)("",!0)])])),_:1})):(0,a.kq)("",!0)])),_:1},8,["data"])}}},c=t(3744);const p=(0,c.Z)(s,[["__scopeId","data-v-bd9c098c"]]);var m=p,g=t(3577);const b={key:0,class:"dialog-footer"},f={emits:["dialogClose","dialogSuccess"]};var v=Object.assign(f,{__name:"equipmentFormDialog",props:{dialogObject:Object},setup(e,{emit:l}){const t=e,i=(0,a.Fl)({get(){return t.dialogObject.dialogVisible},set(e){return e}}),n=(0,a.Fl)((()=>({dialogTitle:t.dialogObject.title||"设备信息",dialogWidth:t.dialogObject.width||"760px",dialogCloseBtnText:t.dialogObject.closeBtnText||"取消",dialogSuccessBtnText:t.dialogObject.successBtnText||"成功",dialogIsFooter:t.dialogObject.isFooter||!0,dialogContent:t.dialogObject.content||"是否停用"}))),d=(0,a.Fl)((()=>t.dialogObject.equipment));let r=(0,o.qj)({form:{}});const u=(0,o.iH)(""),s=(0,o.iH)({orgzId:[{required:!0,message:"请选择企业",trigger:"blur"}],deviceName:[{required:!0,message:"请输入设备名称",trigger:"blur"}],deviceId:[{required:!0,message:"请输入设备ID",trigger:"blur"}]});(0,a.YP)(d,(e=>r.form=e),{deep:!0,immediate:!0});const c=()=>{l("dialogClose"),u.value.resetFields()},p=e=>{e&&e.validate(((e,t)=>{e?l("dialogSuccess",r.form):console.log("error submit!",t)}))};return(e,l)=>{const t=(0,a.up)("el-input"),d=(0,a.up)("el-form-item"),m=(0,a.up)("el-form"),f=(0,a.up)("el-button"),v=(0,a.up)("el-dialog");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(v,{modelValue:(0,o.SU)(i),"onUpdate:modelValue":l[4]||(l[4]=e=>(0,o.dq)(i)?i.value=e:null),title:(0,o.SU)(n).dialogTitle,width:(0,o.SU)(n).dialogWidth,"before-close":c,draggable:""},{footer:(0,a.w5)((()=>[(0,o.SU)(n).dialogIsFooter?((0,a.wg)(),(0,a.iD)("span",b,[(0,a.Wm)(f,{onClick:c},{default:(0,a.w5)((()=>[(0,a.Uk)((0,g.zw)((0,o.SU)(n).dialogCloseBtnText),1)])),_:1}),(0,a.Wm)(f,{type:"primary",onClick:l[3]||(l[3]=e=>p(u.value))},{default:(0,a.w5)((()=>[(0,a.Uk)((0,g.zw)((0,o.SU)(n).dialogSuccessBtnText),1)])),_:1})])):(0,a.kq)("",!0)])),default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"m-form-content",ref_key:"formRef",ref:u,model:(0,o.SU)(r).form,rules:s.value,"label-width":"120px"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{label:"设备ID",prop:"deviceId"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:(0,o.SU)(r).form.deviceId,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,o.SU)(r).form.deviceId=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(d,{label:"硬件名称",prop:"deviceName"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:(0,o.SU)(r).form.deviceName,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,o.SU)(r).form.deviceName=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(d,{label:"归属客户",prop:"orgzId"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:(0,o.SU)(r).form.orgzId,"onUpdate:modelValue":l[2]||(l[2]=e=>(0,o.SU)(r).form.orgzId=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","width"])])}}});const w=v;var U=w,S=t(3727),k=t(9996);const _={class:"v-equipment v-page"},h={class:"m-search-box"},j=(0,a.Uk)("添加设备");var I={__name:"EquipmentList",setup(e){const l=(0,i.t)(),{label:t,role:d}=(0,n.Jk)(l),r={uid:"",placeholder:"请输入设备ID/硬件名称/ICCID/归属客户"};let u=(0,o.qj)({loading:!1,table:[],pagination:{page:1,per:20,total:0},search:{Condition:null},form:{}});const s=(0,a.Fl)((()=>({pageIndex:u.pagination.page-1,pageSize:u.pagination.per,...u.search}))),c={};let p=(0,o.qj)({dialogVisible:!1,equipment:c});const g=(0,a.Fl)((()=>d.value.includes(19)));function b({input_txt:e}){u.search.Condition=e,u.pagination.page=1,W()}function f(e){u.pagination.page=e,W()}const v=()=>{p.dialogVisible=!1};function w({row:e,type:l}){p.dialogVisible=!0;const t=e||c;"add"==l&&(t.add=!0),p.equipment=t}const I=e=>{p.dialogVisible=!1,e.add?(0,S.ag)(e).then((()=>{(0,k.bM)({title:"成功",message:"添加设备成功",type:"success"})})):(0,S.Ol)(e).then((()=>{(0,k.bM)({title:"成功",message:"修改设备信息成功",type:"success"})}))};function W(){u.loading=!0,(0,S.eM)(s.value).then((e=>{if("200"==e.status){const l=e.data.data;u.table=l.datas,u.pagination.total=l.totalCount}})).finally((()=>u.loading=!1))}return(0,a.bv)((()=>W())),(e,l)=>{const i=(0,a.up)("search-bar"),n=(0,a.up)("el-button"),d=(0,a.up)("commonPagination"),s=(0,a.Q2)("loading");return(0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("div",h,[(0,a.Wm)(i,{data:r,onToSearch:b}),(0,o.SU)(g)?((0,a.wg)(),(0,a.j4)(n,{key:0,class:"u-add",type:"primary",onClick:l[0]||(l[0]=e=>w({type:"add"}))},{default:(0,a.w5)((()=>[j])),_:1})):(0,a.kq)("",!0)]),(0,a.wy)((0,a.Wm)((0,o.SU)(m),{table:(0,o.SU)(u).table,label:(0,o.SU)(t),onToDialog:w},null,8,["table","label"]),[[s,(0,o.SU)(u).loading]]),(0,a.Wm)(d,{pagination:(0,o.SU)(u).pagination,onToParams:f},null,8,["pagination"]),(0,a.Wm)((0,o.SU)(U),{class:"m-form","dialog-object":(0,o.SU)(p),onDialogClose:v,onDialogSuccess:I},null,8,["dialog-object"])])}}};const W=I;var q=W}}]);
//# sourceMappingURL=469.b5849e98.js.map