var kFood = "https://www.themealdb.com/api/json/v2/9973533/";
var kDrink = "https://www.thecocktaildb.com/api/json/v2/9973533/";
var searchArray = [];
var form = document.querySelector("form");
var searchFormEl = document.querySelector("#searchForm");
var searchText = document.querySelector("#searchInput");
var searchOption = document.querySelector("form");
var filterIngredient = "filter.php?i=";
// var filterCategory = "filter.php?c=";
// var filterEthnicity = "filter.php?a=";
// var filterName = "search.php?s=";

var searchRecipe = function(output) {
    var searchOptionOutput = output;

    var item = searchText.value.trim();
    console.log(searchOptionOutput);
    console.log(item);
    console.log(kDrink + filterIngredient + item);

    if (searchOptionOutput === "food") {

        fetch(kFood + filterIngredient + item)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(searchArray) {
                        localStorage.setItem("searchArray", JSON.stringify(searchArray));
                        document.location.href = "search.html?term=" + item + "&type=" + searchOptionOutput;
                    })
                }
            });
    } else if (searchOptionOutput === "drink") {

        fetch(kDrink + filterIngredient + item)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(searchArray) {
                        localStorage.setItem("searchArray", JSON.stringify(searchArray));
                        document.location.href = "search.html?term=" + item + "&type=" + searchOptionOutput;
                    })
                }
            });
    }
};

form.addEventListener("submit", function(event) {
    var foodType = new FormData(form);
    var output = "";
    for (const entry of foodType) {
      output = output + entry[1];
    };
    
    searchRecipe(output);
    event.preventDefault();
  }, false);