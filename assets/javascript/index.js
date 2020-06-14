$(document).ready(function () {

  // Fish Go Here.
  var fish = [
    "Ocean", "Deep Sea", "Whale", "Shark", "Sea Turtle", "Dolphin",
    "Dumbo Octopus", "Aquarium", "Coral Reef", "Clownfish"
  ];


  // MAKE BUTTON FOR ONLCLICK FISH
  function populateButtons() {
    $("#fish-buttons").empty();

    for (var i = 0; i < fish.length; i++) {
      var a = $("<button>");
      a.addClass("fish-button");
      a.attr("data-type", fish[i]);
      a.text(fish[i]); 
      $("#fish-buttons").append(a);

    }

  }
  populateButtons();
  $(document).on("click", ".fish-button", function () {
    console.log("fish")
    $("#fish").empty();
    $(".fish-button").removeClass("active");
    $("this").addClass("active");


    // FUCTION FOR GRABBING GIPHY API CONTENT FOR FISH

    var type = $(this).attr("data-type");
    console.log(type)
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=TgZ9OP15XAl9lIA9sjEGlFrjwErVE0pd";

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function (response) {
        var results = response.data
        console.log(results)

        for (var i = 0; i < results.length; i++) {
          var fishDiv = $("<div class = \"fish.item\">");
          var img = $("<img>")
          console.log (results[i].images.downsized.url)
          img.attr("src", results[i].images.downsized.url)
          var rating = results[i].rating;
          $("#fish").append(img)
          var p = $("<p>").text("rating: " + rating);

        }
      })


  })
});




// const theme = new Audio("assets/got-theme-song.mp3");
// var musicPlaying = false;

// $("#title-button").on("click", function() {
//   if(musicPlaying == false){
//         theme.play();
//         musicPlaying = true;
//      }else {
//         theme.pause();
//         musicPlaying = false;
//     }
// });

// $.get("http://api.giphy.com/v1/gifs/search?api_key=TgZ9OP15XAl9lIA9sjEGlFrjwErVE0pd&q=dog&limit=5",function(data, status){
//     console.log(data)
// });

// List of 10 Fish (this list is no longer accurate) - 1. Betta Fish 2. African Cichlid 3. American Cichlid 4. Gourami 5. Blue Tang
//  6. Yellow Tang 7. Lion Fish 8. Clown Triggerfish 9. Red Mandarin Stocking 10. Clownfish
