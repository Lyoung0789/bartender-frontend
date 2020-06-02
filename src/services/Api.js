class Api {
    constructor(){
        this.baseUrl = 'http://localhost:3000'
    }

    static getRecipes(){
        const response = await fetch(this.baseUrl + '/recipes')
        return response.json()
    }
}

