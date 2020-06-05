class Api {
    constructor(){
        this.baseUrl = 'http://localhost:3000/recipes'
    }

    static get(){
        return (
            fetch('http://localhost:3000/recipes')
            .then (response => response.json())
        )
        
    }

    static post(data){
        

        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },

            body: JSON.stringify({
                title: data.title, 
                liquor: data.liquor, 
                instructions: data.instructions
            })
        }

        fetch("http://localhost:3000/recipes", configObj)
        
        .then(response => response.json())
        .then ((data)=> {
            
            if (!data.errors){
                
                new Recipe(data)
                Recipe.renderRecipes()
                clearForm()
                
            } else {
                throw new Error(`${data.errors}`)
            }
        })
        .catch(alert)
    }


    static patch(data, id){
        let configObj = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },

            body: JSON.stringify({
                likes: data.likes
            })
        }
        
        fetch(`http://localhost:3000/recipes/${id}`, configObj)
        .then(response => response.json())
        .then((data)=> {
            if(!data.errors){
                const editedRecipes = Recipe.all.map(recipe => {
                    if(recipe.id === data.id){
                        return new Recipe(data)
                    } else {
                        return recipe
                    }
                })
                Recipe.all = editedRecipes
                Recipe.renderRecipes()
            }else {
                throw new Error( `${data.errors}`)
            }
        })
        .catch(alert)
    }



    //This is for comments/reviews
    static postReview(reviewObj){
        
        // debugger
        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },

            body: JSON.stringify({
                name: reviewObj.name, 
                content: reviewObj.content, 
                recipe_id: reviewObj.recipe_id
            })
        }
        // debugger
        // const correctRecipe = document.getElementById(`${reviewObj.recipe_id}`)
        fetch("http://localhost:3000/reviews", configObj)
        
        .then(response => response.json())
        
        .then ((data)=> {
            // debugger
            const correctRecipe = document.getElementById(`${data.recipe_id}`)
            if (!data.errors){
                // debugger
                const newReview = new Review(data)
                correctRecipe.innerHTML += newReview.htmlifyNewReview()
                showCommentsFeature()
                // debugger
                // .renderRecipes()
                // clearForm()
                
            } else {
                throw new Error(`${data.errors}`)
            }
        })
        .catch(alert)
    }
}

