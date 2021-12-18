var headerSpanEl = document.querySelector("#term");
var resultsDivEl = document.querySelector("#results");
var searchArray = [];

// set referrer page in local storage
localStorage.setItem("referrer", "search.html");

// display search results on search page
var getSearchResults = function() {

    // get url parameters and pass into variables
    var queryString = document.location.search;
    localStorage.setItem("searchQueryString", JSON.stringify(queryString));

    var search1 = queryString.split("&")[0];
    var search2 = queryString.split("&")[1];

    var term = search1.split("=")[1];
    var type = search2.split("=")[1];
    
    // get search results from local storage
    searchArray = JSON.parse(localStorage.getItem("searchArray"));
    
    // check search type and display results on page
    if (type === "food" && Array.isArray(searchArray.meals)) {
        for (var i = 0; i < searchArray.meals.length; i++) {

            headerSpanEl.textContent = term;
            
            var resultDivEl = document.createElement("div");
            resultDivEl.setAttribute("style", "min-width: 250px; max-width: 300px")

            var resultCardEl = document.createElement("div");  // main div
            resultCardEl.classList = "card m-4";

            var resultCardImageEl = document.createElement("div");  // div 1
            resultCardImageEl.classList = "resultCardImageEl";
            resultCardEl.appendChild(resultCardImageEl);

            var resultFigureEl = document.createElement("figure");  // attach to div 1
            resultFigureEl.classList = "image is-1by1";
            resultCardImageEl.appendChild(resultFigureEl);
            
            var resultImg = document.createElement("a");  // attach to resultFigureEl
            resultImg.setAttribute("href", "recipe.html?id=" + searchArray.meals[i].idMeal + "&type=food");
            resultImg.innerHTML = "<img src='" + searchArray.meals[i].strMealThumb + "' alt='image of " + searchArray.meals[i].strMeal + 
                "' item='" + searchArray.meals[i].idMeal + "'>";

            resultFigureEl.appendChild(resultImg);

            var resultCardContentEL = document.createElement("div");  // div 2
            resultCardContentEL.classList  = "card-content";
            resultCardEl.appendChild(resultCardContentEL);

            var resultMediaEl = document.createElement("div");  // attach to resultCardContentEL
            resultMediaEl.classList = "media";
            resultCardContentEL.appendChild(resultMediaEl);

            var resultMediaContentEl = document.createElement("div");  //  attach to resultMediaEl
            resultMediaContentEl.classList  = "media-content";
            resultMediaEl.appendChild(resultMediaContentEl);

            var resultPEl = document.createElement("p");  // p element attach to resultMediaContentEl
            resultPEl.classList  = "title is-4";
            resultPEl.textContent = searchArray.meals[i].strMeal;
            resultMediaContentEl.appendChild(resultPEl);

            resultDivEl.appendChild(resultCardEl);  // add to section

            resultsDivEl.appendChild(resultDivEl);
        }
    } else if (type === "drink" && Array.isArray(searchArray.drinks)) {
        for (var i = 0; i < searchArray.drinks.length; i++) {

            headerSpanEl.textContent = term;

            var resultDivEl = document.createElement("div");
            resultDivEl.setAttribute("style", "min-width: 250px; max-width: 300px")

            var resultCardEl = document.createElement("div");  // main div
            resultCardEl.classList = "card m-4";

            var resultCardImageEl = document.createElement("div");  // div 1
            resultCardImageEl.classList = "resultCardImageEl";
            resultCardEl.appendChild(resultCardImageEl);

            var resultFigureEl = document.createElement("figure");  // attach to div 1
            resultFigureEl.classList = "image is-1by1";
            resultCardImageEl.appendChild(resultFigureEl);
            
            var resultImg = document.createElement("a");  // attach to resultFigureEl
            resultImg.setAttribute("href", "recipe.html?id=" + searchArray.drinks[i].idDrink + "&type=" + type);
            resultImg.innerHTML = "<img src='" + searchArray.drinks[i].strDrinkThumb + "' alt='image of " + searchArray.drinks[i].strDrink + 
                "' item='" + searchArray.drinks[i].idDrink + "'>";

            resultFigureEl.appendChild(resultImg);

            var resultCardContentEL = document.createElement("div");  // div 2
            resultCardContentEL.classList  = "card-content";
            resultCardEl.appendChild(resultCardContentEL);

            var resultMediaEl = document.createElement("div");  // attach to resultCardContentEL
            resultMediaEl.classList = "media";
            resultCardContentEL.appendChild(resultMediaEl);

            var resultMediaContentEl = document.createElement("div");  //  attach to resultMediaEl
            resultMediaContentEl.classList  = "media-content";
            resultMediaEl.appendChild(resultMediaContentEl);

            var resultPEl = document.createElement("p");  // p element attach to resultMediaContentEl
            resultPEl.classList  = "title is-4";
            resultPEl.textContent = searchArray.drinks[i].strDrink;
            resultMediaContentEl.appendChild(resultPEl);

            resultDivEl.appendChild(resultCardEl);  // add to section

            resultsDivEl.appendChild(resultDivEl);
        }
    } else {
        headerSpanEl.textContent = "No Results Found";
    }

};

getSearchResults();