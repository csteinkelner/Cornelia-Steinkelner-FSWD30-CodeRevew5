alert("I load!")
class Person{

	constuctor(name, surname, favoritePerformers, age, myPhoto){
		this.name = name;
		this.surname = surname;
		this.favoritePerformers = favoritePerformers;
		this.age = age;
		this.myPhoto = myPhoto;
		// this.likes = likes;
	}

	text(elId){
		var place = document.getElementById(elId);
		place.innerHTML += "<img src= '" + this.myPhoto + "'>" 
		place.innerHTML += "Name: " + this.name + "<br>Surname: " + this.surname + 
		"<br>Age: " + this.age;
	}

};

var boy1 = new Person("John", "Doe", ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	25,"CR5/boy1.jpg");
boy1.text("p1");
