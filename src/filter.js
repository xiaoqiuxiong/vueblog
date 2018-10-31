import Vue from 'vue'
//四位一空格
Vue.filter('fourSpace',function(val){
  if(val){
    return val.replace(/\s/g, '').replace(/(.{4})/g, "$1 ")
  }
});
//去除空格
Vue.filter('noGap',function (value) {
  var str = trim(value);
  return str
});
//日期处理方式
Vue.filter('dateformat', function (value, fmt) {
  var fmt = 'yyyy-MM-dd hh:mm:ss';//自定义日期输出格式
  function format(value, fmt) {
    var date = new Date(value);
    var o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "w+": date.getDay(), //星期
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
      if(k === 'w+') {
        if(o[k] === 0) {
          fmt = fmt.replace('w', '周日');
        }else if(o[k] === 1) {
          fmt = fmt.replace('w', '周一');
        }else if(o[k] === 2) {
          fmt = fmt.replace('w', '周二');
        }else if(o[k] === 3) {
          fmt = fmt.replace('w', '周三');
        }else if(o[k] === 4) {
          fmt = fmt.replace('w', '周四');
        }else if(o[k] === 5) {
          fmt = fmt.replace('w', '周五');
        }else if(o[k] === 6) {
          fmt = fmt.replace('w', '周六');
        }
      }else if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
  }
  if(value) {
    value = format(value, fmt);
  }
  return value;
});
//处理预约时间，传参接口配合，工作用不到请忽略
Vue.filter('applyTime', function (value, fmt) {
  var fmt = 'yyyyMMddhhmmss';
  function format(value, fmt) {
    var date = new Date(value);
    var o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "w+": date.getDay(), //星期
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
      if(k === 'w+') {
        if(o[k] === 0) {
          fmt = fmt.replace('w', '周日');
        }else if(o[k] === 1) {
          fmt = fmt.replace('w', '周一');
        }else if(o[k] === 2) {
          fmt = fmt.replace('w', '周二');
        }else if(o[k] === 3) {
          fmt = fmt.replace('w', '周三');
        }else if(o[k] === 4) {
          fmt = fmt.replace('w', '周四');
        }else if(o[k] === 5) {
          fmt = fmt.replace('w', '周五');
        }else if(o[k] === 6) {
          fmt = fmt.replace('w', '周六');
        }
      }else if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
  }
  if(value) {
    value = format(value, fmt);
  }
  return value;
});
//金钱三位一逗号，小数点保留两位
Vue.filter('money', function(val) {
  val = val.toString().replace(/\$|\,/g,'');
  if(isNaN(val)) {
    val = "0";
  }
  let sign = (val == (val = Math.abs(val)));
  val = Math.floor(val*100+0.50000000001);
  let cents = val%100;
  val = Math.floor(val/100).toString();
  if(cents<10) {
    cents = "0" + cents
  }
  for (var i = 0; i < Math.floor((val.length-(1+i))/3); i++) {
    val = val.substring(0,val.length-(4*i+3))+',' + val.substring(val.length-(4*i+3));
  }
  return (((sign)?'':'-') + val + '.' + cents);
})
//电话号码过滤，188****7983
Vue.filter('telFormat',function(val){
  if(val){
    return val.replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2")
  }
});
Vue.filter('idcardFormat',function(val){
  if(val){
    return val.replace(/^(.{6})(?:\d+)(.{4})$/,"$1*******$2")
  }
});
var fourSpace = Vue.filter('fourSpace');
var noGap = Vue.filter('noGap');
var dateformat = Vue.filter('dateformat');
var money = Vue.filter('money');
var telFormat = Vue.filter('telFormat');
var idcardFormat = Vue.filter('idcardFormat');
var applyTime = Vue.filter("applyTime");
export default {
  fourSpace,// 银行卡每四位空格 --- 例如:1234 3423 2432 2342
  noGap,// 去空格
  dateformat,//时间格式化 --- 例如: yyyy/MM/dd hh:mm:ss
  money,//金钱格式化：每三位逗号 小数点保留两位 --- 例如: 345.12
  telFormat,//手机号格式化 中间四位变成星号 --- 例如：188****7983
  idcardFormat,//身份证号格式化 前六位 后四位 中间变为星号 ---例如：340888*******5656
}