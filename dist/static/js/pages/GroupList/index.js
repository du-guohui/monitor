global.webpackJsonp([14],{"3hcm":function(t,i,e){"use strict";var a=e("Vtd5"),s=e("IXn7");var n=function(t){e("TK1o")},o=e("ybqe")(a.a,s.a,n,"data-v-72fa59d2",null);i.a=o.exports},IXn7:function(t,i,e){"use strict";var a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return""!=t.data?e("div",{staticClass:"container"},[e("div",{staticClass:"list-tops"},[e("wux-cell-group",{attrs:{mpcomid:"3"}},[t.data[0].group.is_default?e("wux-cell",{attrs:{title:"分组名称："+t.data[0].group.name,mpcomid:"2"}}):e("wux-cell",{staticClass:"GroupName",attrs:{"hover-class":"none",mpcomid:"1"}},[e("wux-input",{attrs:{label:"分组名称：",value:t.name,placeholder:"请输入分组名称",controlled:"",type:"text",id:"name",eventid:"0",mpcomid:"0"},on:{change:t.NameChange}})],1)],1),t._v(" "),t.data[0].group.is_default?t._e():e("div",{staticClass:"fazhi"},[e("div",{staticClass:"title"},[t._v("告警阈值：\n        "),t.show?e("div",{staticClass:"tt"},[t._v("温度:"+t._s(t.temperature[0])+"°C - "+t._s(t.temperature[1])+"°C")]):t._e(),t._v(" "),t.show?e("div",{staticClass:"tt"},[t._v("湿度:"+t._s(t.humidity[0])+"% - "+t._s(t.humidity[1])+"%")]):t._e(),t._v(" "),e("div",{staticClass:"switch"},[e("wux-switch",{attrs:{value:t.show,color:"#0093fb",eventid:"1",mpcomid:"4"},on:{change:t.Switch}})],1)]),t._v(" "),t.show?e("div",{staticClass:"txt"},[e("div",{staticClass:"title1"},[t._v("温度:")]),t._v(" "),e("div",{staticClass:"box"},[e("div",{staticClass:"min"},[t._v("-10°C")]),t._v(" "),e("div",{staticClass:"cc"},[e("wux-slider",{attrs:{min:"-10",max:"50",step:"1",value:t.temperature,controlled:"",trackStyle:"background-color: #0093fb",eventid:"2",mpcomid:"5"},on:{change:t.TemperatureCh}})],1),t._v(" "),e("div",{staticClass:"max"},[t._v("50°C")])])]):t._e(),t._v(" "),t.show?e("div",{staticClass:"txt"},[e("div",{staticClass:"title1"},[t._v("湿度:")]),t._v(" "),e("div",{staticClass:"box"},[e("div",{staticClass:"min"},[t._v("0%")]),t._v(" "),e("div",{staticClass:"cc"},[e("wux-slider",{attrs:{min:"0",max:"100",step:"1",value:t.humidity,controlled:"",trackStyle:"background-color: #0093fb",eventid:"3",mpcomid:"6"},on:{change:t.HumidityCh}})],1),t._v(" "),e("div",{staticClass:"max"},[t._v("100%")])])]):t._e()]),t._v(" "),e("div",{staticClass:"ts"},[t._v(t._s(t.group.length>"0"?"已选择"+t.group.length+"个设备":"未选择设备"))])],1),t._v(" "),e("div",{staticClass:"list"},[e("wux-checkbox-group",{attrs:{value:t.group,eventid:"4",mpcomid:"8"},on:{change:t.onChange}},t._l(t.DeviceList,function(i,a){return e("div",{key:a,staticClass:"group-list"},t._l(i.device_list,function(s,n){return e("div",{key:n,staticClass:"box"},[e("div",{staticClass:"img"},[s.img_url?e("img",{attrs:{src:t.serverUrl+s.img_url}}):t._e()]),t._v(" "),e("div",{staticClass:"title wux-ellipsis"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(i.group.name))]),t._v(" "),e("wux-checkbox",{staticClass:"checkbox",attrs:{color:"positive",value:s.id,disabled:i.group.is_default&&t.data[0].group.is_default,mpcomid:"7-"+a+"-"+n}})],1)}))}))],1),t._v(" "),e("div",{staticClass:"list-button",class:{button2:t.data[0].group.is_default}},[t.data[0].group.is_default?t._e():e("div",{staticClass:"button"},[e("wux-button",{attrs:{block:"",type:"assertive",eventid:"5",mpcomid:"9"},on:{click:t.Delete}},[t._v("删除分组")])],1),t._v(" "),e("div",{staticClass:"button"},[e("wux-button",{attrs:{block:"",type:"positive",eventid:"6",mpcomid:"10"},on:{click:t.PostData}},[t._v("保存")])],1)]),t._v(" "),e("wux-toast",{attrs:{id:"wux-toast",mpcomid:"11"}}),t._v(" "),e("wux-dialog",{attrs:{id:"wux-dialog--alert",mpcomid:"12"}}),t._v(" "),e("wux-dialog",{attrs:{id:"wux-dialog",mpcomid:"13"}}),t._v(" "),e("wux-loading",{attrs:{id:"wux-loading",mpcomid:"14"}})],1):t._e()},staticRenderFns:[]};i.a=a},TK1o:function(t,i){},Vtd5:function(t,i,e){"use strict";var a=e("Gu7T"),s=e.n(a),n=e("mvHQ"),o=e.n(n),r=e("2FZb"),u=e("olkN");i.a={computed:{DeviceList:function(){return u.a.state.Data.Device},Loading:function(){return u.a.state.Loading}},data:function(){return{name:"",nChange:!1,DeviceIndex:0,show:!1,serverUrl:"",data:[],group:[],temperature:[],humidity:[],id:[],load:!1}},methods:{NameChange:function(t){this.name=t.mp.detail.value,this.nChange=!0},Switch:function(t){this.show=t.mp.detail.value},TemperatureCh:function(t){this.temperature=t.mp.detail.value},HumidityCh:function(t){this.humidity=t.mp.detail.value},Delete:function(){var t=this;Object(r.b)().alert({resetOnClose:!0,title:"删除确认",content:'删除后该分组的设备将转移到"默认组"下',buttons:[{text:"取消"},{text:"确定",type:"primary",onTap:function(i){t.ajax("device/deleteDeviceGroup",{id:t.$route.query.id},"POST").then(function(i){t.Toast("success","操作成功"),setTimeout(function(){wx.navigateBack(1)},800)})}}]})},PostData2:function(){var t=this;this.ajax("device/moveDeviceListToGroup",{group_id:this.$route.query.id,device_id_list:this.group},"POST").then(function(i){"success"==i&&(t.Toast("success","操作成功"),setTimeout(function(){wx.navigateBack(1)},800))})},PostData:function(){var t=this;Object(r.b)().alert({resetOnClose:!0,title:"修改确认",content:"是否保存该分组？",buttons:[{text:"取消"},{text:"确定",type:"primary",onTap:function(i){t.nChange&&t.PostName(),t.show&&t.group.length>"0"?t.ajax(t.id.length>"0"?"alarm/multi_update_threshold":"alarm/multi_create_threshold",{data:o()([{id:t.id[0],param:"temperature",device_group_id:t.$route.query.id,max:t.temperature[1],min:t.temperature[0],is_on:t.show},{id:t.id[1],param:"humidity",device_group_id:t.$route.query.id,max:t.humidity[1],min:t.humidity[0],is_on:t.show}])},t.id.length>"0"?"PUT":"POST").then(function(i){"success"==i&&t.PostData2()}):!t.show&&t.id.length>"0"?t.ajax("alarm/multi_update_threshold",{data:o()([{id:t.id[0],param:"temperature",device_group_id:t.$route.query.id,max:t.temperature[1],min:t.temperature[0],is_on:t.show},{id:t.id[1],param:"humidity",device_group_id:t.$route.query.id,max:t.humidity[1],min:t.humidity[0],is_on:t.show}])},"PUT").then(function(i){"success"==i&&t.PostData2()}):t.PostData2()}}]})},PostName:function(){this.ajax("device/device_group/"+this.$route.query.id+"/",{name:this.name},"PUT").then(function(t){})},GetData:function(){var t=this;this.ajax("alarm/get_threshold_by_group",{group_id:this.$route.query.id}).then(function(i){if(i.length>"0"){var e=i.filter(function(t){return 1==t.is_on});for(var a in e.length>"0"&&(t.show=!0),i){var s=i.filter(function(t){return"temperature"==t.param}),n=i.filter(function(t){return"humidity"==t.param});t.temperature[0]=s[0].min,t.temperature[1]=s[0].max,t.id[0]=s[0].id,t.humidity[0]=n[0].min,t.humidity[1]=n[0].max,t.id[1]=n[0].id}}else t.temperature=[10,30],t.humidity=[30,70]})},GetList:function(){var t=this;if(this.load){this.data=this.DeviceList.filter(function(i){return i.group.id==t.$route.query.id}),this.name=this.data[0].group.name;var i=this.data[0].device_list;for(var e in i)this.group.push(String(i[e].id))}else setTimeout(function(){return t.GetList()},200)},onChange:function(t){var i=t.mp.detail.value,e=this.group,a=-1===e.indexOf(i)?[].concat(s()(e),[i]):e.filter(function(t){return t!==i});this.group=a}},onShow:function(){this.nChange=!1,this.serverUrl=this.$url,this.data=[],this.group=[],"false"==this.$route.query.is_default&&this.GetData(),this.GetList()},watch:{Loading:function(){this.Loading?this.load=!1:this.load=!0},DeviceList:function(){for(var t in this.DeviceIndex=0,this.DeviceList)this.DeviceIndex=this.DeviceIndex+this.DeviceList[t].device_list.length}}}}},["Wu7q"]);