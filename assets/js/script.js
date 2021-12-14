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
                        var starterCardEl = document.createElement("div");  // main div
                        starterCardEl.classList = "card";

                        var starterCardImageEl = document.createElement("div");  // div 1
                        starterCardImageEl.classList = "starterCardImageEl";
                        starterCardEl.appendChild(starterCardImageEl);

                        var starterFigureEl = document.createElement("figure");  // attach to div 1
                        starterFigureEl.classList = "image is-4by3";
                        starterCardImageEl.appendChild(starterFigureEl);

                        var starterImg = document.createElement("a");
                        starterImg.setAttribute("href", "recipe.html?id=" + starterArray.meals[i].idMeal + "&type=food");
                        starterImg.innerHTML = "<img src='" + starterArray.meals[i].strMealThumb + "' alt='image of " + starterArray.meals[i].strMeal + 
                            "' item='" + starterArray.meals[i].idMeal + "' width='200' height='200'>";
                        starterFigureEl.appendChild(starterImg);

                        var starterCardContentEL = document.createElement("div");  // div 2
                        starterCardContentEL.classList  = "card-content";
                        starterCardEl.appendChild(starterCardContentEL);

                        var starterMediaEl = document.createElement("div");  // attach to starterCardContentEL
                        starterMediaEl.classList = "media";
                        starterCardContentEL.appendChild(starterMediaEl);

                        var starterMediaContentEl = document.createElement("div");  //  attach to starterMediaEl
                        starterMediaContentEl.classList  = "media-content";
                        starterMediaEl.appendChild(starterMediaContentEl);

                        var starterPEl = document.createElement("p");  // p element attach to starterMediaContentEl
                        starterPEl.classList  = "title is-4";
                        starterPEl.textContent = starterArray.meals[i].strMeal;
                        starterMediaContentEl.appendChild(starterPEl);

                        starterDivEl.appendChild(starterCardEl);  // add to section
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
                        var entreeCardEl = document.createElement("div");  // main div
                        entreeCardEl.classList = "card";

                        var entreeCardImageEl = document.createElement("div");  // div 1
                        entreeCardImageEl.classList = "entreeCardImageEl";
                        entreeCardEl.appendChild(entreeCardImageEl);

                        var entreeFigureEl = document.createElement("figure");  // attach to div 1
                        entreeFigureEl.classList = "image is-4by3";
                        entreeCardImageEl.appendChild(entreeFigureEl);

                        var entreeImg = document.createElement("a");
                        entreeImg.setAttribute("href", "recipe.html?id=" + entreeArray.meals[i].idMeal + "&type=food");
                        entreeImg.innerHTML = "<img src='" + entreeArray.meals[i].strMealThumb + "' alt='image of " + entreeArray.meals[i].strMeal + 
                            "' item='" + entreeArray.meals[i].idMeal + "' width='200' height='200'>";
                        entreeFigureEl.appendChild(entreeImg);

                        var entreeCardContentEL = document.createElement("div");  // div 2
                        entreeCardContentEL.classList  = "card-content";
                        entreeCardEl.appendChild(entreeCardContentEL);

                        var entreeMediaEl = document.createElement("div");  // attach to entreeCardContentEL
                        entreeMediaEl.classList = "media";
                        entreeCardContentEL.appendChild(entreeMediaEl);

                        var entreeMediaContentEl = document.createElement("div");  //  attach to entreeMediaEl
                        entreeMediaContentEl.classList  = "media-content";
                        entreeMediaEl.appendChild(entreeMediaContentEl);

                        var entreePEl = document.createElement("p");  // p element attach to entreeMediaContentEl
                        entreePEl.classList  = "title is-4";
                        entreePEl.textContent = entreeArray.meals[i].strMeal;
                        entreeMediaContentEl.appendChild(entreePEl);

                        entreeDivEl.appendChild(entreeCardEl);  // add to section
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
                        var dessertCardEl = document.createElement("div");  // main div
                        dessertCardEl.classList = "card";

                        var dessertCardImageEl = document.createElement("div");  // div 1
                        dessertCardImageEl.classList = "dessertCardImageEl";
                        dessertCardEl.appendChild(dessertCardImageEl);

                        var dessertFigureEl = document.createElement("figure");  // attach to div 1
                        dessertFigureEl.classList = "image is-4by3";
                        dessertCardImageEl.appendChild(dessertFigureEl);

                        var dessertImg = document.createElement("a");
                        dessertImg.setAttribute("href", "recipe.html?id=" + dessertArray.meals[i].idMeal + "&type=food");
                        dessertImg.innerHTML = "<img src='" + dessertArray.meals[i].strMealThumb + "' alt='image of " + dessertArray.meals[i].strMeal + 
                            "' item='" + dessertArray.meals[i].idMeal + "' width='200' height='200'>";
                        dessertFigureEl.appendChild(dessertImg);

                        var dessertCardContentEL = document.createElement("div");  // div 2
                        dessertCardContentEL.classList  = "card-content";
                        dessertCardEl.appendChild(dessertCardContentEL);

                        var dessertMediaEl = document.createElement("div");  // attach to dessertCardContentEL
                        dessertMediaEl.classList = "media";
                        dessertCardContentEL.appendChild(dessertMediaEl);

                        var dessertMediaContentEl = document.createElement("div");  //  attach to dessertMediaEl
                        dessertMediaContentEl.classList  = "media-content";
                        dessertMediaEl.appendChild(dessertMediaContentEl);

                        var dessertPEl = document.createElement("p");  // p element attach to dessertMediaContentEl
                        dessertPEl.classList  = "title is-4";
                        dessertPEl.textContent = dessertArray.meals[i].strMeal;
                        dessertMediaContentEl.appendChild(dessertPEl);

                        dessertDivEl.appendChild(dessertCardEl);  // add to section
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
                        var drinkCardEl = document.createElement("div");  // main div
                        drinkCardEl.classList = "card";

                        var drinkCardImageEl = document.createElement("div");  // div 1
                        drinkCardImageEl.classList = "drinkCardImageEl";
                        drinkCardEl.appendChild(drinkCardImageEl);

                        var drinkFigureEl = document.createElement("figure");  // attach to div 1
                        drinkFigureEl.classList = "image is-4by3";
                        drinkCardImageEl.appendChild(drinkFigureEl);

                        var drinkImg = document.createElement("a");
                        drinkImg.setAttribute("href", "recipe.html?id=" + drinkArray.drinks[i].idDrink + "&type=drink");
                        drinkImg.innerHTML = "<img src='" + drinkArray.drinks[i].strDrinkThumb + "' alt='image of " + drinkArray.drinks[i].strDrink + 
                            "' item='" + drinkArray.drinks[i].idDrink + "' width='200' height='200'>";
                        drinkFigureEl.appendChild(drinkImg);

                        var drinkCardContentEL = document.createElement("div");  // div 2
                        drinkCardContentEL.classList  = "card-content";
                        drinkCardEl.appendChild(drinkCardContentEL);

                        var drinkMediaEl = document.createElement("div");  // attach to drinkCardContentEL
                        drinkMediaEl.classList = "media";
                        drinkCardContentEL.appendChild(drinkMediaEl);

                        var drinkMediaContentEl = document.createElement("div");  //  attach to drinkMediaEl
                        drinkMediaContentEl.classList  = "media-content";
                        drinkMediaEl.appendChild(drinkMediaContentEl);

                        var drinkPEl = document.createElement("p");  // p element attach to drinkMediaContentEl
                        drinkPEl.classList  = "title is-4";
                        drinkPEl.textContent = drinkArray.drinks[i].strDrink;
                        drinkMediaContentEl.appendChild(drinkPEl);

                        drinkDivEl.appendChild(drinkCardEl);  // add to section
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