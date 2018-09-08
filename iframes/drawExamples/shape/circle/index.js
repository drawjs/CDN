const canvas = document.getElementById( "myCanvas" )
const draw = new window.Draw( canvas )

draw.addElement( "circle", {
  x     : 150,
  y     : 150,
  radius: 50
} )

draw.render()