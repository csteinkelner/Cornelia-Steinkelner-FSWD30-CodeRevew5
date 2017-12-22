//alert("I load!")
class Person{

	constuctor(name,surname,favoritePerformers,age,myPhoto,){
		this.name = name;
		this.surname = surname;
		this.favoritePerformers = favoritePerformers;
		this.age = age;
		this.myPhoto = myPhoto;
		// this.likes = likes;
	}

	text(elId){
		var place = document.getElementById(elId);
		place.innerHTML += "<img src= '" + this.myPhoto + "'>" + "Name: " + this.name + "<br>Surname: " 
		+ this.surname + "<br>Age: " + this.age;
	}

};

var boy1 = new Person("John", "Doe", ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	25,"CR5/boy1.jpg");
boy1.text("p1");


// var Persons = [
// 	{
// 		name: 'John',
// 		surname: 'Doe',
// 		favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
// 		age: 25,
// 		myPhoto: "CR5/boy1.jpg",	
// 		likes: 0    
// 	},
// 	{
// 		name: 'Jane',
// 		surname: 'Walter',
// 		favoritePerformers: ["Justin Bieber", "Katy Perry", "Rihanna"],
// 		age: 24,
// 		myPhoto: "CR5/girl1.jpg",	
// 		likes: 0  
// 	},
// 	{
// 		name: 'Christine',
// 		surname: 'Mayer',
// 		favoritePerformers: ["Shakira", "Imagine Dragons", "Green day"],
// 		age: 26,
// 		myPhoto: "CR5/girl2.jpg",	
// 		likes: 0  
// 	},
// 	{
// 		name: 'Tomas',
// 		surname: 'Stein',
// 		favoritePerformers: ["Pink", "Mariah Carey", "Rita Ora"],
// 		age: 27,
// 		myPhoto: "CR5/boy2.jpg",	
// 		likes: 0  
// 	}

// ];
// for (i=0; i <persons.length;i++) {
//  var pic = Persons[i].myPhoto;
//  document.getElementById()
// }