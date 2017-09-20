
	//js 验证电话&&手机
	function IsTelephone(obj){ // 正则判断
		var pattern=/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[0-9]{10}$)/; 
		if(pattern.test(obj)) { 
			return true; 
		}else { 
			return false; 
		} 
	} 

	function notNull(divId){//非空判断
		
		var rt = true;
		
		$("#"+divId+" .notNull").each(function(i){ //非空
			if($(this).val().isEmpty()){
				$("#showInfoDiv").html('<font color="red">'+$(this).attr('showInfo')+'</font>');
				
				//alert($(this).attr('showInfo'));
				rt = false;
				return false;
			}
		});
		
		if(rt == true){
			$("#"+divId+" .isNum").each(function(i){ //只能是数字
				if(!$(this).val().regTest(/^[-\+]?\d+(\.\d+)?$/)){
					$("#showInfoDiv").html('<font color="red">'+$(this).attr('showInfo1')+'</font>');
					rt = false;
					return false;
				}
			});
		}
		
		if(rt == true){
			
			$("#"+divId+" .isEmail").each(function(i){ //Email
				if(!$(this).val().regTest(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)){
					$("#showInfoDiv").html('<font color="red">'+$(this).attr('showInfo3')+'</font>');
					rt = false;
					return false;
				}
			});
		}
		
		if(rt == true){
			
			$("#"+divId+" .isTime").each(function(i){ //日期
				if(!$(this).val().regTest(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2})$/)){
					$("#showInfoDiv").html('<font color="red">'+$(this).attr('showInfo4')+'</font>');
					rt = false;
					return false;
				}
			});
		}
		
		if(rt == true){
			
			$("#"+divId+" .isPhone").each(function(i){ //电话 手机
				var pattern=/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[0-9]{10}$)/;
				if(!$(this).val().regTest(pattern)){
					$("#showInfoDiv").html('<font color="red">'+$(this).attr('showInfoPhone')+'</font>');
					rt = false;
					return false;
				}
			});
		}
		
		 
		
		return rt;
		
	}

	
	