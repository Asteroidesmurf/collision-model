import { rotate, resolveCollision, distance } from './Utilities'

export default class Particle {
    ctx = null
    width = null
    height = null
    velocity = {
        x: null,
        y: null
    }
    x = null
    y = null
    radius = null
    color = null
    mass = null
    impactArray = null
    friction = null
    constructor (ctx, width, height, x, y, velocity, radius, mass, color, friction) {
        this.ctx = ctx
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.velocity = {
            x: velocity.x,
            y: velocity.y
        };
        this.radius = radius;
        this.color = color;
        this.mass = mass;
        this.impactArray = []
        this.friction =
    }

    update (particles) {
        for (var i = 0; i < particles.length; i++) {
            if(this === particles[i]) continue;
                if (distance(this.x, this.y, particles[i].x, particles[i].y) - (this.radius + particles[i].radius) < 0) {
                    resolveCollision(this, particles[i], this.friction)

                    generateImpact(this, particles[i])
                }
            }
        }

        if(this.y + this.radius + this.velocity.y >= innerHeight || this.y < this.radius) {
            this.velocity.y = -this.velocity.y
        }

        if(this.x + this.radius + this.velocity.x >= innerWidth || this.x < this.radius) {
            this.velocity.x = -this.velocity.x
        }

        this.y += this.velocity.y;
        this.x += this.velocity.x;

        this.y = resistance * this.y;
        this.x = resistance * this.x;

        impactArray.forEach(Impact => {
            Impact.update();
        });

        this.draw();
    }

    generateImpact(part1, part2) {
        const part1energy = part1.mass * (part1.velocity.x * part1.velocity.y / 2)
        const part2energy = part2.mass * (part2.velocity.x * part2.velocity.y / 2)
        const impactRadius = Math.sqrt(Math.PI * 2 * Math.abs(part1energy + part2energy)) * (1 - friction)
        part1.impactArray.push(new Impact(part1.x, part1.y, impactRadius))
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.save()
        this.ctx.globalAlpha = this.opacity
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.restore()
        this.ctx.strokeStyle = this.color
        this.ctx.stroke()
        this.ctx.closePath()
    }
}