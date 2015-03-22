function Character() {
    this.move_behavior = new StandBottomMoveBehavior();
    var image_sprite = new Image();
    image_sprite.src = 'src/images/sprites.png';
    this.sprite = {
        image: image_sprite,
        sx: 0,
        sy: 0,
        s_width: 32,
        s_height: 32,
        d_width: 32,
        d_height: 32
    };
    this.pos_x = 0;
    this.pos_y = 0;

    var self = this;

    this.move_behavior.move(self);

    this.changeMoveBehavior = function (new_move_behavior) {
        if (new_move_behavior.constructor.name == this.move_behavior.constructor.name) {
            return;
        }
        this.move_behavior.stop();
        this.move_behavior = new_move_behavior;
        this.move_behavior.move(self);
    };

    this.display = function (ctx) {
        ctx.drawImage(self.sprite.image, self.sprite.sx, self.sprite.sy, self.sprite.s_width, self.sprite.s_height,
            self.pos_x, self.pos_y, self.sprite.d_width, self.sprite.d_height);
    };
}