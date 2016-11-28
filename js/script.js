
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview


    var streetVal = $("#street").val();
    var cityVal = $("#city").val();

    $body.append('<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=900x450&location=' + streetVal + ', ' + cityVal + '">');


    return false;
}

$('#form-container').submit(loadData);
