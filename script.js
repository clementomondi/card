// Add JavaScript code here
const likeButton = document.querySelector(".fa-heart")
let likes = document.querySelector(".like")

let like = 100

likeButton.addEventListener("click", () => {
    like++
    likes.innerHTML = `${like} likes`

    likeButton.style.color = 'red'
})