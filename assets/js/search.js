var headerSpanEl = document.querySelector("#term");
var resultsDivEl = document.querySelector("#results");
var searchArray = [];

// set referrer page in local storage
localStorage.setItem("referrer", "index.html");

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

    // check if food search and display results on page
    if (type === "food" && !searchArray.meals.length === null) {
        for (var i = 0; i < searchArray.meals.length; i++) {

            headerSpanEl.textContent = term;

            var resultDivEl = document.createElement("div");
            resultDivEl.classList = "result_" + [i];
            
            var resultPEl = document.createElement("p");
            resultPEl.textContent = searchArray.meals[i].strMeal;
            resultDivEl.appendChild(resultPEl);
    
            var resultAEl = document.createElement("a");
            resultAEl.setAttribute("href", "recipe.html?id=" + searchArray.meals[i].idMeal + "&type=" + type);
            resultAEl.innerHTML = "<img src='" + searchArray.meals[i].strMealThumb + "' alt='image of" + searchArray.meals[i].strMeal  + "' name+'" + searchArray.meals[i].idMeal + "' width='200px' height='200px'></a>";
            resultDivEl.appendChild(resultAEl);
    
            resultsDivEl.appendChild(resultDivEl)
        }
    } else {
        headerSpanEl.textContent = "No Results Found";
    }

    // check if drink search and display results on page
    if (type === "drink" && !searchArray.drinks.length === null) {
        for (var i = 0; i < searchArray.drinks.length; i++) {

            headerSpanEl.textContent = term;

            var resultDivEl = document.createElement("div");
            resultDivEl.classList = "result_" + [i];
            
            var resultPEl = document.createElement("p");
            resultPEl.textContent = searchArray.drinks[i].strDrink;
            resultDivEl.appendChild(resultPEl);
    
            var resultAEl = document.createElement("a");
            resultAEl.setAttribute("href", "recipe.html?id=" + searchArray.drinks[i].idDrink + "&type=" + type);
            resultAEl.innerHTML = "<img src='" + searchArray.drinks[i].strDrinkThumb + "' alt='image of" + searchArray.drinks[i].strDrink  + "' name+'" + searchArray.drinks[i].idDrink + "' width='200px' height='200px'></a>";
            resultDivEl.appendChild(resultAEl);
    
            resultsDivEl.appendChild(resultDivEl)
        }
    } else {
        headerSpanEl.textContent = "No Results Found";
    }

};

getSearchResults();