import Model from './components/Model'

// Setup canvas.
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const form = document.getElementById("settings")
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

  model = new Model(ctx, canvasWidth, canvasHeight)
  model.init()
})

form[7].addEventListener('click', submitForm);

// Start app.
let model = new Model(ctx, canvasWidth, canvasHeight)
model.init()

function submitForm() {
    console.log('submitted')
    model = new Model(ctx, canvasWidth, canvasHeight)
    model.init()

    return false
}
