fetchDraw( () => {
	// Start here
	const canvas = document.getElementById('myCanvas')
	const draw = new window.Draw( canvas )
	
	draw.addElement( "polygon", {
		points: trianglePoints(),
		curveRate: 0.1
	} )

	draw.addElement( "polygon", {
		points: trianglePoints( { x: 130 } ),
		curveRate: 0.15
	} )

	draw.addElement( "polygon", {
		points: trianglePoints( { x: 260 } ),
		curveRate: 0.2
	} )

	draw.addElement( "polygon", {
		points: trianglePoints( { x: 390 } ),
		curveRate: 0.25
	} )


	draw.addElement( "polygon", {
		points: trianglePoints( { x: 520 } ),
		curveRate: 0.3
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

