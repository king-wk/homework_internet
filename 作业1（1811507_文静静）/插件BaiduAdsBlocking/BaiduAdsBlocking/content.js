(function () {
    $(document).bind("DOMNodeInserted", function () {
        $("#content_left div[data-click] span:contains('广告')")
            .parents("#content_left div[data-click]")
            .remove();
    });
})();