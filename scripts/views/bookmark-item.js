export default Backbone.View.extend({

	template: JST['bookmark-item'],
	tagName: 'li',
	className: 'bookmark-list-item',

	events: {
		'click .bookmark-list-item-edit': 'editItem',
		'click .bookmark-list-item-delete': 'deleteItem'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()))
	},

	editItem: function() {
		console.log(this.model);
	},

	deleteItem: function() {
		console.log(this.model);
	}

});