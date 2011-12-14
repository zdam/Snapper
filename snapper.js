$('a').mouseenter(function(){
	$(this).addClass('js-snapper-highlight');
});

$('a').mouseleave(function(){
	$(this).removeClass('js-snapper-highlight');
});

/*
function findIntersectors(t_x, t_y, intersectorsSelector) {
    var intersectors = [];
    $(intersectorsSelector).each(function() {
        var $this = $(this);
        var thisPos = $this.offset();
        var i_x = [thisPos.left, thisPos.left + $this.outerWidth()]
        var i_y = [thisPos.top, thisPos.top + $this.outerHeight()];

        if (t_x[0] < i_x[1] && t_x[1] > i_x[0] &&
               t_y[0] < i_y[1] && t_y[1] > i_y[0]) {
            intersectors.push($this);
        }
    });
    return intersectors;
}

var orig_link_color;
$(document).mousemove(function(e) {

    var size = 64;
    var intersectors = findIntersectors([m.pageX - size, m.pageX + size], [m.pageY - size, m.pageY + size], 'a');
    while (size > 1 && intersectors.length > 1) {
        size = size / 2;
        intersectors = findIntersectors([m.pageX - size, m.pageX + size], [m.pageY - size, m.pageY + size], 'a');
    }

    var current = $('.js-current-link');
    current.removeClass('current-link').css('color', orig_link_color);
    //current.removeClass('js-current-link'); //.css('color', orig_link_color);

    if (intersectors.length > 0) {
    	alert('linky');
        orig_link_color = intersectors[0].css('color');
        intersectors[0].css('color', 'red').addClass('current-link');
        //intersectors[0].addClass('js-current-link');
    }
})
.click(function() {
    var links = $('.js-current-link');
    if (links.length > 0)
        window.location.href = links[0].href;
});

*/