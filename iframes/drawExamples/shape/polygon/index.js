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
		points: polygonPoints(),
	} )

	// rounded polygon
	draw.addElement( "polygon", {
		points: trianglePoints(),
		curveUsesCanvasApi: true
	} )

	draw.render()
} )


function polygonPoints() {
	return [
		{
			x: 100,
			y: 35
		},
		{
			x: 150,
			y: 80
		},
		{
			x: 125,
			y: 130
		},
		{
			x: 75,
			y: 130
		},
		{
			x: 50,
			y: 80
		}
	]
}

function trianglePoints() {
	return [
		{
			x: 230,
			y: 35
		},
		{
			x: 280,
			y: 120
		},
		{
			x: 180,
			y: 150
		}
	]
}


// Ignore following util functions
function loadDraw(callback){loadScript("https://drawjs.github.io/CDN/draw/draw.js",callback);function loadScript(src,callback){const script=document.createElement("script");script.src=src;script.onload=callback||function(){};document.head.appendChild(script)}}
function appendFitCanvasToBody(){document.body.style.height='100%';document.documentElement.style.height='100%';const canvas=document.createElement('canvas');const info=document.body.getBoundingClientRect();console.log(info.width,info.height);canvas.setAttribute('width',info.width);canvas.setAttribute('height',info.height);document.body.appendChild(canvas);return canvas}
document.body.style.background = "#282c34"

