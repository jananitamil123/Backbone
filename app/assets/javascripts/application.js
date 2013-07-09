// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require backbone_rails_sync
//= require backbone_datalink
//= require backbone/backbone_sample
//= require_tree .

//   $(function() {

//   	window.Post = Backbone.Model.extend({
//        url : function() {
//          return this.id ? '/posts/' + this.id : '/posts';
//           },
//            defaults: { post: {
//                       title: "Fido",
//                       content: "Black",
//                       }},
//                        initialize: function() {
//                        }
//     }); 

//   	window.Posts = Backbone.Collection.extend({
//     model:Post,
//     url:"/posts"
// });
// window.posts=new Posts
//  // window.BackboneSample=BackBone.View.extend({
//  // 	tagName: 'tr',
//  // 	events{
//  // 		//can be used for handling events on the template
//  // 	},
//  // 	initialize: function(){
//  //       //this.render
//  // 	},
//  // 	render: function(){
//  // 		var post=this.model.toJSON();
//  // 		$(this.el).html(ich.post_template(post));
//  // 		return this;
//  // 	}
//  // });  	


//  // window.PostView=BackBone.View.extend({
//   // tagName: 'tr',
//   // events{
//   //   //can be used for handling events on the template
//   // },
//   // initialize: function(){
//   //      //this.render
//   // },
//   // render: function(){
//   //   var dog=this.model.toJSON();
//   //   $(this.el).html(ich.dog_template(dog));
//   //   return this;
//   // }
//  // }); 
// window.BackboneSample = Backbone.View.extend({
// 	   el: '#posts',
//      	events:{
//  		"submit form#new_post":"createPost"
//  	},
//   //       initialize: function() {
//   //       	 		_.bindAll(this,'addOne','addAll');
//   //         alert("TTTTTTTTT")

//  	// 	 Posts.bind('add',this.addOne);
//  	// 	Posts.bind('refresh',this.addAll);
//  	// 	Posts.bind('all',this.render);
//  	// 	// Posts.fetch();//This Gets model from the Server
//   //       },
//   //        	addOne: function(post){
//  	// 	var view=PostView({model: post});
//  	// 	this.$("#dog_table").append(view.render().el)
//  	// },
//  	// addAll: function(){
//  	// 	Posts.each(this.addOne);
//  	// },
//   //        	newAttributes: function(event){
//  	// 	var new_dog_form=$(event.currentTarget).serializeObject();
//   //   console.log("SSSSSSSSSSSSSS")
//  	// 		// return:{ post:{
//  	// 		// 	title: new_dog_form["post[title]"],
//  	// 		// 	content: new_dog_form["post[content]"]
//  	// 		 },
//  	createPost: function(e){
//      alert("%%%%%%%%%%%")
//  		e.preventDefault();
//  		var params=this.newAttributes(e);
//  		// Dogs.create(params);
//  	}        

// });

// // window.App=new BackboneSample
//   });
