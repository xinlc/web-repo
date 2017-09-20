/***************原生对象工类方法****************/
/**
 * 判断非空
 * @param obj
 * @returns {boolean}
 */
function isEmpty(obj) {
  if (obj == undefined || obj == null || new String(obj).trim() == '') {
    return true;
  } else {
    return false;
  }
}
/**
 * 判断非空
 * @param obj
 * @returns {boolean}
 */
function isNotEmpty(obj) {
  return isEmpty(obj) ? false : true;
}
/**
 * 获取字符串真实长度 汉字算两位
 * @param str
 * @returns {number}
 */
var getRealLength = function (str) {
  return isEmpty(str) ? 0 : str.replace(/[^\x00-\xff]/g, "**").length;
}
var class2type = {}, toString = Object.prototype.toString;
(function () {
  var typeArr = "Boolean,Number,String,Function,Array,Date,RegExp,Object".split(",");
  for (var i = 0; i < typeArr.length; i++) {
    var name = typeArr[i];
    class2type["[object " + name + "]"] = name.toLowerCase();
  }
})()
/**
 * 判断参数类型
 * @param obj
 * @returns {string}
 */
function type(obj) {
  return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
}
/**
 * 判断参数是否为布尔类型
 * @param obj
 * @returns {boolean}
 */
function isBoolean(obj) {
  return isEmpty(obj) ? false : type(obj) === 'boolean';
}
/**
 * 判断参数是否为数字类型
 * @param obj
 * @returns {boolean}
 */
function isNumeric(obj) {
  return isEmpty(obj) ? false : type(obj) === 'number';
}
function isString(obj) {
  return isEmpty(obj) ? false : type(obj) === 'string';
}
function isFunction(obj) {
  return isEmpty(obj) ? false : type(obj) === 'function';
}
function isArray(obj) {
  return isEmpty(obj) ? false : type(obj) === 'array';
}
function isDate(obj) {
  return isEmpty(obj) ? false : type(obj) === 'date';
}
function isRegExp(obj) {
  return isEmpty(obj) ? false : type(obj) === 'regexp';
}
function isObject(obj) {
  return isEmpty(obj) ? false : type(obj) === 'object';
}