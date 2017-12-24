function mousePosition(mouseX, mouseY) {
    let offset = $('#network-demo').offset();
    let x = mouseX - offset.left;
    let y = mouseY - offset.top;
    return {'x': x, 'y': y};
};




$(document).ready(function() {
    var c = document.getElementById("network-demo");
    c.width = 1920;
    c.height = 1080;
    var ctx = c.getContext("2d");

    var boxes = new Array();
    for (let i = 0; i < 20; i++) {
        boxes.push(new Array());
        for (let j = 0; j < 20; j++) {
            boxes[i].push(new Box((i*30), (j*30)));
            boxes[i][j].drawBox(ctx);
        }
    }

    $(document).mousemove(function(event) {
        let x = event.pageX;
        let y = event.pageY;
        updateDemoScene(mousePosition(x, y));
    });

    var updateDemoScene = function(mousePos) {
        boxX = Math.floor((mousePos.x)/30);
        boxY = Math.floor((mousePos.y)/30);
        boxes[boxX][boxY].active = true;
        boxes[boxX][boxY].drawBox(ctx);
    };

});

var Box = (function () {
    var box = function (x, y) {
        this.x = x;
        this.y = y;
        this.size = 30;
        this.color = "#d3461d";
        this.active = false;
    };

    box.prototype = {
        drawBox: function(context) {
            if(this.active) {
                context.fillStyle = "#ffffff";
            } else {
                context.fillStyle = this.color;
            }
            context.fillRect(this.x, this.y, this.size, this.size);
        }
    };

    return box;
})();