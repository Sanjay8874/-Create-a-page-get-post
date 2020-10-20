var posts = ['This is 1', 'This is 2', 'This is 3','This is 4','This is 5','This is 6','This is 6','This is 7','This is 8','This is 9','This is 10','This is 11','This is 12', ]


function newPost () {
	var randomNumber = Math.floor(Math.random()*(posts.length));
	document.getElementById('postdisplay').innerHTML = posts[randomNumber];
}


function abc() {
  location.replace("https://jsonplaceholder.typicode.com/posts")
}