class Recipe {
    static all = []
    constructor({id, title, instructions, liquor, created_at, reviews, likes}){
        this.id = id
        this.title = title
        this.instructions = instructions
        this.liqour = liquor
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

    }

    renderRecipe(){
        // debugger
        recipeList.innerHTML+= this.htmlifyPost()
    }

    htmlifyPost(){
        return(`
            <div class ="block">
                <div class="recipe-content" id = "${this.id}">
                <h4>${this.title}<h4>
                <p>${this.instructions}</p>
                <p>${this.liquor}</p>
                <p>${this.likes}</p>
                </div>
            </div>
        `)
    }


}