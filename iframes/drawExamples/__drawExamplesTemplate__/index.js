fetchDraw( () => {
	// Start here
	const canvas = document.getElementById('myCanvas')
	const draw = new window.Draw( canvas )
	
} )






















// Ignore following util
function fetchDraw(callback){loadScript("https://drawjs.github.io/CDN/iframes/drawExamples/common.js",() => loadDraw( callback ));};function loadScript(src,callback){const script=document.createElement("script");script.src=src;script.onload=callback||function(){};document.head.appendChild(script);}
