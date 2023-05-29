// slider filling percantege color
$("#mySlider").on('input', function () {
    // current value
    const val = $(this).val() - 1;
    // max value
    const maxValue = $(this).attr('max') - 1;
    // percentage of completion
    let valPercent = (val / maxValue) * 100;
    //left to right linear gradient of two colors in proper ratio
    $(this).css('background', 'linear-gradient(to right,hsl(174, 77%, 80%) ' + valPercent + '%,hsl(224, 65%, 95%) ' + valPercent + '%)');

    // TEXT VALUE
    switch (val + 1) {
        case 1:
            var views = '10K pageviews';
            var cost = 8;
            break;
        case 2:
            var views = '50K pageviews';
            var cost = 12;
            break;
        case 3:
            var views = '100K pageviews';
            var cost = 16;
            break;
        case 4:
            var views = '500K pageviews';
            var cost = 24;
            break;
        case 5:
            var views = '1M pageviews';
            var cost = 36;
            break;
    }
    views.toLocaleUpperCase;
    $('#pageviews').text(views);
    if ($('#switch-toggled').is(':checked')) {
        cost = cost * 0.75;
        $('#cost').text(`$${cost}.00`);
    }
    else {
        $('#cost').text(`$${cost}.00`);
    };
});

// APPLYING DISCOUNT WHEN SWITCH IS TOGGLED
$('#switch-toggled').on('change', function () {
    const val = $("#mySlider").val() - 1;
    switch (val + 1) {
        case 1:
            var views = '10K pageviews';
            var cost = 8;
            break;
        case 2:
            var views = '50K pageviews';
            var cost = 12;
            break;
        case 3:
            var views = '100K pageviews';
            var cost = 16;
            break;
        case 4:
            var views = '500K pageviews';
            var cost = 24;
            break;
        case 5:
            var views = '1M pageviews';
            var cost = 36;
            break;
    }
    if (($('#switch-toggled').is(':checked'))) {
        cost = cost * 0.75;
        $('#cost').text(`$${cost}.00`);
    }
    else {
        $('#cost').text(`$${cost}.00`);
    }

});

