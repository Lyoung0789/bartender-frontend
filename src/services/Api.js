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
        // debugger
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




}

