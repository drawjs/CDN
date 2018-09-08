const canvas = document.getElementById( "myCanvas" )
const draw = new window.Draw( canvas )

draw.addElement( "rect", {
  left  : 100,
  top   : 100,
  width : 100,
  height: 80
} )

draw.addElement( "rect", {
  left  : 260,
  top   : 100,
  width : 100,
  height: 80
} )

draw.render()
