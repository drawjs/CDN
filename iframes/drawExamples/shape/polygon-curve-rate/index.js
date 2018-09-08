const canvas = document.getElementById( "myCanvas" )
const draw = new window.Draw( canvas )

draw.addElement( "polygon", {
  points   : trianglePoints(),
  curveRate: 0.1
} )

draw.addElement( "polygon", {
  points   : trianglePoints( { x: 130 } ),
  curveRate: 0.15
} )

draw.addElement( "polygon", {
  points   : trianglePoints( { x: 260 } ),
  curveRate: 0.2
} )

draw.addElement( "polygon", {
  points   : trianglePoints( { x: 390 } ),
  curveRate: 0.25
} )

draw.addElement( "polygon", {
  points   : trianglePoints( { x: 520 } ),
  curveRate: 0.3
} )

draw.render()

function trianglePoints( origin = {} ) {
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
  ].map( ( { x: px, y: py } ) => ( { x: px + x, y: py + y } ) )
}