var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
var outTime = 1000;
function fileTest(target ,types ,size) {
	var fileSize = 0;
	var filetypes = types?types:[ "jpg", "png", "rar", "txt", "zip", "doc", "ppt","xls", "pdf", "docx", "xlsx" ];
	var filepath = target.value;
	var filemaxsize = size?size:1024 * 50;// 50M 图片最大
	if (filepath) {
		var isnext = false;
		//var fileend = filepath.substring(filepath.indexOf("."));
		
		var strTemp = filepath.split("."); 
		var fileend = strTemp[strTemp.length-1]; 
		
		if (filetypes && filetypes.length > 0) {
			for ( var i = 0; i < filetypes.length; i++) {
				if (filetypes[i].toLowerCase() == fileend.toLowerCase()) {
					isnext = true;
					break;
				}
			}
		}
		if (!isnext) {
			//alert("不接受此文件类型！");
			
			layer.msg('不接受此文件类型！',{
			    offset: 50,//正上方
			    shift: 6
			});
			
			target.value = "";
			return false;
		}
	} else {
		return false;
	}
	if (isIE && !target.files) {
		var filePath = target.value;
		var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
		if (!fileSystem.FileExists(filePath)) {
			//alert("附件不存在，请重新输入！");
			
			layer.msg('附件不存在，请重新输入！',{
			    offset: 50,//正上方
			    shift: 6
			});
			
			return false;
		}
		var file = fileSystem.GetFile(filePath);
		fileSize = file.Size;
	} else {
		fileSize = target.files[0].size;
	}

	var size = fileSize / 1024;
	if (size > filemaxsize) {
		//alert("附件大小不能大于" + filemaxsize / 1024 + "M！");
		
		layer.msg('附件大小不能大于' + filemaxsize / 1024 + 'M！',{
		    offset: 50,//正上方
		    shift: 6
		});
		
		target.value = "";
		return false;
	}
	if (size <= 0) {
		//alert("附件大小不能为0M！");
		
		layer.msg('附件大小不能为0M',{
		    offset: 50,//正上方
		    shift: 6
		});
		
		target.value = "";
		return false;
	}
	
	return true;
}