const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeListE1 = document.getElementById("recipe-list");

function displayRecipes(recipes) {
    recipeListElement.innerHTML = "";
        recipes.forEach(recipe => {
            const recipeItemE1 = document.createElement("li");
            recipeItemE1.classList.add("recipe-item");
            const recipeImageE1 = document.createElement("img");
            recipeImageE1.src = recipe.image;
            recipeImageE1.alt = "recipe image";

            recipeItemE1.appendChild(recipeImageE1);
            
            recipeListE1.appendChild(recipeItemE1);
        })
}

async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();

    return data.recipes;
}

async function init() {
    const recipes = await getRecipes();

    displayRecipes(recipes);
}

init();