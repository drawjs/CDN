// * Point
// * Line
// * Polyline
// * Rect
// * Circle
// * Polygon

loadDraw( () => {
	const canvas = appendFitCanvasToBody()
	const draw = new window.Draw( canvas )
	
	draw.addElement( "polygon", {
		points: trianglePoints(),
		curveRate: 0.001
	} )

	draw.addElement( "polygon", {
		points: trianglePoints( { x: 130 } ),
		curveRate: 0.2
	} )

	draw.addElement( "polygon", {
		points: trianglePoints( { x: 260 } ),
		curveRate: 0.3
	} )

	draw.addElement( "polygon", {
		points: trianglePoints( { x: 390 } ),
		curveRate: 0.5
	} )


	draw.addElement( "polygon", {
		points: trianglePoints( { x: 520 } ),
		curveRate: 1
	} )

	draw.render()
} )


function trianglePoints( origin={} ) {
	const { x = 0, y = 0 } = origin
	return [
		{
			x: 100,
			y: 0
		},
		{
			x: 150,
			y: 100
		},
		{
			x: 50,
			y: 100
		}
	].map( ({ x: px, y: py }) => ( { x: px + x, y: py + y } ) )
}


// Ignore following util functions
function loadDraw(callback){loadScript("https://drawjs.github.io/CDN/draw/draw.js",callback);function loadScript(src,callback){const script=document.createElement("script");script.src=src;script.onload=callback||function(){};document.head.appendChild(script)}}
function appendFitCanvasToBody(){document.body.style.height='100%';document.documentElement.style.height='100%';const canvas=document.createElement('canvas');const info=document.body.getBoundingClientRect();console.log(info.width,info.height);canvas.setAttribute('width',info.width);canvas.setAttribute('height',info.height);document.body.appendChild(canvas);return canvas}
document.body.style.background = "#282c34"

