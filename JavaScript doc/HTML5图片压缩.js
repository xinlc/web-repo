// h5 压缩
            /* debugger;
            const image = new Image();
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext('2d');
            const file = files[0].file;
            const reader = new FileReader(); // 读取客户端上的文件
            reader.onload = function() {
                const url = reader.result; // 读取到的文件内容.这个属性只在读取操作完成之后才有效,并且数据的格式取决于读取操作是由哪个方法发起的.所以必须使用reader.onload，
                image.src = url; // reader读取的文件内容是base64,利用这个url就能实现上传前预览图片

            };
            image.onload = function() {
                var w = image.naturalWidth,
                    h = image.naturalHeight;
                canvas.width = w;
                canvas.height = h;
                ctx.drawImage(image, 0, 0, w, h, 0, 0, w, h);
                var adata = canvas.toDataURL("image/jpeg", 0.1);
                console.log(adata.length);
            };
            reader.readAsDataURL(file); */