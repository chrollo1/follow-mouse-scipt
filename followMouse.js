var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

var mouseX, mouseY;

$on('mousemove', function(e) {
  mouseX = e.clientX || e.pageX;
  mouseY = e.clientY || e.pageY + document.body.scrollTop;
});

var ball = $('#ball');
var x = void 0,
y = void 0,
dx = void 0,
dy = void 0,
tx = 0,
ty = 0,
key = -1;

var followMouse = function followMouse() {
  key = requestAnimationFrame(followMouse);

  if (!x || !y){
    x = mouseX;
    y = mouseY;
  } else {
    dx = (mouseX - x) * 0.25;
    dy = (mouseY - y) * 0.25;

    if (Math.abs(dx) + Math.abs(dy) < 0.1){
      x = mouseX;
      y = mouseY;
    } else {
      x += dx;
      y += dy;
    }
  }
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';

}
