var button = document.getElementById('buttonMenu');
var disabledButton = 0;
button.onclick = function(e) {
	var menuBurger = document.getElementById("mytopnav");
	if(disabledButton == 1) return false;
	disabledButton = 1;
    if(menuBurger.style.display == 'block'){
        menuBurger.style.visibility = 'hidden';
		menuBurger.style.opacity = "0";
		setTimeout(function(){
			menuBurger.style.display = 'none';
			disabledButton = 0;
		}, 600);
    } else {
		menuBurger.style.display = 'block';
		setTimeout(function(){
			menuBurger.style.visibility = 'visible';
			menuBurger.style.opacity = "1";
			disabledButton = 0;
		}, 5);
    }
};