(function () {

  // switch 'no-js' to 'has-js' class on body
  document.body.className = 'has-js';

  // content slider
  contentSlider = function (val) {

    // grab elements append and append class to show arrows
    var elm = document.getElementsByClassName(val);

    // To do check for empty array and handle expection
    var y = elm.length;
    for (var i = 0; i < y; i++) {
      var arrow = document.createElement('span');
      arrow.className = 'open';
      elm[i].appendChild(arrow);
      elm[i].nextElementSibling.style.display = 'none';
    }

    // toggle content fucntion
    function toggleContent(evt) {
      if (evt.target && evt.target.className == val) {
        var content = evt.target.nextElementSibling;
        if (content.style.display == 'none') {
          content.style.display = 'block';
          evt.target.lastChild.className = 'close';
        } else {
          content.style.display = 'none';
          evt.target.lastChild.className = 'open';
        }
      }
    }

    // click event listener
    document.addEventListener('click', toggleContent, true);
  };
})();
