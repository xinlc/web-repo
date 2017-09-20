  /**
   * 通用工具类
   * Created by tomyli on 16/5/6.
   */
  'use strict';

  import {Alert} from "react-native";
  import BaseConfig from "../Config/BaseConfig";
  import CssUtil from "./CssUtil";
  import {realm} from "../Model/Schema";

  var CommonUtil = {
    //post请求
    post: function (url, data, onSuccess, onError) {
      let users = realm.objects('User');

      var fetchOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Token': users.length ? users[0].Token : ""
        },
        body: JSON.stringify(data)
      };

      this.request(url, fetchOptions, onSuccess, onError)
    },

    //get请求
    get: function (url, onSuccess, onError) {
      let users = realm.objects('User');

      var fetchOptions = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Token': users.length ? users[0].Token : ""
        }
      };
      // console.info('Components.CommonUtil.get.onError',onError);
      this.request(url, fetchOptions, onSuccess, onError);
    },

    //put请求
    put: function (url, data, onSuccess, onError) {
      let users = realm.objects('User');

      var fetchOptions = {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Token': users.length ? users[0].Token : ""
        },
        body: JSON.stringify(data)
      };

      this.request(url, fetchOptions, onSuccess, onError)
    },

    delete: function (url, onSuccess, onError) {
      let users = realm.objects('User');

      var fetchOptions = {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Token': users.length ? users[0].Token : ""
        }
      };

      //XLC：没明白为什么没有body
      if(arguments.length == 4){
        let data = arguments[1];
        onSuccess = arguments[2];
        onError = arguments[3];
        fetchOptions.body = JSON.stringify(data);
      }

      this.request(url, fetchOptions, onSuccess, onError);
    },

    request: function (url, fetchOptions, onSuccess = Function, onError = Function) {
      let status = null;
      this.timeout(BaseConfig.timeoutMS, fetch(url, fetchOptions))
        .then((response) => {
          console.info('Components.CommonUtil.response',response);
          status = response.status;
          return response.text();
        })
        .then((responseText) => {
          if (BaseConfig.debug)
            console.log(responseText);
          var data;
          try {
            data = JSON.parse(responseText);
          } catch (e) {
            console.info('Components.CommonUtil.request',responseText);
            // status = 202;
            data = {
              code: status,
              msg: BaseConfig.serverMessage
            };
          }
          if ([200,201,301,304].includes(status)){
            onSuccess(data);
          }else{
            // console.info('Components.CommonUtil.onError',onError, data);
            onError(data);
          }
        }).catch(function (error) {
          if (error.message == 'timeout') {
            var clientData = {
              code: 203,
              msg: BaseConfig.timeoutMessage
            };
            onError(clientData);
          }
        }
      );
    },

    timeout(ms, promise) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          reject(new Error("timeout"))
        }, ms);
        promise.then(resolve, reject)
      })
    },

    showMsg: function (title, msg) {
      Alert.alert(title, msg);
    },

    showAlertMsg: function (msg) {
      this.showMsg('提示', msg);
    },

    log: function (data) {
      console.log(data);
    },

    logObj: function (obj) {
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          console.log(i);
          console.log(obj[i]);
        }
      }
    },

    add: function (arg1, arg2) {
      arg1 = arg1.toString(), arg2 = arg2.toString();
      var arg1Arr = arg1.split("."), arg2Arr = arg2.split("."), d1 = arg1Arr.length == 2 ? arg1Arr[1] : "", d2 = arg2Arr.length == 2 ? arg2Arr[1] : "";
      var maxLen = Math.max(d1.length, d2.length);
      var m = Math.pow(10, maxLen);
      var result = Number(((arg1 * m + arg2 * m) / m).toFixed(maxLen));
      var d = arguments[2];
      return typeof d === "number" ? Number((result).toFixed(d)) : result;
    },
    /*
     函数：减法函数，用来得到精确的减法结果
     说明：函数返回较为精确的减法结果。
     参数：arg1：第一个加数；arg2第二个加数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数
     返回值：两数相减的结果
     */
    sub: function (arg1, arg2) {
      return Calc.Add(arg1, -Number(arg2), arguments[2]);
    },
    /*
     函数：乘法函数，用来得到精确的乘法结果
     说明：函数返回较为精确的乘法结果。
     参数：arg1：第一个乘数；arg2第二个乘数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数)
     返回值：两数相乘的结果
     */
    mul: function (arg1, arg2) {
      var r1 = arg1.toString(), r2 = arg2.toString(), m, resultVal, d = arguments[2];
      m = (r1.split(".")[1] ? r1.split(".")[1].length : 0) + (r2.split(".")[1] ? r2.split(".")[1].length : 0);
      resultVal = Number(r1.replace(".", "")) * Number(r2.replace(".", "")) / Math.pow(10, m);
      return typeof d !== "number" ? Number(resultVal) : Number(resultVal.toFixed(parseInt(d)));
    },
    /*
     函数：除法函数，用来得到精确的除法结果
     说明：函数返回较为精确的除法结果。
     参数：arg1：除数；arg2被除数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数)
     返回值：arg1除于arg2的结果
     */
    div: function (arg1, arg2) {
      var r1 = arg1.toString(), r2 = arg2.toString(), m, resultVal, d = arguments[2];
      m = (r2.split(".")[1] ? r2.split(".")[1].length : 0) - (r1.split(".")[1] ? r1.split(".")[1].length : 0);
      resultVal = Number(r1.replace(".", "")) / Number(r2.replace(".", "")) * Math.pow(10, m);
      return typeof d !== "number" ? Number(resultVal) : Number(resultVal.toFixed(parseInt(d)));
    },

    getCountByWidth: function (width) {
      return Math.floor(CssUtil.size.width / width);
    },

    getByteLen(str) {
      var len = 0;
      for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        //单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
          len++;
        }
        else {
          len += 2;
        }
      }
      return len;
    },
    getHeight(content) {
            var len = this.getByteLen(content);
            var rowLen = 32;
            if (len > rowLen) {
              var rowNumber = len % rowLen == 0 ? len / rowLen : Math.floor(len / rowLen + 1);
              var height = 45 + (rowNumber - 1) * 16;
              return height;
            } else {
              return 45;
            }
          }


  };

  /**
   * 兼容数组includes (includes属于es7)
   * android中Babel不支持includes？？？好像是这样的！！！
   */
  (() => {
    if(!Array.prototype.includes){
      Array.prototype.includes = function (value,index){
        return this.some(el => el === value);
      }
    }
  })();

  export default CommonUtil;
