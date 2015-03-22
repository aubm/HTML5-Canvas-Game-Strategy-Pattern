function Game(canvas_element) {
    var ctx = canvas_element.getContext('2d');
    ctx.fillStyle = '#fff';

    var player = new Character();
    player.pos_x = canvas_element.width / 2;
    player.pos_y = canvas_element.height / 2;

    var startRefreshLoop = function() {
        window.setInterval(function () {
            ctx.rect(0, 0, canvas_element.width, canvas_element.height);
            ctx.fill();
            player.display(ctx);
        }, 33);
    };

    var initControls = function() {
        document.addEventListener('keydown', function (event) {
            switch (event.keyCode) {
                case 37: // left
                    player.changeMoveBehavior(new WalkLeftMoveBehavior());
                    break;
                case 38: // top
                    player.changeMoveBehavior(new WalkTopMoveBehavior());
                    break;
                case 39: // right
                    player.changeMoveBehavior(new WalkRightMoveBehavior());
                    break;
                case 40: // bottom
                    player.changeMoveBehavior(new WalkBottomMoveBehavior());
                    break;
            }
        });

        document.addEventListener('keyup', function (event) {
            switch (event.keyCode) {
                case 37: // left
                    player.changeMoveBehavior(new StandLeftMoveBehavior());
                    break;
                case 38: // top
                    player.changeMoveBehavior(new StandTopMoveBehavior());
                    break;
                case 39: // right
                    player.changeMoveBehavior(new StandRightMoveBehavior());
                    break;
                case 40: // bottom
                    player.changeMoveBehavior(new StandBottomMoveBehavior());
                    break;
            }
        });
    };

    this.start = function () {
        startRefreshLoop();
        initControls();
    };
}