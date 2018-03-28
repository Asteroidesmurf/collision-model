import { randomArrayItem, numberBetween } from './Utilities'

export default class Model {
	canvas = {
		ctx: null,
		width: null,
		height: null
	}

	form = null
	friction = null
	speed = null
	minSize = null
	maxSize = null
	resistance = null
	particleCount = null
	particles = []
	
	constructor (ctx, canvasWidth, canvasHeight) {
		this.form = document.getElementById("settings")
		this.friction = form.elements[0].value / 100;
		this.speed = form.elements[1].value;
		this.minSize = form.elements[2].value;
		this.maxSize = form.elements[3].value;
		this.resistance = form.elements[4].value;
		this.particleCount = form.elements[5].value;
	}

	function init() {
    for (let i = 0; i < this.particleCount; i++) {
      const radius = randomIntFromRange(this.minSize, this.maxSize);
      const x = randomIntFromRange(0 + this.radius , this.canvas.width - this.radius);
      const y = randomIntFromRange(0 + this.radius , this.canvas.height - this.radius);
      const color = randomColor();
      const mass = Math.pow(2*Math.PI * this.radius, 2);
      const velocity = {
          x: randomIntFromRange(-this.speed, this.speed),
          y: randomIntFromRange(-this.speed, this.speed)
      };

      // check if spawnpoint is free, else generate new spawn
      if (i !== 0) {
        for (let j = 0; j < particles.length; j++) {
          if ( distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
            x = randomIntFromRange(0 + radius , canvas.width - radius)
            y = randomIntFromRange(0 + radius , canvas.height - radius)
            j = -1;
          }
        }
      }

      particles.push(new Particle(x, y, velocity, radius, mass, color))
    };
	};

  updateCanvasWidth (width, height) {
    this.canvas.width = width
    this.canvas.height = height
  }

	// Animation Loop
	animate() {
	  requestAnimationFrame(animate)
	  c.clearRect(0, 0, canvas.width, canvas.height)

	  particles.forEach(Particle => {
	    Particle.update(particles)
	  })
	}

	init()
	animate()
}
