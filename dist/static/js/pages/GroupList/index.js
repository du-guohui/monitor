global.webpackJsonp([13],{"3hcm":function(t,i,e){"use strict";var a=e("Vtd5"),s=e("IXn7");var r=function(t){e("TK1o")},o=e("ybqe")(a.a,s.a,r,"data-v-72fa59d2",null);i.a=o.exports},IXn7:function(t,i,e){"use strict";var a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return""!=t.data?e("div",{staticClass:"container"},[e("div",{staticClass:"list-tops"},[e("wux-cell-group",{attrs:{mpcomid:"1"}},[e("wux-cell",{attrs:{title:"分组名称："+t.data[0].group.name,mpcomid:"0"}})],1),t._v(" "),t.data[0].group.is_default?t._e():e("div",{staticClass:"fazhi"},[e("div",{staticClass:"title"},[t._v("告警阈值：\n        "),t.show?e("div",{staticClass:"tt"},[t._v("温度:"+t._s(t.temperature[0])+"°C - "+t._s(t.temperature[1])+"°C")]):t._e(),t._v(" "),t.show?e("div",{staticClass:"tt"},[t._v("湿度:"+t._s(t.humidity[0])+"% - "+t._s(t.humidity[1])+"%")]):t._e(),t._v(" "),e("div",{staticClass:"switch"},[e("wux-switch",{attrs:{value:t.show,color:"#0093fb",eventid:"0",mpcomid:"2"},on:{change:t.Switch}})],1)]),t._v(" "),t.show?e("div",{staticClass:"txt"},[e("div",{staticClass:"title1"},[t._v("温度:")]),t._v(" "),e("div",{staticClass:"box"},[e("div",{staticClass:"min"},[t._v("-10°C")]),t._v(" "),e("div",{staticClass:"cc"},[e("wux-slider",{attrs:{min:"-10",max:"50",step:"1",value:t.temperature,controlled:"",trackStyle:"background-color: #0093fb",eventid:"1",mpcomid:"3"},on:{change:t.TemperatureCh}})],1),t._v(" "),e("div",{staticClass:"max"},[t._v("50°C")])])]):t._e(),t._v(" "),t.show?e("div",{staticClass:"txt"},[e("div",{staticClass:"title1"},[t._v("湿度:")]),t._v(" "),e("div",{staticClass:"box"},[e("div",{staticClass:"min"},[t._v("0%")]),t._v(" "),e("div",{staticClass:"cc"},[e("wux-slider",{attrs:{min:"0",max:"100",step:"1",value:t.humidity,controlled:"",trackStyle:"background-color: #0093fb",eventid:"2",mpcomid:"4"},on:{change:t.HumidityCh}})],1),t._v(" "),e("div",{staticClass:"max"},[t._v("100%")])])]):t._e()]),t._v(" "),e("div",{staticClass:"ts"},[t._v(t._s(t.group.length>"0"?"已选择"+t.group.length+"个设备":"未选择设备"))])],1),t._v(" "),e("div",{staticClass:"list"},[e("wux-checkbox-group",{attrs:{value:t.group,eventid:"3",mpcomid:"6"},on:{change:t.onChange}},t._l(t.DeviceList,function(i,a){return e("div",{key:a,staticClass:"group-list"},t._l(i.device_list,function(s,r){return e("div",{key:r,staticClass:"box"},[e("div",{staticClass:"img"},[s.img_url?e("img",{attrs:{src:t.serverUrl+s.img_url}}):t._e()]),t._v(" "),e("div",{staticClass:"title wux-ellipsis"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(i.group.name))]),t._v(" "),e("wux-checkbox",{staticClass:"checkbox",attrs:{color:"positive",value:s.id,disabled:i.group.is_default&&t.data[0].group.is_default,mpcomid:"5-"+a+"-"+r}})],1)}))}))],1),t._v(" "),e("div",{staticClass:"list-button",class:{button2:t.data[0].group.is_default}},[t.data[0].group.is_default?t._e():e("div",{staticClass:"button"},[e("wux-button",{attrs:{block:"",type:"assertive",eventid:"4",mpcomid:"7"},on:{click:t.Delete}},[t._v("删除分组")])],1),t._v(" "),e("div",{staticClass:"button"},[e("wux-button",{attrs:{block:"",type:"positive",eventid:"5",mpcomid:"8"},on:{click:t.PostData}},[t._v("保存")])],1)]),t._v(" "),e("wux-toast",{attrs:{id:"wux-toast",mpcomid:"9"}}),t._v(" "),e("wux-dialog",{attrs:{id:"wux-dialog--alert",mpcomid:"10"}}),t._v(" "),e("wux-dialog",{attrs:{id:"wux-dialog",mpcomid:"11"}})],1):t._e()},staticRenderFns:[]};i.a=a},TK1o:function(t,i){},Vtd5:function(t,i,e){"use strict";var a=e("Gu7T"),s=e.n(a),r=e("mvHQ"),o=e.n(r),u=e("2FZb"),n=e("olkN");i.a={computed:{DeviceList:function(){return n.a.state.DeviceList}},data:function(){return{show:!1,serverUrl:"",data:[],group:[],temperature:[],humidity:[],id:[]}},methods:{Switch:function(t){this.show=t.mp.detail.value},TemperatureCh:function(t){this.temperature=t.mp.detail.value},HumidityCh:function(t){this.humidity=t.mp.detail.value},Delete:function(){var t=this;Object(u.b)().alert({resetOnClose:!0,title:"删除确认",content:"是否删除该分组？",buttons:[{text:"取消"},{text:"确定",type:"primary",onTap:function(i){t.ajax("device/deleteDeviceGroup",{id:t.$route.query.id},"POST").then(function(i){t.Toast("success","操作成功"),n.a.commit("ChangeList"),setTimeout(function(){wx.navigateBack(1)},1e3)})}}]})},PostData2:function(){var t=this;this.ajax("device/moveDeviceListToGroup",{group_id:this.$route.query.id,device_id_list:this.group},"POST").then(function(i){"success"==i&&(t.Toast("success","操作成功"),n.a.commit("ChangeList"),setTimeout(function(){wx.navigateBack(1)},1e3))})},PostData:function(){var t=this;Object(u.b)().alert({resetOnClose:!0,title:"修改确认",content:"是否保存该分组？",buttons:[{text:"取消"},{text:"确定",type:"primary",onTap:function(i){t.show&&t.group.length>"0"?t.ajax(t.id.length>"0"?"alarm/multi_update_threshold":"alarm/multi_create_threshold",{data:o()([{id:t.id[0],param:"temperature",device_group_id:t.$route.query.id,max:t.temperature[1],min:t.temperature[0],is_on:t.show},{id:t.id[1],param:"humidity",device_group_id:t.$route.query.id,max:t.humidity[1],min:t.humidity[0],is_on:t.show}])},t.id.length>"0"?"PUT":"POST").then(function(i){"success"==i&&t.PostData2()}):!t.show&&t.id.length>"0"?t.ajax("alarm/multi_update_threshold",{data:o()([{id:t.id[0],param:"temperature",device_group_id:t.$route.query.id,max:t.temperature[1],min:t.temperature[0],is_on:t.show},{id:t.id[1],param:"humidity",device_group_id:t.$route.query.id,max:t.humidity[1],min:t.humidity[0],is_on:t.show}])},"PUT").then(function(i){"success"==i&&t.PostData2()}):t.PostData2()}}]})},GetData:function(){var t=this;this.ajax("alarm/get_threshold_by_group",{group_id:this.$route.query.id}).then(function(i){if(i.length>"0"){var e=i.filter(function(t){return 1==t.is_on});for(var a in e.length>"0"&&(t.show=!0),i){var s=i.filter(function(t){return"temperature"==t.param}),r=i.filter(function(t){return"humidity"==t.param});t.temperature[0]=s[0].min,t.temperature[1]=s[0].max,t.id[0]=s[0].id,t.humidity[0]=r[0].min,t.humidity[1]=r[0].max,t.id[1]=r[0].id}}else t.temperature=[10,30],t.humidity=[30,70]}),this.serverUrl=this.$url,this.group=[],this.data=this.DeviceList.filter(function(i){return i.group.id==t.$route.query.id})},GetList:function(){var t=this.data[0].device_list;for(var i in t)this.group.push(String(t[i].id))},onChange:function(t){var i=t.mp.detail.value,e=this.group,a=-1===e.indexOf(i)?[].concat(s()(e),[i]):e.filter(function(t){return t!==i});this.group=a}},mounted:function(){this.show=!1,this.GetData()},watch:{data:function(){""!=this.data&&this.GetList()}}}}},["Wu7q"]);