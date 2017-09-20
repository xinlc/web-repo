//去除字符串两边的空格
String.prototype.trim = function () {
    return this.replace(/(^\s+)|(\s+$)/g, "");
}

//检测字符串是否为空
String.prototype.isEmpty = function () {
	if(this==null || !(/.?[^\s　]+/.test(this))){
		
		return true;
	}
	
	return false;
}

/**
 * 正则表达式验证：
 * /^[a-zA-Z0-9_\-]+$/			英文数字下划线
 * /^[\u0391-\uFFE5]+$/			必须输入汉字
 * /^[-\+]?\d+(\.\d+)?$/		number
 * /^[-\+]?\d+$/				integer
 * /^[-\+]?\d+(\.\d+)?$/		float
 * /^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2})$/	日期
 * /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ email
 * /^(((ht|f)tp(s?))\:\/\/)[a-zA-Z0-9]+\.[a-zA-Z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/  url
 * /^(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5])$/	ip地址
 * /^[1-9]\d{5}$/	邮编
 * /^([0-1]{1}\d|2[0-3]):([0-5]\d)$/    小时:分钟
 */
String.prototype.regTest=function(reg){
	
	if(this.isEmpty() || this.match(reg)){
		
		return true;
	}
	
	return false;
}



