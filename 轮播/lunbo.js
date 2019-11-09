var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function (x) {
    var index = $(x.currentTarget).index()
    var p = index * -666
    $('#images').css({
      transform: 'translate(' + p + 'px)'
    })
    n = index;
    activeButton(allButtons.eq(n));
  })
}

var n = 0;
var size = allButtons.length;
var timerId = setTimer();

function activeButton($button) {
  $button.addClass('red').siblings('.red').removeClass('red');
}

function playSlide(index) {
  allButtons.eq(index).trigger('click');
}

function setTimer() {
  return setInterval(() => {
    n += 1;
    playSlide(n % size);
  }, 1000)
}

playSlide(n % size);


$('.window').on('mouseenter', function () {
  window.clearInterval(timerId);
})

$('.window').on('mouseleave', function () {
  timerId = setTimer();
})