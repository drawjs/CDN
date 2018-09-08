const canvas = document.getElementById( "myCanvas" )
const draw = new window.Draw( canvas )

draw.addElement( "polygon", {
  points: polygonPoints()
} )

// rounded polygon
draw.addElement( "polygon", {
  points            : trianglePoints(),
  curveUsesCanvasApi: true
} )

draw.render()

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