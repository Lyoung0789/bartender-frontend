let addRecipe = false


document.addEventListener("DOMContentLoaded", function(){
    Recipe.getRecipes()
    showNewRecipe()
    mountFormListener()
    mountCommentListener() 
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

// function getRecipeData(){
//     // debugger
//     return {
//         title: document.querySelector("#title").value,
//         liquor: document.querySelector("#liquor").value,
//         instructions: document.querySelector("#instructions").value
//     }
// }

function clearForm(){
    document.querySelector("#title").value = ""
    document.querySelector("#liquor").value = ""
    document.querySelector("#instructions").value = ""

}

function likeFeature(){
    let thumbs = document.querySelectorAll(".like-glyph")
    for(thumbs of thumbs){
        thumbs.addEventListener("click", sendLike)
    }
}

function sendLike(event){
    const likeId = event.target.parentElement.id
    let likes = parseInt(event.target.parentElement.querySelector(".likes").innerText)
    likes++
    const recipeObj = {
        likes
    }
    Api.patch(recipeObj, likeId)
}

function showNewRecipe(){
    
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
    // debugger
    const showComments = document.querySelectorAll(".comment-button")
    for(showComment of showComments){
        // debugger
        showComment.addEventListener("click", getComments)
    }
    
}

function getComments(){
    // debugger
    const findId = document.getElementById(`${this.parentElement.id}`)
    const showReviewList = findId.querySelectorAll('.review-container')

    
    if (showReviewList[0].style.display === "none"){
        for (container of showReviewList){
            container.style.display ="block"
        }
        

    } else {
        for(container of showReviewList){
            container.style.display = "none"
        }
        
    }

}

function mountCommentListener(){

    let commentForm = document.querySelectorAll("#new-review-form")
    for(comment of commentForm){
        
        comment.addEventListener("submit", function(event){
            event.preventDefault()
            
            console.log("Review is being created")
            //This is where i need to do some work. 
            //getReviewData pulls in the data we wrote
            //API.ReviewPost(reviewObj)
            const reviewObj = {
                name: this.name.value,
                content: this.content.value,
                recipe_id: this.parentElement.parentElement.id
            }
           
            Api.postReview(reviewObj)

        })
    }

}




