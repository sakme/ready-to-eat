var kFood = "https://www.themealdb.com/api/json/v2/9973533/";
var kDrink = "https://www.thecocktaildb.com/api/json/v2/9973533/";
var mealName = document.querySelector("#name");
var mealIngredients = document.querySelector("#ingredients");
var mealImage = document.querySelector("#image");
var mealVideo = document.querySelector("#video");
var mealInstructions = document.querySelector("#instructions");
var backAnchor = document.querySelector("#back");
var backQueryString = JSON.parse(localStorage.getItem("searchQueryString"));;
var mealLookup = "lookup.php?i=";
var queryString = document.location.search;
var search1 = queryString.split("&")[0];
var search2 = queryString.split("&")[1];
var id = search1.split("=")[1];
var type = search2.split("=")[1];
var meal = [];

var referrer = localStorage.getItem("referrer");

if (backQueryString) {
    var backLiEl = document.createElement("li");
    backLiEl.innerHTML = "<a href='" + referrer + backQueryString + "'>Search Results</a>";
    backAnchor.appendChild(backLiEl);
};

// get clicked recipe from API
var getRecipe = function() {    
    
    // check if food selected
    if (type === "food") {
        fetch(kFood + mealLookup + id)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(array) {
                        localStorage.setItem("meal", JSON.stringify(array));
                    })
                } else {
                    reload();
                }
            });
    }
    
    // check if drink selected
    if (type === "drink") {

        fetch(kDrink + mealLookup + id)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(array) {
                        localStorage.setItem("meal", JSON.stringify(array));
                    })
                } else {
                    reload();
                }
            });
    } 
    
    // set delay to update local storage before displaying the recipe
    setTimeout(() => {
        displayRecipe();
    }, 500);
};


// display recipe on page
var displayRecipe = function() {

    // check if food selected
    if (type === "food") {

        // retrieve array from local storage
        meal = JSON.parse(localStorage.getItem("meal"));

        // create html elements
        mealName.textContent = meal.meals[0].strMeal;
        var instructionStr = meal.meals[0].strInstructions
        
        mealInstructions.innerHTML = instructionStr.replace(/\r\n/g, "<br>");
        mealInstructions.classList = "Subtitle m-4";
        mealImage.setAttribute("src", meal.meals[0].strMealThumb);
        mealImage.setAttribute("width", "315");
        mealImage.setAttribute("heigth", "315");
        
    
        if (meal.meals[0].strYoutube) {
            var video = meal.meals[0].strYoutube;
            var youTubeId = video.split("=")[1];
            
            var iframe = document.createElement("iframe");
            iframe.setAttribute("width", "560");
            iframe.setAttribute("height", "315");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + youTubeId);
            iframe.setAttribute("title", "YouTube video player");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            iframe.setAttribute("allowfullscreen", "");
            mealVideo.appendChild(iframe)
        }

        if (meal.meals[0].strIngredient1) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure1 + " " + meal.meals[0].strIngredient1);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient2) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure2 + " " + meal.meals[0].strIngredient2);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient3) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure3 + " " + meal.meals[0].strIngredient3);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient4) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure4 + " " + meal.meals[0].strIngredient4);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient5) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure5 + " " + meal.meals[0].strIngredient5);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient6) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure6 + " " + meal.meals[0].strIngredient6);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient7) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure7 + " " + meal.meals[0].strIngredient7);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient8) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure8 + " " + meal.meals[0].strIngredient8);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient9) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure9 + " " + meal.meals[0].strIngredient9);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient10) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure10 + " " + meal.meals[0].strIngredient10);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient11) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure11 + " " + meal.meals[0].strIngredient11);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient12) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure12 + " " + meal.meals[0].strIngredient12);
            mealIngredients.appendChild(mealIngredientsLi);
        }    

        if (meal.meals[0].strIngredient13) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure13 + " " + meal.meals[0].strIngredient13);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient14) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure14 + " " + meal.meals[0].strIngredient14);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient15) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure15 + " " + meal.meals[0].strIngredient15);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient16) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure16 + " " + meal.meals[0].strIngredient16);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient17) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure17 + " " + meal.meals[0].strIngredient17);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient18) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strIngredient18 + " " + meal.meals[0].strMeasure18);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient19) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure19 + " " + meal.meals[0].strIngredient19);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.meals[0].strIngredient20) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.meals[0].strMeasure20 + " " + meal.meals[0].strIngredient20);
            mealIngredients.appendChild(mealIngredientsLi);
        }

    }

    // check if drink selected
    if (type === "drink") {

        // retrieve array from local storage
        meal = JSON.parse(localStorage.getItem("meal"));mealName.textContent = meal.drinks[0].strDrink;

        // create page elements
        mealInstructions.textContent = meal.drinks[0].strInstructions;
        mealImage.setAttribute("src", meal.drinks[0].strDrinkThumb);
        mealImage.setAttribute("width", "315");
        mealImage.setAttribute("heigth", "315");
    
        if (meal.drinks[0].strYoutube) {
            var video = meal.drinks[0].strVideo;
            var youTubeId = video.split("=")[1];
            
            var iframe = document.createElement("iframe");
            iframe.setAttribute("width", "560");
            iframe.setAttribute("height", "315");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + youTubeId);
            iframe.setAttribute("title", "YouTube video player");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            iframe.setAttribute("allowfullscreen", "");
            mealVideo.appendChild(iframe)
        }

        if (meal.drinks[0].strIngredient1) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure1 + " " + meal.drinks[0].strIngredient1);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient2) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure2 + " " + meal.drinks[0].strIngredient2);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient3) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure3 + " " + meal.drinks[0].strIngredient3);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient4) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure4 + " " + meal.drinks[0].strIngredient4);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient5) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure5 + " " + meal.drinks[0].strIngredient5);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient6) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure6 + " " + meal.drinks[0].strIngredient6);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient7) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure7 + " " + meal.drinks[0].strIngredient7);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient8) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure8 + " " + meal.drinks[0].strIngredient8);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient9) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure9 + " " + meal.drinks[0].strIngredient9);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient10) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure10 + " " + meal.drinks[0].strIngredient10);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient11) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure11 + " " + meal.drinks[0].strIngredient11);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient12) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure12 + " " + meal.drinks[0].strIngredient12);
            mealIngredients.appendChild(mealIngredientsLi);
        }    

        if (meal.drinks[0].strIngredient13) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure13 + " " + meal.drinks[0].strIngredient13);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient14) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure14 + " " + meal.drinks[0].strIngredient14);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient15) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure15 + " " + meal.drinks[0].strIngredient15);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient16) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure16 + " " + meal.drinks[0].strIngredient16);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient17) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure17 + " " + meal.drinks[0].strIngredient17);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient18) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strIngredient18 + " " + meal.drinks[0].strMeasure18);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient19) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure19 + " " + meal.drinks[0].strIngredient19);
            mealIngredients.appendChild(mealIngredientsLi);
        }

        if (meal.drinks[0].strIngredient20) {
            var mealIngredientsLi = document.createElement("li");
            mealIngredientsLi.textContent = (meal.drinks[0].strMeasure20 + " " + meal.drinks[0].strIngredient20);
            mealIngredients.appendChild(mealIngredientsLi);
        }
    }
    
};

getRecipe();