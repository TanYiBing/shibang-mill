$(document).ready(function() {
    $('#productTab a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
    });
    $('#equipmentTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
    $('#casesTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
    $('#aboutTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
});