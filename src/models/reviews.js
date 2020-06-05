class Review{

    constructor({id, name, content, created_at, recipe_id}){
        this.id = id, 
        this.name = name, 
        this.content = content
        this.created_at = created_at
        this.recipe_id = recipe_id
        
    }

    htmlifyReview(){
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        return (`
            <div class="review-container" style="display:none">
                <h4>${this.name} ${this.created_at}</h4>
                <p>${this.content}<p>
            </div>
        `)
        
       
        
    }

    htmlifyNewReview(){
        return (`
        <div class="review-container" style="display:block">
            <h4>${this.name} ${this.created_at}</h4>
            <p>${this.content}<p>
        </div>
    `)
    
   

    }


    
}



