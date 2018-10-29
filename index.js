var tx = 0;
var ty = 0;
var scale = 1;

document.addEventListener('wheel', function (e) {
  e.preventDefault();
  if (e.ctrlKey) {
    var s = Math.exp(-e.deltaY / 100);
    scale *= s;
    console.log("delta = " + e.deltaY);
    console.log("scale = " + scale);
    console.log("s = " + s);

  } else {
    var direction = natural.checked ? -1 : 1;
    tx += e.deltaX * direction;
    ty += e.deltaY * direction;
  }
  var transform = 'translate(' + tx + 'px, ' + ty + 'px) scale(' + scale + ')';
  box.style.webkitTransform = transform;
  box.style.transform = transform;
});