class Review{

    

    constructor({id, name, content, created_at}){
        this.id = id, 
        this.name = name, 
        this.content = content
        this.created_at = created_at
        
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

    createReviewForm(){
        return (`
        <form id ="new-review-form">
            <div id="form-header"><h2>Add a comment!</h2></div>
            <div class="form-review-name"><input type="text" id="name" placeholder="Your Name"/></div>
            
            <div class="form-review-content"><textarea name="content" id="content" cols="50" rows="10" placeholder="Add Your Review"></textarea></div>
            <input type="submit"/>
        </form>
        
        `)
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

