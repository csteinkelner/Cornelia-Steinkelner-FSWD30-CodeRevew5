//alert("I load!")
class Person {

	constructor(name, surname, favoritePerformers, age, myPhoto) {
		this.name = name;
		this.surname = surname;
		this.favoritePerformers = favoritePerformers;
		this.age = age;
		this.myPhoto = myPhoto;
		// this.likes = likes;
	}

	text(elId) {
		var place = document.getElementById(elId);
		place.innerHTML += "<img src='" + this.myPhoto + "'>";
		place.innerHTML += "<div class='text'> Name: <b>" + this.name + "</b><br>Surname: <b>" + this.surname + 
		"</b><br>Age: <b>" + this.age + "</b></div";
	}
}

var boy1 = new Person("John", "Doe", ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	25,"CR5/boy1.jpg");
boy1.text("p1");

var girl1 = new Person("Jane", "Walter", ["Justin Bieber", "Katy Perry", "Rihanna"],
	24,"CR5/girl1.jpg");
girl1.text("p2");

var girl2 = new Person("Christine", "Mayer", ["Shakira", "Imagine Dragons", "Green day"],
	26,"CR5/girl2.jpg");
girl2.text("p3");

var boy2 = new Person("Tomas", "Stein", ["Pink", "Mariah Carey", "Rita Ora"],
	27,"CR5/boy2.jpg");
boy2.text("p4");


// var Persons = [
// 	{
// 		name: 'John',
// 		surname: 'Doe',
// 		favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
// 		age: 25,
// 		myPhoto: "CR5/boy1.jpg",	
// 		likes: 0,
	// },
	// {
	// 	name: 'Jane',
	// 	surname: 'Walter',
	// 	favoritePerformers: ["Justin Bieber", "Katy Perry", "Rihanna"],
	// 	age: 24,
	// 	myPhoto: "CR5/girl1.jpg",	
	// 	likes: 0  
	// },
	// {
	// 	name: 'Christine',
	// 	surname: 'Mayer',
	// 	favoritePerformers: ["Shakira", "Imagine Dragons", "Green day"],
	// 	age: 26,
	// 	myPhoto: "CR5/girl2.jpg",	
	// 	likes: 0  
	// },
	// {
	// 	name: 'Tomas',
	// 	surname: 'Stein',
	// 	favoritePerformers: ["Pink", "Mariah Carey", "Rita Ora"],
	// 	age: 27,
	// 	myPhoto: "CR5/boy2.jpg",	
	// 	likes: 0  
	// }

// ];
// for (i=0; i <persons.length;i++) {
//  var pic = Persons[i].myPhoto;
//  document.getElementById()
// }