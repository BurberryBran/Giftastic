// $.get("http://api.giphy.com/v1/gifs/search?api_key=TgZ9OP15XAl9lIA9sjEGlFrjwErVE0pd&q=dog&limit=5",function(data, status){
//     console.log(data)
// });

// List of 10 Fish - 1. Betta Fish 2. African Cichlid 3. American Cichlid 4. Gourami 5. Blue Tang 6. Yellow Tang 7. Lion Fish 8. Clown Triggerfish 9. Red Mandarin Stocking . Clownfish
$(document).ready(function(){

    // Fish Go Here.
   var fish = [
       "Betta Fish","African Cichlid","American Cichlid","Gourami","Blue Tang","Yellow Tang",
       "Lion Fish","Clown Triggerfish","Red Mandarin Stocking","Clownfish"
    ];
    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();
        
        for (var i = 0; i < arrayToUse,length; i++) {
           var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type",arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);
    
        }
        $(document).on("click", ".fish-button", function() {
           
            $("#fish").empty();
            $(".fish-button").removeClass("active");
            $("this").addClass("active");

            var type = $(this).attr("data-type");
            var queryURL = "http://api.giphy.com/v1/gifs/search?qe" + type + "TgZ9OP15XAl9lIA9sjEGlFrjwErVE0pd"
    
            
        })
           
    
      }
  });