function loadDraw(callback) {
  loadScript("https://drawjs.github.io/CDN/draw/draw.js", callback)
}
function updateHtmlBodyStyle() {
  const body = document.body
  const documentElement = document.documentElement
  body.style.height = "100%"
  body.style.padding = '0'
  body.style.margin = '0'

  documentElement.style.height = "100%"
  documentElement.style.padding = '0'
  documentElement.style.margin = '0'
}
function updateMyCanvasStyle() {
  const canvas = document.getElementById("myCanvas")
  const info = document.body.getBoundingClientRect()
  canvas.setAttribute("id", "myCanvas")
  canvas.setAttribute("width", info.width)
  canvas.setAttribute("height", info.height)
  document.body.appendChild(canvas)
}
document.body.style.background = "#282c34"
updateHtmlBodyStyle()
updateMyCanvasStyle()
