/*!
{
  "name": "CSS vh unit",
  "property": "cssvhunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vhunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "Similar JSFiddle",
    "href": "https://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/
define(['Modernizr', 'testStyles', 'computedStyle', 'roundedEquals'], function(Modernizr, testStyles, computedStyle, roundedEquals) {
  testStyles('#modernizr { height: 50vh; }', function(elem) {
    var compStyle = parseInt(computedStyle(elem, null, 'height'), 10);

    Modernizr.addTest('cssvhunit', compStyle > 0);
  });
});
