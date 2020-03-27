var movies = [
	{
		title: "Looper",
		rating: 0,
		watched: true
	},
	{
		title: "Star Wars Eight",
		rating: 0.1,
		watched: true
	},
	{
		title: "Joker",
		rating: 4.8,
		watched: true
	},
	{
		title: "Inception",
		rating: 4.6,
		watched: true
	},
	{
		title: "Moonstruck",
		rating: 3.8,
		watched: false
	}
]

for(var i=-0;i<movies.length;i++){
	if(movies[i].watched){
		sn = " seen ";
	}
	else{
		sn = " not seen ";
	}
	console.log("You have"+sn+movies[i].title+" - "+movies[i].rating+" stars");
}
