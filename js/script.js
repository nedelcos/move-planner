
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

    //NY Times Articles
    var nytKey = "de6bcb9243ba48919bc9756a60594ecb";
    var nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + "cityVal" + "&sort=newest" + "&api-key=" + nytKey;

    $.getJSON(nytURL, function(data) {
      $nytHeaderElem.text("New York Times Articles About " + cityVal);

      articles = data.response.docs;
      for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        $nytElem.append('<li class="article">' + '<a href=' + '"' + article.web_url + '">' + article.headline.main + '</a>' +article.snippet + '</p>' + '</li>');
      };
    });





    return false;
}

$('#form-container').submit(loadData);
