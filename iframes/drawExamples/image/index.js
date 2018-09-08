const canvas = document.getElementById( "myCanvas" )
const draw = new window.Draw( canvas )

const src = "https://terry-su.github.io/CDN/images/Octocat.png"
draw.addElement( "image", {
  src,
  width: 300
} )

draw.render()