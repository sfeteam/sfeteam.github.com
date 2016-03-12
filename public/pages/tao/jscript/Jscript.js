window.onload = function(){
	var about = document.getElementById("hd_right");
		about.onmouseover = function(){
			var menu = document.getElementById("subnav");		
			clearInterval(menu.time);
			menu.time=setInterval(function(){
			menu.style.height = menu.offsetHeight+15+"px";
			if(menu.offsetHeight>=120){
				clearInterval(menu.time);
			}
		},30)
	}

	var about = document.getElementById("hd_right");
		about.onmouseout = function(){
			var menu = document.getElementById("subnav");	
			clearInterval(menu.time);
			menu.time=setInterval(function(){
			menu.style.height = menu.offsetHeight-2+"px";
			if(menu.offsetHeight<=0){
				clearInterval(menu.time);
			}
		},30)
	}

	var hd_menu = document.getElementsByTagName("li");
	for(var i=0;i<hd_menu.length;i++){
		hd_menu[i].onmouseover = function(){
			var osb = this.getElementsByTagName("ul")[0];
			if(osb){
				var This = osb;
				clearInterval(This.time);
				This.time = setInterval(function(){
					This.style.height = This.offsetHeight+20+"px";
					if(This.offsetHeight>=200){
						clearInterval(This.time);
					}
				},30)
			}
		}
	}

	var hd_menu = document.getElementsByTagName("li");
	for(var i=0;i<hd_menu.length;i++){
		hd_menu[i].onmouseout = function(){
			var osb = this.getElementsByTagName("ul")[0];
			if(osb){
				var This = osb;
				clearInterval(This.time);
				This.time = setInterval(function(){
					This.style.height = This.offsetHeight-2+"px";
					if(This.offsetHeight<=0){
						clearInterval(This.time);
					}
				},30)
			}
		}
	}
}