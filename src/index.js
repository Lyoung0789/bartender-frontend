let addRecipe = false


document.addEventListener("DOMContentLoaded", function(){
    Recipe.getRecipes()
    displayNewRecipeForm()
    mountFormListener()
    
})

const recipeList = document.querySelector(".recipe-container")
const recipeForm = document.querySelector("#new-recipe-form")


function mountFormListener(){
    recipeForm.addEventListener("submit", function(event){
        event.preventDefault()
        console.log("Recipe is being createed")
        const recipeObj = Recipe.getRecipeData()
        Api.post(recipeObj)
    })
}


function clearForm(){
    document.querySelector("#title").value = ""
    document.querySelector("#liquor").value = ""
    document.querySelector("#instructions").value = ""

}

function likeFeature(){
    const thumbs = document.querySelectorAll(".like-glyph")
    for(thumb of thumbs){
        thumb.addEventListener("click", function(event){
            const likeId = event.target.parentElement.id
            let likes = parseInt(event.target.parentElement.querySelector(".likes").innerText)
            likes++
            const recipeObj = {
                likes
            }
            Api.patch(recipeObj, likeId)
        })
    }
}

function displayNewRecipeForm(){
    const showFormButton = document.querySelector("#add-recipe-button")
    const showFormContainer = document.querySelector(".form-container")
    showFormButton.addEventListener("click", () => {
        addRecipe = !addRecipe
        if (addRecipe){
            showFormContainer.style.display = "block"
        } else {
            showFormContainer.style.display = "none"
        }
    })
}

function showCommentsFeature(){
    const showComments = document.querySelectorAll(".comment-button")
    for(showComment of showComments){
        showComment.addEventListener("click", Review.getComments)
    }
    
}
