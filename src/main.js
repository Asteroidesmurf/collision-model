import Model from './components/Model'

// Setup canvas.
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight - 60;

// Setting canvas width and height
canvas.width = canvasWidth
canvas.height = canvasHeight

addEventListener('resize', () => {
  canvasWidth = window.innerWidth
  canvasHeight = window.innerHeight - 60

  canvas.width = canvasWidth
  canvas.height = canvasHeight

  model.updateCanvasWidth(canvasWidth, canvasHeight)
})

// Start app.
const model = new Model(ctx, canvasWidth, canvasHeight)
model.init()