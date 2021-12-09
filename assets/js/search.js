var headerSpanEl = document.querySelector("#term");
var resultsDivEl = document.querySelector("#results");
var searchArray = [];

var getSearchResults = function() {
    var queryString = document.location.search;
    var search1 = queryString.split("&")[0];
    var search2 = queryString.split("&")[1];

    var term = search1.split("=")[1];
    var type = search2.split("=")[1];

    headerSpanEl.textContent = term;
    
    searchArray = JSON.parse(localStorage.getItem("searchArray"));

    console.log(term);
    console.log(type);
    console.log(searchArray);

    if (type === "food") {
        for (var i = 0; i < searchArray.meals.length; i++) {

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
    }

    if (type === "drink") {
        for (var i = 0; i < searchArray.drinks.length; i++) {

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
    }

};

getSearchResults();

// resultsDivEl.addEventListener("click", selectItem);