export class Scene {
    ctx;
    entities = [];
    constructor(ctx) {
        this.ctx = ctx;
    }
    beforeUpdate() {
        this.entities.forEach(entity => {
            entity.beforeUpdate(this.ctx)
        })
    }
    update(delta) {
        this.entities.forEach(entity => {
            entity.update(delta)
        })
    }
    draw() {
        this.entities.forEach(entity => {
            entity.draw(this.ctx)
        })
    }
    add(entity) {
        this.entities.push(entity);
    }
}