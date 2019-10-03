/*!
{
  "name": "Shadow DOM API",
  "property": "shadowroot",
  "notes": [
    {
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot"
    }
  ],
  "authors": ["Kevin Coyle", "Pascal Lim"],
  "tags": ["dom"]
  }
!*/

/* DOC
Detects support for the Shadow DOM API.
*/
define(['Modernizr'], function ( Modernizr ) {
  Modernizr.addTest('shadowroot', function() {
    return typeof document.head.attachShadow === 'function';
  });
});
