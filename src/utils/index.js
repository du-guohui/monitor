export function Special(val) {
  // 去掉特殊字符
  val = val.replace(/[\'\"\\\/\b\f\n\r\t\ \  \  ]/g, '');
  val = val.replace(/[\@\#\$\%\^\&\*\(\)\{\}\:\"\L\<\>\?\[\]]/);
  return val;
}

export function QRCode(data) {

  function Ven(url) {
    //  验证devEui长度是否为16或32；
    if (url.length == '16' || url.length == '32') {
      return true;
    } else {
      return false;
    }
  }

  if (data.indexOf("&") != -1) {
    // 新二维码解析
    let str = data.split("&");
    let list = new Array();
    let devEui = false;
    for (let i in str) {
      if (str[i].indexOf("null") != -1 || str[i].indexOf("undefined") != -1) {
      } else {
        // 参数空值去除
        if (str[i].split("=")[1] != '') {
          if (str[i].indexOf("devEui=") != -1) {
            devEui = Ven(Special(str[i].split('=')[1]));
          }
          list.push(Special(str[i]));
        }
      }
    }
    return devEui ? list.join("&") : false;
  } else {
    // 旧二维码解析
    let str = data.split(/[\n	 ]/);
    if (str.length == '2') {
      //二维码只有换行或空格符
      let appKey = Special(str[0]);
      let devEui = Special(str[1]);
      return Ven(devEui) ? `appKey=${appKey}&devEui=${devEui}` : false;
    } else if (str.length > '2') {
      //二维码appKey后面是空格，devEui里面有不规则字符,重组devEui
      let deveui = new Array();
      for (let i in str) {
        if (i > '0') {
          deveui.push(Special(str[i]));
        }
      }
      return Ven(deveui.join("")) ? `appKey=${str[0]}&devEui=${deveui.join("")}` : false;
    } else {
      // 都不符合匹配规则跳出
      return false;
    }
  }
}

export function formatDate(now) {
  function Completion(s) {
    return s < 10 ? '0' + s : s;
  }
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  return Completion(month) + "-" + Completion(date) + " " + Completion(hour) + ":" + Completion(second);
}

export function ListCh(data, url) {
  //验证设备是否已添加
  let code = true;
  let key = url.split("&");
  for (let i in key) {
    for (let s in data) {
      if (key[i].indexOf(data[s].devEui) != -1) {
        return false;
      }
    }
  }
  return code;
}

export default {
  QRCode,
  Special,
  formatDate,
  ListCh
}