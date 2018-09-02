// * Point
// * Line
// * Polyline
// * Rect
// * Circle
// * Polygon

loadDraw( () => {
	const canvas = appendFitCanvasToBody()
	const draw = new window.Draw( canvas )
	
	draw.addElement( "line", {
		source: {
			x: 30,
			y: 15
		},
		target: {
			x: 230,
			y: 15
		}
	} )

	draw.addElement( 'polyline', {
		points: [
			{
				x: 30,
				y: 50
			},
			{
				x: 80,
				y: 230
			},
			{
				x: 130,
				y: 50
			},
			{
				x: 180,
				y: 230
			},
			{
				x: 230,
				y: 50
			},
		]
	} )
	draw.render()
} )


// Ignore following util functions
function loadDraw(callback){loadScript("https://drawjs.github.io/CDN/draw/draw.js",callback);function loadScript(src,callback){const script=document.createElement("script");script.src=src;script.onload=callback||function(){};document.head.appendChild(script)}}
function appendFitCanvasToBody(){document.body.style.height='100%';document.documentElement.style.height='100%';const canvas=document.createElement('canvas');const info=document.body.getBoundingClientRect();console.log(info.width,info.height);canvas.setAttribute('width',info.width);canvas.setAttribute('height',info.height);document.body.appendChild(canvas);return canvas}
document.body.style.background = "#282c34"

