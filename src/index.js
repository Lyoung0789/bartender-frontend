document.addEventListener("DOMContentLoaded", function(){
    Recipe.getRecipes()
    mountFormListener()
})

const recipeList = document.querySelector(".recipe-container")
const recipeForm = document.querySelector("#new-recipe-form")


function mountFormListener(){
    recipeForm.addEventListener("submit", function(event){
        event.preventDefault()
        console.log("not is being createed")
        const recipeObj = getRecipeData()
        Api.post(recipeObj)
        // debugger

    })
}

function getRecipeData(){
    return {
        title: document.querySelector("#title").value,
        liquor: document.querySelector("#liquor").value,
        instructions: document.querySelector("#instructions").value
    }
}

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

async function sendLike(event){
    
    const likeId = event.target.parentElement.id
    let likes = parseInt(event.target.parentElement.querySelector(".likes").innerText)
    likes++
    const recipeObj = {
        likes
    }
    Api.patch(recipeObj, likeId)


}