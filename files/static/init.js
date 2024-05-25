const TopAppBar = document.querySelector(".top-app-bar");
const navigationDrawer = document.querySelector(".navigation-drawer");
const modeChoice = document.querySelector(".mode-choice");
mdui.setColorScheme('#62DFFE');
if(typeof(Cookies) != 'undefined')mdui.setTheme(Cookies.get('theme-mode'));
await Promise.allSettled([
	customElements.whenDefined('mdui-top-app-bar'),
	customElements.whenDefined('mdui-navigation-drawer')
]);
if(mdui.getTheme() == 'light'){
	modeChoice.icon = 'light_mode--outlined';
}
else{
	modeChoice.icon = 'dark_mode--outlined';
}
TopAppBar.hide = false;
if(mdui.breakpoint().up('md')){
	navigationDrawer.open = true;
}