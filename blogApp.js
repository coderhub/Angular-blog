var blogApp = angular.module('blogApp',[]);

blogApp.factory('blogPosts', function() {
	var posts = [
		{ author: 'Carlos M',
		  time: Date.now(),
		  auth_avatar: 'img/avatar',
		  category: 'Design',
		  title: 'Designing this Page',
		  hearts: 2,
		  postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi vitae ipsum consequat pharetra et eu ante. Fusce in ligula vehicula, placerat elit id, eleifend felis. Suspendisse ullamcorper fringilla nibh vel tincidunt. Nam feugiat fringilla suscipit. Phasellus non tempus sem.',
		  comments: [
		  		{
		  			posted: 'Nov 20',
		  			author: 'Bob More',
		  			text: 'This is a comment.'
		  		},
		  		{
		  			posted: 'Nov 20',
		  			author: 'Bane More',
		  			text: 'This is a comment.'
		  		}
		  	]
		},
		{ author: 'John Doe',
		  time: Date.now(),
		  auth_avatar: 'img/avatar',
		  category: 'Design',
		  title: 'Designing this Page',
		  hearts: 1,
		  postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi vitae ipsum consequat pharetra et eu ante. Fusce in ligula vehicula, placerat elit id, eleifend felis. Suspendisse ullamcorper fringilla nibh vel tincidunt. Nam feugiat fringilla suscipit. Phasellus non tempus sem.',
		  comments: [
		  		{
		  			posted: 'Nov 20',
		  			author: 'Bob More',
		  			text: 'This is a comment.'
		  		},
		  		{
		  			posted: 'Nov 20',
		  			author: 'Bob More',
		  			text: 'This is a comment.'
		  		}
		  	]
		},
		{ author: 'Smith Johnson',
		  time: Date.now(),
		  auth_avatar: 'img/avatar',
		  category: 'Design',
		  title: 'Designing this Page',
		  hearts: 5,
		  postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi vitae ipsum consequat pharetra et eu ante. Fusce in ligula vehicula, placerat elit id, eleifend felis. Suspendisse ullamcorper fringilla nibh vel tincidunt. Nam feugiat fringilla suscipit. Phasellus non tempus sem.',
		  comments: [
		  		{
		  			posted: 'Nov 20',
		  			author: 'Bob More',
		  			text: 'This is a comment.'
		  		}
		  	]
		}
	];

	// Add a post 
	posts.add = function(title, text) {
      posts.push({
      	time: Date.now(),
      	category: 'New Design',
      	title: posts.title, 
      	postText: posts.text});
	};


	return posts;
});

blogApp.controller('postController', ['$scope','blogPosts', function($scope, blogPosts) {
   $scope.posts = blogPosts;
  


}]);

