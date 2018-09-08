// function initialize(){
// 	var mapProperties = {
// 		center: new google.maps.LatLng(37.8123,-122.269),
// 		zoom: 20,
// 		mapTypeId: google.maps.MapTypeId.SATELLITE,
// 		disableDefaultUI:true
// 	}
// 	var map = new google.maps.Map(document.getElementById("googleMap"), mapProperties)
// 	var marker = new google.maps.Marker({
// 		position:mapProperties.LatLng(37.8123698,-122.2691258),
// 		map:map,
// 		title:'I get free drinks here because my friend tends the bar!'
		
// 	})
// 	marker.setMap(map)
// }

// google.maps.event.addDomListener(window, "load", initialize)

function bookSearch(){
	

	var search = document.getElementById('search').value
	document.getElementById('results').innerHTML = "found me"
	console.log(search)
	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: "json",

		success: function(data){
			var results = document.getElementById('results')

			for (i = 0; i < data.items.length; i++) {
				results.innerHTML += '<h2>' + data.items[i].volumeInfo.title + '<br>' + data.items[i].volumeInfo.authors + '</h2>' + '<img src="' + data.items[i].volumeInfo.imageLinks.smallThumbnail + '">'
			}
		},
		type:"GET"
	})


}

document.getElementById('button').addEventListener('click',bookSearch, false)

// var answerOne = document.getElementsByClassName("survey1")
// var answerTwo = document.getElementsByClassName("survey2")
// var answerThree = document.getElementsByClassName("survey3")


// // var survey2 = document.getElementById(‘q2’)
// // var survey3 = document.getElementById(‘q3’)

// var answers = []

// function processSurvey(){
//     var newAnswerTwo = []

//     for (i = 0; i < answerOne.length; i++){
//         if (answerOne[i].checked){
//             answers.push(answerOne[i].value)
//         }
//     }

//     for (i = 0; i < answerTwo.length; i++){
//         if (answerTwo[i].checked){
//             newAnswerTwo.push(answerTwo[i].value)
//         }
//     }
//     answers.push(newAnswerTwo)

//     for (i = 0; i < answerThree.length; i++){
//         if (answerThree[i].selected){
//             answers.push(answerThree[i].value)
//         }
//     }
//     form.reset()
// }



// document.getElementById("btn").addEventListener("click", processSurvey)

// console.log(answers)

// var Candystore = [
//     {cashReg: "fullofcash",
//      twizzlerJar: "red",
//     },
//     {}
// ]