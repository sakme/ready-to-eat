var headerSpanEl = document.querySelector("#term");
var resultsDivEl = document.querySelector("#results");
var searchArray = [];

var getSearchResults = function() {
    var queryString = document.location.search;
    var term = queryString.split("=")[1];

    headerSpanEl.textContent = term;
    
    searchArray = JSON.parse(localStorage.getItem("searchArray"));

    for (var i = 0; i < searchArray.meals.length; i++) {

        var resultDivEl = document.createElement("div");
        resultDivEl.classList = "result_" + [i];
        
        var resultPEl = document.createElement("p");
        resultPEl.textContent = searchArray.meals[i].strMeal;
        resultDivEl.appendChild(resultPEl);

        var resultAEl = document.createElement("a");
        resultAEl.setAttribute("href", "recipe.html?id=" + searchArray.meals[i].idMeal);
        resultAEl.innerHTML = "<img src='" + searchArray.meals[i].strMealThumb + "' alt='image of" + searchArray.meals[i].strMeal  + "' name+'" + searchArray.meals[i].idMeal + "' width='200px' height='200px'></a>";
        resultDivEl.appendChild(resultAEl);

        resultsDivEl.appendChild(resultDivEl)
    }
};

getSearchResults();

// resultsDivEl.addEventListener("click", selectItem);