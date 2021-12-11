var kFood = "https://www.themealdb.com/api/json/v2/9973533/";
var kDrink = "https://www.thecocktaildb.com/api/json/v2/9973533/";
var searchArray = [];
var form = document.querySelector("form");
var searchFormEl = document.querySelector("#searchForm");
var searchText = document.querySelector("#searchInput");
var searchOption = document.querySelector("form");
var categoriesSection = document.querySelector("#categories");
var breakfastDivEl = document.querySelector("#breakfast");
var starterDivEl = document.querySelector("#starters");
var entreeDivEl = document.querySelector("#entrees");
var dessertDivEl = document.querySelector("#desserts");
var drinkDivEl = document.querySelector("#drinks");
var heroImgEl = document.querySelector("#heroImage");
var filterIngredient = "filter.php?i=";
var filterBreakfast = "filter.php?c=breakfast";
var filterStarters = "filter.php?c=starter";
var filterDessert = "filter.php?c=dessert";
var filterRandom = "randomselection.php";
var heroFilterRandom = "random.php";
var breakfastArray = [];
var starterArray = [];
var entreeArray = [];
var dessertArray = [];
var drinkArray = [];

// set referrer page in local storage
localStorage.setItem("referrer", "index.html");

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
            }
        );
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
            }
        );
    }
};

var categoryDisplay = function() {

    //get hero item from API
    fetch(kFood + heroFilterRandom)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(searchArray) {

                // save search results to local storage
                heroArray = searchArray;
                console.log(heroArray);

                heroImgEl.setAttribute("href", "recipe.html?id=" + heroArray.meals[0].idMeal + "&type=food");
                heroImgEl.innerHTML = "<img src='" + heroArray.meals[0].strMealThumb + "' alt='image of " + heroArray.meals[0].strMeal + 
                "' item='" + heroArray.meals[0].idMeal + "' width='400' height='400'>";
                })
            }
        }
    );


    // get breakfast items from API
    fetch(kFood + filterBreakfast)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(searchArray) {

                    // save search results to local storage
                    breakfastArray = searchArray;

                    for (i = 0; i < 3; i++) {
                        var breakfastCardEl = document.createElement("div");  // main div
                        breakfastCardEl.classList = "card";

                        var breakfastCardImageEl = document.createElement("div");  // div 1
                        breakfastCardImageEl.classList = "breakfastCardImageEl";
                        breakfastCardEl.appendChild(breakfastCardImageEl);

                        var breakfastFigureEl = document.createElement("figure");  // attach to div 1
                        breakfastFigureEl.classList = "image is-4by3";
                        breakfastCardImageEl.appendChild(breakfastFigureEl);
                        
                        var breakfastImg = document.createElement("a");  // attach to breakfastFigureEl
                        breakfastImg.setAttribute("href", "recipe.html?id=" + breakfastArray.meals[i].idMeal + "&type=food");
                        breakfastImg.innerHTML = "<img src='" + breakfastArray.meals[i].strMealThumb + "' alt='image of " + breakfastArray.meals[i].strMeal + 
                            "' item='" + breakfastArray.meals[i].idMeal + "' width='200' height='200'>";
                        breakfastFigureEl.appendChild(breakfastImg);

                        var breakfastCardContentEL = document.createElement("div");  // div 2
                        breakfastCardContentEL.classList  = "card-content";
                        breakfastCardEl.appendChild(breakfastCardContentEL);

                        var breakfastMediaEl = document.createElement("div");  // attach to breakfastCardContentEL
                        breakfastMediaEl.classList = "media";
                        breakfastCardContentEL.appendChild(breakfastMediaEl);

                        var breakfastMediaContentEl = document.createElement("div");  //  attach to breakfastMediaEl
                        breakfastMediaContentEl.classList  = "media-content";
                        breakfastMediaEl.appendChild(breakfastMediaContentEl);

                        var breakfastPEl = document.createElement("p");  // p element attach to breakfastMediaContentEl
                        breakfastPEl.classList  = "title is-4";
                        breakfastPEl.textContent = breakfastArray.meals[i].strMeal;
                        breakfastMediaContentEl.appendChild(breakfastPEl);

                        breakfastDivEl.appendChild(breakfastCardEl);  // add to section
                    }
                    
                })
            }
        }
    );

    // get starter items from API
    fetch(kFood + filterStarters)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(searchArray) {

                    // save search results to local storage
                    starterArray = searchArray;

                    for (i = 0; i < 3; i++) {
                        var starterImg = document.createElement("a");
                        starterImg.setAttribute("href", "recipe.html?id=" + starterArray.meals[i].idMeal + "&type=food");
                        starterImg.innerHTML = "<img src='" + starterArray.meals[i].strMealThumb + "' alt='image of " + starterArray.meals[i].strMeal + 
                            "' item='" + starterArray.meals[i].idMeal + "' width='200' height='200'>";
                        starterDivEl.appendChild(starterImg);
                    }
                    
                })
            }
        }
    );

    // get entree items from API
    fetch(kFood + filterRandom)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(searchArray) {

                    // save search results to local storage
                    entreeArray = searchArray;

                    for (i = 0; i < 3; i++) {
                        var entreeImg = document.createElement("a");
                        entreeImg.setAttribute("href", "recipe.html?id=" + entreeArray.meals[i].idMeal + "&type=food");
                        entreeImg.innerHTML = "<img src='" + entreeArray.meals[i].strMealThumb + "' alt='image of " + entreeArray.meals[i].strMeal + 
                            "' item='" + entreeArray.meals[i].idMeal + "' width='200' height='200'>";
                        entreeDivEl.appendChild(entreeImg);
                    }
                    
                })
            }
        }
    );

    // get dessert items from API
    fetch(kFood + filterDessert)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(searchArray) {

                    // save search results to local storage
                    dessertArray = searchArray;

                    for (i = 0; i < 3; i++) {
                        var dessertImg = document.createElement("a");
                        dessertImg.setAttribute("href", "recipe.html?id=" + dessertArray.meals[i].idMeal + "&type=food");
                        dessertImg.innerHTML = "<img src='" + dessertArray.meals[i].strMealThumb + "' alt='image of " + dessertArray.meals[i].strMeal + 
                            "' item='" + dessertArray.meals[i].idMeal + "' width='200' height='200'>";
                        dessertDivEl.appendChild(dessertImg);
                    }
                    
                })
            }
        }
    );

    // get drink items from API
    fetch(kDrink + filterRandom)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(searchArray) {

                    // save search results to local storage
                    drinkArray = searchArray;

                    for (i = 0; i < 3; i++) {
                        var drinkImg = document.createElement("a");
                        drinkImg.setAttribute("href", "recipe.html?id=" + drinkArray.drinks[i].idDrink + "&type=drink");
                        drinkImg.innerHTML = "<img src='" + drinkArray.drinks[i].strDrinkThumb + "' alt='image of " + drinkArray.drinks[i].strDrink + 
                            "' item='" + drinkArray.drinks[i].idDrink + "' width='200' height='200'>";
                        drinkDivEl.appendChild(drinkImg);
                    }
                    
                })
            }
        }
    );
}

categoryDisplay();

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