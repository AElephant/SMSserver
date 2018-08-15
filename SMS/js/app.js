function winheight(){
	var winHeight=0;
	if (window.innerHeight)
	    winHeight = window.innerHeight;
	else if ((document.body) && (document.body.clientHeight))
	    winHeight = document.body.clientHeight;
	//通过Document对body进行检测，获取浏览器可视化高度
	if (document.documentElement && document.documentElement.clientHeight)
	    winHeight = document.documentElement.clientHeight;
	return winHeight;
}
function winwidth(){
	var winWidth=0;
	if(window.innerWidth){winWidth=window.innerWidth}
	else if((document.body) && (document.body.clientWidth)){winWidth=document.body.clientWidth}
	if (document.documentElement && document.documentElement.clientWidth){winWidth=document.documentElement.clientWidth}
	return winWidth
}
function logout(){
	var $ = layui.$
	$.ajax({
		type: "post",
		url: "index.html/signout",//解绑
		async:true,
		dataType: "json",
		timeout: 5000,
		beforeSerialize: function () {
		},
		beforeSubmit: function () {
		},
		success:function(data){
			if(data.result=="success"){
				window.location.href="login.html"
				}
			else if(data.result=="error")
			{
				layer.alert(data.message,{icon:2});
			}
			else{window.location.href="login.html"}

		},
		error:function(){
			layer.alert('网络连接异常 ', {icon: 2});
		}
	})

}