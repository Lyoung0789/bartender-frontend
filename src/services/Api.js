class Api {
    constructor(){
        this.baseUrl = 'http://localhost:3000'
    }

    static get(){
        return (
            fetch('http://localhost:3000/recipes')
            .then (response => response.json())
        )
        
    }
}

