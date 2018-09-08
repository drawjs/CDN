const canvas = document.getElementById( "myCanvas" )
const draw = new window.Draw( canvas )

const text = "Hello draw.js!"
draw.addElement( "text", {
  text,
  x        : 100,
  y        : 100,
  fontSize : 30,
  fillColor: "deepSkyBlue"
} )

draw.render()