const navigationDrawer = document.querySelector(".navigation-drawer");
const drawerControl = document.querySelector(".drawer-control");
drawerControl.addEventListener("click", () => navigationDrawer.open ^= true);
const modeChoice = document.querySelector(".mode-choice");
modeChoice.addEventListener("mouseout", () => {
	if(mdui.getTheme() == 'light'){
		modeChoice.icon = 'light_mode--outlined';
	}
	else{
		modeChoice.icon = 'dark_mode--outlined';
	}
});
modeChoice.addEventListener("mouseover", () => {
	if(mdui.getTheme() == 'light'){
		modeChoice.icon = 'light_mode--filled';
	}
	else{
		modeChoice.icon = 'dark_mode--filled';
	}
});
modeChoice.addEventListener("click", () => {
	if(mdui.getTheme() == 'dark'){
		mdui.setTheme('light');
		if(typeof(Cookies) != 'undefined')Cookies.set('theme-mode', 'light', {expires: 365});
		modeChoice.icon = 'light_mode--filled';
	}
	else{
		mdui.setTheme('dark');
		if(typeof(Cookies) != 'undefined')Cookies.set('theme-mode', 'dark', {expires: 365});
		modeChoice.icon = 'dark_mode--filled';
	}
});