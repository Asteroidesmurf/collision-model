import { randomArrayItem, numberBetween, distance } from './Utilities'
import Particle from './Particle'

export default class Model {
	canvas = {
		ctx: null,
		width: null,
		height: null
	}

	colors = [
    '#2185C5', 
    '#7ECEFD', 
    '#FFF6E5', 
    '#FF7F66'
	];

	form = null
	friction = null
	speed = null
	minSize = null
	maxSize = null
	resistance = null
	particleCount = null
	particles = []
	
	constructor (ctx, canvasWidth, canvasHeight) {
		// this.form = document.getElementById("settings")
		// this.friction = this.form.elements[0].value / 100
		// this.speed = this.form.elements[1].value
		// this.minSize = this.form.elements[2].value
		// this.maxSize = this.form.elements[3].value
		// this.resistance = this.form.elements[4].value
		// this.particleCount = this.form.elements[5].value
		this.canvas = {
			ctx: ctx,
			width: canvasWidth,
			height: canvasHeight
		}
		this.friction = 0.9
		this.speed = 3
		this.minSize = 1
		this.maxSize = 6
		this.resistance = .99
		this.particleCount = 100
	}

	init() {
    for (let i = 0; i < this.particleCount; i++) {
      const radius = numberBetween(this.minSize, this.maxSize)
      const x = numberBetween(0 + radius , this.canvas.width - radius)
      const y = numberBetween(0 + radius , this.canvas.height - radius)
      const color = randomArrayItem(this.colors)
      const mass = Math.pow(2*Math.PI * radius, 2)
      const velocity = {
        x: numberBetween(-this.speed, this.speed),
        y: numberBetween(-this.speed, this.speed)
      };

      // check if spawnpoint is free, else generate new spawn
      if (i !== 0) {
        for (let j = 0; j < this.particles.length; j++) {
          if ( distance(x, y, this.particles[j].x, this.particles[j].y) - radius * 2 < 0) {
            const x = numberBetween(0 + radius , this.canvas.width - radius)
            const y = numberBetween(0 + radius , this.canvas.height - radius)
            const j = -1
          }
        }
      }

      this.particles.push(new Particle(
      	this.canvas.ctx, 
      	this.canvas.width, 
      	this.canvas.height, 
      	x, 
      	y, 
      	velocity, 
      	radius, 
      	mass, 
      	color,
      	this.friction,
      	this.resistance)
      )
    };
    this.animate()
	};

  updateCanvasWidth (width, height) {
    this.canvas.width = width
    this.canvas.height = height
  }

	// Animation Loop
	animate() {
	  this.canvas.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

	  this.particles.forEach(Particle => {
	    Particle.update(this.particles)
	  })

	  requestAnimationFrame(this.animate.bind(this))
	}
}
