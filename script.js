let buttonElm = document.querySelector("button")
buttonElm.addEventListener("click", () => {
    const content = document.querySelector("#textInput").value; // add edit button later
    if (content != "") {
        addPost(content);
    }
    document.querySelector("#textInput").value = "";
});

//help from reece 
const container = document.querySelector(".container");
let postID = 0;
let commentID = 0;

function addPost(content) {
    const textPost = document.createElement("div");
    textPost.innerHTML = `  
    <div class="post" id="post${postID}">
        <p class="paraContent">${content}</p>
        <button class="deleteButton" onclick="deletePost('${postID}')">Delete</button>
        <button class="commentButton" onclick="addComment('${postID}')">Comment</button>
    </div>
    `;
    postID++;
    container.appendChild(textPost);
}

var modal = document.getElementById("modalID");
var holdPostID = 0;

function addComment(postID) {
    modal.style.display = "block";
    holdPostID = postID;
    document.querySelector("#commentInput").value = "";
}

var closeButton = document.getElementsByClassName("close")[0]; 
 
closeButton.onclick = function() {
    modal.style.display = "none";
    document.querySelector("#commentInput").value == "";
} 
 

let button = document.getElementsByClassName("modalButton")[0];
button.addEventListener("click", () => {

    let comment = document.querySelector("#commentInput").value;

    if (comment != "") {
        let post = document.querySelector(`#post${holdPostID}`);
        let commentPost = document.createElement("div");
        commentPost.innerHTML = `
        <div class="comment" id="comment${commentID}">
            <p id="commentText">${comment}</p>
            <button class="deleteCommentButton" onclick="deleteComment('${commentID}')">Delete</button>
        </div>
        `;
        commentID++;
        post.appendChild(commentPost);
        modal.style.display = "none";
        console.log(commentID);
    }
});
    
    // let comment = prompt("comment");

    // if (comment.valueOf != "" || comment.valueOf != null) {
    //     let post = document.querySelector(`#post${postID}`);
    //     let commentPost = document.createElement("div");
    //     commentPost.innerHTML = `
    //     <div class="comment" id="comment${commentID}">
    //         <p id="commentText">${comment}</p>
    //         <button class="deleteButton" onclick="deleteComment('${commentID}')">Delete</button>
    //     </div>
    //     `;
    //     commentID++;
    //     post.appendChild(commentPost);
    //     modal.style.display = "none";
    // }


function deletePost(postID) {
    let post = document.querySelector(`#post${postID}`);
    post.remove();
}

function deleteComment(commentID) {
    let comment = document.querySelector(`#comment${commentID}`);
    comment.remove();
}

