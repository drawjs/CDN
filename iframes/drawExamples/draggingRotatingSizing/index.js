fetchDraw( () => {
	// Start here
	const canvas = document.getElementById('myCanvas')
	const draw = new window.Draw( canvas )
	
	draw.addElement( "polygon", {
		draggable: true,
		rotatable : true,
		sizable   : true,


		points: trianglePoints(),
		curveUsesCanvasApi: true,
	} )

	draw.addElement( "polygon", {
		draggable: false,
		rotatable : false,
		sizable   : false,

		points: trianglePoints( { x: 200 } ),
		curveUsesCanvasApi: true,
	} )

	draw.render()
} )

function trianglePoints( origin={} ) {
	const { x = 0, y = 0 } = origin
	return [
		{
			x: 100,
			y: 50
		},
		{
			x: 150,
			y: 150
		},
		{
			x: 50,
			y: 150
		}
	].map( ({ x: px, y: py }) => ( { x: px + x, y: py + y } ) )
}






















// Ignore following util
function fetchDraw(callback){loadScript("https://drawjs.github.io/CDN/iframes/drawExamples/common.js",() => loadDraw( callback ));};function loadScript(src,callback){const script=document.createElement("script");script.src=src;script.onload=callback||function(){};document.head.appendChild(script);}