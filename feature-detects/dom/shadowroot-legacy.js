/*!
{
  "name": "Shadow DOM API (Legacy)",
  "property": "shadowroot-legacy",
  "notes": [
    {
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/Element/createShadowRoot"
    }
  ],
  "authors": ["Kevin Coyle", "Pascal Lim"],
  "tags": ["dom"]
  }
!*/

/* DOC
Detects support for the Shadow DOM API (Legacy).
*/
define(['Modernizr'], function ( Modernizr ) {
  Modernizr.addTest('shadowroot-legacy', function() {
    return typeof document.head.createShadowRoot === 'function';
  });
});
