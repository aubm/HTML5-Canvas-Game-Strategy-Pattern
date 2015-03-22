// Stand behaviors

var StandMoveBehaviorPrototype = {
    move: function (character) {
        character.sprite.sx = this.sx;
        character.sprite.sy = this.sy;
    },
    stop: function () {
    }
};

function StandTopMoveBehavior() {
    this.sx = 32;
    this.sy = 96;
}
StandTopMoveBehavior.prototype = StandMoveBehaviorPrototype;

function StandRightMoveBehavior() {
    this.sx = 32;
    this.sy = 64;
}
StandRightMoveBehavior.prototype = StandMoveBehaviorPrototype;

function StandBottomMoveBehavior() {
    this.sx = 32;
    this.sy = 0;
}
StandBottomMoveBehavior.prototype = StandMoveBehaviorPrototype;

function StandLeftMoveBehavior() {
    this.sx = 32;
    this.sy = 32;
}
StandLeftMoveBehavior.prototype = StandMoveBehaviorPrototype;

// Walk behaviors

function WalkMoveBehavior() {
}
WalkMoveBehavior.prototype.interval = null;
WalkMoveBehavior.prototype.move = function (character) {
    character.sprite.sx = 0;
    character.sprite.sy = this.sy;
    this.interval = window.setInterval(function () {
        if (character.sprite.sx == 0) {
            character.sprite.sx = 32;
        } else if (character.sprite.sx == 32) {
            character.sprite.sx = 64;
        } else if (character.sprite.sx == 64) {
            character.sprite.sx = 0;
        }
    }, 150);
};
WalkMoveBehavior.prototype.stop = function () {
    window.clearInterval(this.interval);
};

function WalkTopMoveBehavior() {
    this.sy = 96;
}
WalkTopMoveBehavior.prototype = WalkMoveBehavior.prototype;

function WalkRightMoveBehavior() {
    this.sy = 64;
}
WalkRightMoveBehavior.prototype = WalkMoveBehavior.prototype;


function WalkBottomMoveBehavior() {
    this.sy = 0;
}
WalkBottomMoveBehavior.prototype = WalkMoveBehavior.prototype;

function WalkLeftMoveBehavior() {
    this.sy = 32;
}
WalkLeftMoveBehavior.prototype = WalkMoveBehavior.prototype;