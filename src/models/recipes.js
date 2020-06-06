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
        Recipe.all.forEach(recipe => recipe.renderRecipe())
        likeFeature()
        showCommentsFeature()
        mountCommentListener()

    }

    renderRecipe(){
        recipeList.innerHTML+= this.htmlifyPost()
        if (this.review.length !== 0){
            const correctRecipe = document.getElementById(`${this.id}`)
            
            this.review.forEach(review => {
                let latestReview = new Review(review)
                correctRecipe.innerHTML += latestReview.htmlifyReview()
            })
        }  
    }

//new functions below

    static getRecipeData(){
        return {
            title: document.querySelector("#title").value,
            liquor: document.querySelector("#liquor").value,
            instructions: document.querySelector("#instructions").value
        }
    }
// new functions above





    htmlifyPost(){
        return(`
            <div class="block">
                <div class="recipe-content" id = "${this.id}">
                <p>${this.title}<p>
                <p>${this.instructions}</p>
                <p>${this.liquor}</p>
                <p class = "likes">${this.likes}</p>
                <button class="like-glyph">&#128077</button> 
                <button class="comment-button">Comments</button>
                    <div class ="review-container" style="display:none">
                        <form id = "new-review-form">
                            <div id="form-header"><h2>Add a comment!</h2></div>
                            <div class="form-review-name"><input type="text" id="name" placeholder="Your Name"/></div>
                            <div class="form-review-content"><textarea name="content" id="content" cols="50" rows="10" placeholder="Add Your Review"></textarea></div>
                            <input type="submit"/>
                        </form>
                    </div>
                </div>

            </div>
        `)
    }


    
}