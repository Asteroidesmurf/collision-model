export default class Impact {
    ctx = null
    x = null
    y = null
    radius = null
    y = null

    constructor (ctx, x, y, radius) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.radius = radius
        this.opacity = 0.4
    }
    
    update () {
        impactArray = impactArray.filter(impact => impact.opacity != 0)
        
        if (this.opacity > 0) {
            this.opacity -= .005
            this.opacity = Math.max(0, this.opacity)
        } 
        this.draw()
    }

    draw () {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.save()
        c.globalAlpha = this.opacity
        c.fillStyle = 'red'
        c.fill()
        c.restore()
        c.closePath()
    }
}
