function Rectangle(x, y, width, height) {
    this.x = (x == null) ? 0 : x;
    this.y = (y == null) ? 0 : y;
    this.width = (width == null) ? 0 : width;
    this.height = (height == null) ? this.width : height;
    this.intersects = function (rect) {
    if (rect == null) {
    window.console.warn('Missing parameters on function intersects');
    } else {
    return (this.x < rect.x + rect.width &&
    this.x + this.width > rect.x &&
    this.y < rect.y + rect.height &&
    this.y + this.height > rect.y);
    }
    };
    this.fill = function (ctx) {
    if (ctx == null) {
    window.console.warn('Missing parameters on function fill');
    } else {
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    };
    }