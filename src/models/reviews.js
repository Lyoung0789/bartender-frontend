class Review{

    constructor({id, name, content, created_at, recipe_id}){
        this.id = id, 
        this.name = name, 
        this.content = content
        this.created_at = new Date(created_at)
        this.recipe_id = recipe_id
    }

    htmlifyReview(){
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return (`
            <div class="review-container" style="display:none">
                <h4>${this.name}</h4>
                <p>${this.created_at}<p>
                <p>${this.content}<p>
            </div>
        `)
    }

    htmlifyNewReview(){
        return (`
        <div class="review-container" style="display:block">
            <h4>${this.name}</h4>
            <p>${this.created_at}<p>
            <p>${this.content}<p>
        </div>
    `)
    }

    static mountCommentListener(){
        let commentForm = document.querySelectorAll("#new-review-form")
        for(const comment of commentForm){
        
            comment.addEventListener("submit", function(event){
                event.preventDefault()
                console.log("Review is being created")
                const reviewObj = {
                    name: event.target.name.value,
                    content: event.target.content.value,
                    recipe_id: this.parentElement.parentElement.id
                }
                Api.postReview(reviewObj)
            })
        }
    }

    static getComments(){
        const findId = document.getElementById(`${this.parentElement.id}`)
        const showReviewList = findId.querySelectorAll('.review-container')
    
        
        if (showReviewList[0].style.display === "none"){
            for (const container of showReviewList){
                container.style.display ="block"
            }
        } else {
            for(const container of showReviewList){
                container.style.display = "none"
            }
        }
    }

}



