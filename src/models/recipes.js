class Recipe {
    static all = []
    constructor({id, title, instructions, liquor, created_at, reviews, likes}){
        this.id = id
        this.title = title
        this.instructions = instructions
        this.liquor = liquor
        this.created_at = created_at
        this.review = reviews
        this.likes = likes
        Recipe.all.push(this)
    }


    static getRecipes(){
        Api.get()
        .then(recipes=> {
            recipes.forEach(recipe => new Recipe(recipe))
            // debugger
            Recipe.renderRecipes()
        })
    }

    static renderRecipes(){
        recipeList.innerHTML = "<h3>Cocktail Recipes<h3>"
        // debugger
        Recipe.all.forEach(recipe => recipe.renderRecipe())
        likeFeature()
        showCommentsFeature()

    }

    renderRecipe(){
        // debugger
        recipeList.innerHTML+= this.htmlifyPost()
    }

    htmlifyPost(){
        // debugger
        return(`
            <div class="block">
                <div class="recipe-content" id = "${this.id}">
                <p>${this.title}<p>
                <p>${this.instructions}</p>
                <p>${this.liquor}</p>
                <p class = "likes">${this.likes}</p>
                <button class="like-glyph">&#128077</button> 
                <button class="comment-button">Show All Comments</button>
                </div>

            </div>
        `)
    }


    
}