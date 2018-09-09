function codeViewerCallback() {
  return {
    html: [
      '<canvas id="myCanvas"></canvas>',
      "<!--Dependencies-->",
      `<script src="https://drawjs.github.io/CDN/iframes/drawExamples/common.js"></script>'`
    ].join( "\n" )
  }
}
