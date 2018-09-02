fetchDraw( () => {
	// Start here
	const canvas = document.getElementById('myCanvas')
	const draw = new window.Draw( canvas )

	const exportBtn = document.getElementById( 'export' )
	const importBtn = document.getElementById( 'import' )

	exportBtn.addEventListener( 'click', function () {
		draw.exportData()
	} )

	importBtn.addEventListener( 'change', function() {
		onFileInputChange( function( text ) {
			draw.importData( text )
		} )
	} )

	draw.addElement( 'rect', {
		top   : 100,
		left  : 100,
		width : 100,
		height: 100,
	} )
	

	draw.render()
} )

function onFileInputChange( callback ) {
	try {
			const reader = new FileReader()
			function onReaderLoad( event ) {
					callback( event.target.result )
			}
			reader.onload = onReaderLoad
			reader.readAsText( event.target.files[ 0 ] )
	} catch ( e ) {
	}
}

function callback( text ) {
draw.importData( text )
}

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
