/*
$('a').mouseenter(function(){
	$(this).addClass('js-snapper-highlight');
});

$('a').mouseleave(function(){
	$(this).removeClass('js-snapper-highlight');
});
*/

function findIntersectors(t_x, t_y, intersectorsSelector) {
    var intersectors = [];
    intersectorsSelector.each(function() {
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

var eventFilter = 0;
$(document).mousemove(function(m) {

    eventFilter = eventFilter > 60000 ? 0 : eventFilter + 1; // ensure we never overflow
    if(eventFilter % 3){ // only process every third mouse move messages

        var currentSelector = $('a');
        var size = 64;
        var intersectors = findIntersectors([m.pageX - size, m.pageX + size], [m.pageY - size, m.pageY + size], currentSelector);
        while (size > 1 && intersectors.length > 1) {
            size = size / 2;
            intersectors = findIntersectors([m.pageX - size, m.pageX + size], [m.pageY - size, m.pageY + size], currentSelector);
        }

        $('.js-current-link').removeClass('js-current-link'); 

        if (intersectors.length > 0) {
            intersectors[0].addClass('js-current-link');
        }
            
    }

})
.click(function() {
    var links = $('.js-current-link');
    if (links.length > 0)
        window.location.href = links[0].href;
});

