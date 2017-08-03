


var xhr=new new XMLHttpRequest(); //创建xhr对象
xhr.open("get","demo.php",false); //以get方式请求，url路径是demo.Php ,写false则为同步，true则为异步
xhr.send(null);  //get没有数据提交则写null
alert(xhr.responseText);    //打印服务器返回的数据
