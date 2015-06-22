import BookmarkListView from './views/bookmark-list';

(function(){
  'use strict';

  $(document).ready(function(){
  	var bookmarks = new Backbone.Collection([
  		{title: "Google", url: 'http://google.com'},
  		{title: 'Yahoo', url: 'http://yahoo.com'},
  		{title: 'Facebook', url: 'http://facebook.com'},
  		{title: 'GitHub', url: 'http://github.com'},
  		{title: 'JSFiddle', url: 'http://jsfiddle.net'}
  	]);
  	var bookmarkListView = new BookmarkListView({collection: bookmarks});
  	$('.app').html(bookmarkListView.el);
  });

})();
