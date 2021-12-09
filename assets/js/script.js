var kFood = "https://www.themealdb.com/api/json/v2/9973533/";
var kDrink = "https://www.thecocktaildb.com/api/json/v2/9973533/";
var searchArray = [];
var form = document.querySelector("form");
var searchFormEl = document.querySelector("#searchForm");
var searchText = document.querySelector("#searchInput");
var searchOption = document.querySelector("form");
var filterIngredient = "filter.php?i=";

// search handler
var searchRecipe = function(output) {
    var searchOptionOutput = output;

    // get search term from input
    var item = searchText.value.trim();
    
    // Check if food search
    if (searchOptionOutput === "food") {

        // get search from food API
        fetch(kFood + filterIngredient + item)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(searchArray) {

                        //save search results to local storage
                        localStorage.setItem("searchArray", JSON.stringify(searchArray));

                        // redirect to search page
                        document.location.href = "search.html?term=" + item + "&type=" + searchOptionOutput;
                    })
                }
            });
    }
    
    // check if drink search
    if (searchOptionOutput === "drink") {

        // get search from drinks API
        fetch(kDrink + filterIngredient + item)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(searchArray) {

                        // save search results to local storage
                        localStorage.setItem("searchArray", JSON.stringify(searchArray));

                        //redirect to search page
                        document.location.href = "search.html?term=" + item + "&type=" + searchOptionOutput;
                    })
                }
            });
    }
};

// search form event listener
form.addEventListener("submit", function(event) {
    var foodType = new FormData(form);
    var output = "";
    for (const entry of foodType) {
      output = output + entry[1];
    };
    
    searchRecipe(output);
    event.preventDefault();
  }, false);