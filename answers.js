// *****************************************************************************

// Weekend Homework (w02d01):

// *****************************************************************************

// ---------------------
// Answer the Following:
// ---------------------

	// For each of the following, write which datatypes you would use to represent the data, 
	// and then give a small example of the data structure:

	// 1.  A light switch that can be either on or off.

	// Here ce would use a Boolean to check whether the light is on or off (true or false).
		
		// let light = "on";
		// if (light = "on") {
		// 	console.log(true);
		// } else {
		// 	console.log(false);
		// }

	// 2.  A user's email address.

	// Here we could use a string "alexandrejdohrmann@gmail.com" to represent email address.

		// let email = "me@me.com";

	// 3.  A spaceship with a hull, laser blasters, tractor beam, and warp drive.

	// Here we could use an object "spaceship" with key values:
	// "hull, laser blasters, tractors beam, and warp drive" as descriptors.

		// const ship = {
			// lasers: 4,
			// meson guns: 18,
			// shields: true,
		// }

	// 4.  A list of student names from our class.

	// We could use strings and an array here to list out all the names as strings within the array.

	// let students = [“johnny”, “mary”, “alf”, “frankie”];
		  

	// 5.  A list of student names from our class, each with a location.

	// We could use an object along with key variables and arrays with strings:

		// const students = {
		// 	names: ["johnny", "mary", "alf", "frankie"],
		// 	location: ["Littleton", "Denver", "SF", "NYC"],
		// }

	// 6.  A list of student names from our class, each with a location and each with a list of favorite tv shows.

	// We could use an object along with key variables and arrays with strings:

		// const students = {
		// 	names: ["johnny", "mary", "alf", "frankie"],
		// 	location: ["Littleton", "Denver", "SF", "NYC"],
		// 	favoriteTvShows: ["The Walking Dead", "Barry", "Last Man On Earth"],
		// }

// ---------------------
// Take It Easy:
// ---------------------		

	// 1. Make an array that holds all of the colors of the rainbow.

		// let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo" and "violet"];

	// 2. Write code that will access "blue" from the rainbow array.

		// console.log(rainbow[4]);

	// 3. Make an object that is called your name and holds the information about your 
	// favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.

		// const alex = {
		// 	favoriteFood: "Pizza",
		// 	hobby: "Bowling",
		// 	location: "Littleton",
		// 	favoriteDataType: "Objects",
		// }

	// Write code that will access your hobby from the object that you just created.

		// console.log(alex.hobby);

// ---------------------
// Crazy Object:
// ---------------------		

			const crazyObject = {
			  taco: [{meat: 'steak', cheese: ['panela', 'queso', 'chihuahua']},
			         {meat: 'chicken', salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
			 		],
			  larry: {
			    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
			    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
			    characters: [{
			      name: "Jeff",
			      occupation: "manager"
			    },
			    {
			      name: "funkhauser",
			      occupation: "tv dude"
			    },
			    {
			      name: "susie",
			      occupation: "jeffs wife",
			      favourtieHobby: "Swearing at Larry and Jeff"
			    },
			    ]
			  }
			}
	// 1. "omg my mouth is burning"

			console.log(crazyObject.taco[1].salsa[5]);

	// 2. "Pretty pretty prettayyyyy good"

			console.log(crazyObject.larry.quotes[0]);

	// 3. "Swearing at Larry and Jeff"

			console.log(crazyObject.larry.characters[2].favourtieHobby);

	// 4. "Chicken Teriyaki Boyyyyyy"

			console.log(crazyObject.larry.nicknames[1]);

	// 5. The object the contains the name funkhauser

			console.log(crazyObject.larry.characters[1]);


