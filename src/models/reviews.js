class Review{

    

    constructor({id, name, content }){
        this.id = id, 
        this.name = name, 
        this.content = content
        // debugger
    }

    htmlifyReview(){
        // debugger
        
        let htmlReview = `
            <div class="review-container" style="display:none">
                <h4>${this.name}</h4>
                <p>${this.content}<p>
            </div>
        `
        
        recipeList.innerHTML += htmlReview
        
    }
    
}

// Review.prototype.postHTML = function(){
//     return (`
//         <div>
//             <h4 id="user-name">${this.name}</h4>
//             <p id="comment">${this.comment}</p>
//         </div>
//     `)
// }

