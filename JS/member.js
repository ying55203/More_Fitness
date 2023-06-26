//---漢堡按鈕---
$('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.navigation').toggleClass('show');
});



// 數字動畫
$(window).on("scroll", function () {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var countingOffset = $(".counting").offset().top;

    if (scrollTop + windowHeight > countingOffset) {
        var counters = $(".count");
        var countersQuantity = counters.length;
        var counter = [];

        for (var i = 0; i < countersQuantity; i++) {
            counter[i] = parseInt(counters[i].innerHTML);
        }

        var count = function (start, value, id) {
            var localStart = start;
            setInterval(function () {
                if (localStart < value) {
                    localStart++;
                    counters[id].innerHTML = localStart;
                }
            }, 5);
        }

        for (var j = 0; j < countersQuantity; j++) {
            count(0, counter[j], j);
        }

        // 停止監聽滾動事件，避免重複觸發動畫
        $(window).off("scroll");
    }
});