"use strict";(self["webpackChunkomp"]=self["webpackChunkomp"]||[]).push([[912],{8354:function(e,l,t){t.d(l,{Aq:function(){return i},F3:function(){return d},_d:function(){return a},hH:function(){return u},he:function(){return s},k8:function(){return n},yV:function(){return r}});var o=t(6146);function a(e){return(0,o.u)().post("/api/Manage/role",e)}function i(e){return(0,o.u)().put("/api/Manage/role",e)}function n(e){return(0,o.u)().delete(`/api/Manage/role/${e}`)}function d(){return(0,o.u)().get("/api/Manage/role")}function u(e){return(0,o.u)().get(`/api/Manage/role/${e}`)}function s({id:e,prmIds:l}){return(0,o.u)().post(`/api/Manage/role/${e}/permission`,{prmIds:l})}function r(){return(0,o.u)().get("/api/Manage/permission")}},9912:function(e,l,t){t.r(l),t.d(l,{default:function(){return C}});t(6699);var o=t(6252),a=t(2262),i=t(9963),n=t(3577);const d={key:0,class:"dialog-footer"},u={emits:["dialogClose","dialogSuccess"]};var s=Object.assign(u,{__name:"roleFormDialog",props:{dialogObject:Object},setup(e,{emit:l}){const t=e,i=(0,o.Fl)({get(){return t.dialogObject.dialogVisible},set(e){return e}}),u=(0,o.Fl)((()=>({dialogTitle:t.dialogObject.title||"新建角色",dialogWidth:t.dialogObject.width||"760px",dialogCloseBtnText:t.dialogObject.closeBtnText||"取消",dialogSuccessBtnText:t.dialogObject.successBtnText||"确定",dialogIsFooter:t.dialogObject.isFooter||!0,dialogContent:t.dialogObject.content||"是否停用",dialogForm:t.dialogObject.form||s.form}))),s=(0,a.qj)({form:{name:"",describe:""}}),r=(0,a.iH)(""),c=(0,a.iH)({name:[{required:!0,message:"请输入角色名称",trigger:"blur"}]}),g=()=>{l("dialogClose"),r.value.resetFields()},m=e=>{e&&e.validate(((e,t)=>{if(e){const e={id:u.value.dialogForm.roleId,description:u.value.dialogForm.describe,name:u.value.dialogForm.name,prmIds:u.value.dialogForm.prmIds};l("dialogSuccess",e)}else console.log("error submit!",t)}))};return(e,l)=>{const t=(0,o.up)("el-input"),s=(0,o.up)("el-form-item"),p=(0,o.up)("el-form"),f=(0,o.up)("el-button"),h=(0,o.up)("el-dialog");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(h,{modelValue:(0,a.SU)(i),"onUpdate:modelValue":l[3]||(l[3]=e=>(0,a.dq)(i)?i.value=e:null),title:(0,a.SU)(u).dialogTitle,width:(0,a.SU)(u).dialogWidth,"before-close":g,draggable:""},{footer:(0,o.w5)((()=>[(0,a.SU)(u).dialogIsFooter?((0,o.wg)(),(0,o.iD)("span",d,[(0,o.Wm)(f,{onClick:g},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)((0,a.SU)(u).dialogCloseBtnText),1)])),_:1}),(0,o.Wm)(f,{type:"primary",onClick:l[2]||(l[2]=e=>m(r.value))},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)((0,a.SU)(u).dialogSuccessBtnText),1)])),_:1})])):(0,o.kq)("",!0)])),default:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"m-form-content",ref_key:"formRef",ref:r,model:(0,a.SU)(u).dialogForm,rules:c.value,"label-width":"120px"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{label:"角色名称",prop:"name"},{default:(0,o.w5)((()=>[(0,o.Wm)(t,{modelValue:(0,a.SU)(u).dialogForm.name,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,a.SU)(u).dialogForm.name=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(s,{label:"角色描述",prop:"desc"},{default:(0,o.w5)((()=>[(0,o.Wm)(t,{modelValue:(0,a.SU)(u).dialogForm.describe,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,a.SU)(u).dialogForm.describe=e),type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","width"])])}}});const r=s;var c=r,g=t(8354),m=t(9996),p=t(8825),f=t(9737);const h={class:"m-roles v-page"},k={class:"m-content"},b=(0,o._)("span",null,"当前角色",-1),w=(0,o.Uk)(" + 新建角色 "),v=(0,o.Uk)("复制权限并新建角色"),y=(0,o.Uk)(" 编辑角色 "),U=(0,o.Uk)(" 删除角色 "),S={class:"m-tree"},F={key:0,class:"m-button"},_=(0,o.Uk)("保存");var j={__name:"RolePermission",setup(e){const l=(0,p.t)();let t=(0,a.qj)({loading:!0,clientHeight:"",roleHeight:"",roles:[],dataSource:[],copy:!1,defaultRole:[],changeRole:[]});const n=(0,a.iH)(""),d=(0,a.iH)(""),u=(0,a.qj)({dialogVisible:!1,title:"",form:{}}),s=(0,o.Fl)((()=>l.role.includes(33))),r=(0,o.Fl)((()=>l.role.includes(34))),j=(0,o.Fl)((()=>l.role.includes(32))),V=(0,o.Fl)((()=>l.role.includes(37))),C=(0,o.Fl)((()=>l.role.includes(36)));(0,o.bv)((()=>{H(),x(),(0,g.yV)().then((e=>{let l=e.data.data;t.dataSource=q(l)}))}));const H=()=>{t.clientHeight=`${document.documentElement.clientHeight}`,t.roleHeight=t.clientHeight-130,window.onresize=()=>{t.clientHeight=`${document.documentElement.clientHeight}`,t.roleHeight=t.clientHeight-130}},q=e=>(e=e.map((e=>(e.label=e.name,e.childs.length&&(e.children=q(e.childs)),e))),e),x=()=>{t.loading=!0,(0,g.F3)().then((e=>{t.roles=e.data.data})).finally((()=>t.loading=!1))};(0,o.YP)(d,(e=>{e&&(n.value.setCheckedKeys([]),t.loading=!0,(0,g.hH)(e).then((e=>{const l=e.data.data[0];l&&(t.defaultRole=l.viewPermissoins)})).finally((()=>t.loading=!1)))}));const W=(e,l)=>{t.changeRole.includes(e.id)?l||(t.changeRole=t.changeRole.filter((l=>l!==e.id))):l&&t.changeRole.push(e.id)},R=()=>{u.dialogVisible=!0,u.form={},u.title="新建角色"},I=()=>{u.dialogVisible=!1},M=e=>{e.id?(0,g.Aq)(e).then((()=>{(0,m.bM)({type:"success",title:"成功",message:`修改角色【${e.name}】成功`}),x()})):(0,g._d)(e).then((()=>{(0,m.bM)({type:"success",title:"成功",message:`添加角色【${e.name}】成功`}),x()})),I()},O=()=>{u.dialogVisible=!0,u.form={prmIds:t.changeRole},u.title="复制权限并新建角色"},T=e=>{u.dialogVisible=!0,u.form=t.roles.filter((l=>l.roleId==e))[0],u.title="编辑角色"},D=e=>{f.T.confirm("删除角色后，所有赋予该角色用户的权限将全部移除！！","警告！！",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,g.k8)(e).then((()=>{(0,m.bM)({type:"success",title:"成功",message:"删除角色成功"}),x(),d.value=""})).catch((e=>{console.log(e)}))}))},B=()=>{(0,g.he)({id:d.value,prmIds:t.changeRole}).then((()=>{(0,m.bM)({type:"success",title:"成功",message:"修改角色权限成功"})}))};return(e,l)=>{const g=(0,o.up)("el-option"),m=(0,o.up)("el-select"),p=(0,o.up)("el-button"),f=(0,o.up)("el-tree"),H=(0,o.Q2)("loading");return(0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",k,[(0,o._)("h4",null,[b,(0,o.Wm)(m,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=e=>d.value=e),placeholder:"请选择角色"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,a.SU)(t).roles,((e,l)=>((0,o.wg)(),(0,o.j4)(g,{key:l,label:e.name,value:e.roleId},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,a.SU)(j)?((0,o.wg)(),(0,o.j4)(p,{key:0,class:"u-add",type:"success",onClick:R},{default:(0,o.w5)((()=>[w])),_:1})):(0,o.kq)("",!0),(0,a.SU)(V)?((0,o.wg)(),(0,o.j4)(p,{key:1,class:"u-add",type:"success",onClick:O},{default:(0,o.w5)((()=>[v])),_:1})):(0,o.kq)("",!0),d.value?((0,o.wg)(),(0,o.iD)(o.HY,{key:2},[(0,a.SU)(s)?((0,o.wg)(),(0,o.j4)(p,{key:0,class:"u-add",type:"info",onClick:l[1]||(l[1]=e=>T(d.value))},{default:(0,o.w5)((()=>[y])),_:1})):(0,o.kq)("",!0),(0,a.SU)(r)?((0,o.wg)(),(0,o.j4)(p,{key:1,class:"u-add",type:"danger",onClick:l[2]||(l[2]=e=>D(d.value))},{default:(0,o.w5)((()=>[U])),_:1})):(0,o.kq)("",!0)],64)):(0,o.kq)("",!0)]),(0,o.wy)((0,o._)("div",null,[(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",S,[(0,o.Wm)(f,{ref_key:"tree",ref:n,data:(0,a.SU)(t).dataSource,"show-checkbox":"","check-on-click-node":!0,"expand-on-click-node":!1,"default-checked-keys":(0,a.SU)(t).defaultRole,"node-key":"id","default-expand-all":"",onCheckChange:W},null,8,["data","default-checked-keys"])])),[[H,(0,a.SU)(t).loading]]),(0,a.SU)(C)?((0,o.wg)(),(0,o.iD)("div",F,[(0,o.Wm)(p,{type:"primary",onClick:B},{default:(0,o.w5)((()=>[_])),_:1})])):(0,o.kq)("",!0)],512),[[i.F8,d.value]])]),(0,o.Wm)((0,a.SU)(c),{class:"m-form","dialog-object":u,onDialogClose:I,onDialogSuccess:M},null,8,["dialog-object"])])}}};const V=j;var C=V}}]);
//# sourceMappingURL=912.d0d252f2.js.map