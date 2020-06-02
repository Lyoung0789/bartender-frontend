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
}

