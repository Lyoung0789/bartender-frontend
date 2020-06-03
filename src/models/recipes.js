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
        
        
        recipeList.innerHTML+= this.htmlifyPost()

        //This is where i need to add more comments.
        // if (this.review.length !== 0){
            
        //     let latestReview = new Review(this.review[0])
            
        //     const correctRecipe = document.getElementById(`${this.id}`)
            
        //     correctRecipe.innerHTML += latestReview.htmlifyReview()

        // }

        if (this.review.length !== 0){
            const correctRecipe = document.getElementById(`${this.id}`)
            this.review.forEach(review => {

                let latestReview = new Review(review)
                correctRecipe.innerHTML += latestReview.htmlifyReview()
                debugger
            })
            
            // const correctRecipe = document.getElementById(`${this.id}`)
            
            

        }


       
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