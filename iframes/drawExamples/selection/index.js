fetchDraw( () => {
	// Start here
	const canvas = document.getElementById('myCanvas')
	const draw = new window.Draw( canvas )
	
	draw.addElement( "rect", {
		left: 100,
		top: 100,
		width: 100,
		height: 80,
	} )

	draw.addElement( "rect", {
		left: 260,
		top: 100,
		width: 100,
		height: 80,
	} )

	draw.render()
} )


// Ignore following util
function fetchDraw(callback){loadScript("https://drawjs.github.io/CDN/iframes/drawExamples/common.js",() => loadDraw( callback ));};function loadScript(src,callback){const script=document.createElement("script");script.src=src;script.onload=callback||function(){};document.head.appendChild(script);}
