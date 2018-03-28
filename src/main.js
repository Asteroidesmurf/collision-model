import Model from './components/Model'

// Setup canvas.
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Setting canvas width and height
canvas.width = canvasWidth
canvas.height = canvasHeight

addEventListener('resize', () => {
  canvasWidth = window.innerWidth
  canvasHeight = window.innerHeight

  canvas.width = canvasWidth
  canvas.height = canvasHeight

  model.updateCanvasWidth(canvasWidth, canvasHeight)
})

// Start app.
const model = new Model(ctx, canvasWidth, canvasHeight)