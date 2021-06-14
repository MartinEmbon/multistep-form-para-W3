var Form1 = document.getElementById("Form1")
var Form2 = document.getElementById("Form2")
var Form3 = document.getElementById("Form3")

var Next1 = document.getElementById("Next1")
var Next2 = document.getElementById("Next2")
var Back1 = document.getElementById("Back1")
var Back2 = document.getElementById("Back2")

var progress = document.getElementById("progress")

Next1.onclick = function() {
  Form1.style.left= "-450px"
  Form2.style.left= "40px"
  progress.style.width="240px"
}

Back1.onclick = function() {
  Form1.style.left= "40px"
  Form2.style.left= "450px"
  progress.style.width="120px"
}

Next2.onclick = function() {
  Form2.style.left= "-450px"
  Form3.style.left= "40px"
  progress.style.width="360px"
}

Back2.onclick = function() {
  Form2.style.left= "40px"
  Form3.style.left= "450px"
  progress.style.width="240px"
}




// var btns = document.querySelectorAll("#book-list .delete")

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener("click",(function(e){
//        const li = e.target.parentElement;
//        li.parentNode.removeChild(li) 
//     }))
// })

// const link = document.querySelector("#page-banner a");

// link.addEventListener("click",function(e){
//     e.preventDefault()
//     console.log("navigation to",e.target.textContent)
// })



/*
var subtitulo = document.getElementById("subtitle")


const banner = document.querySelector("#page-banner")
console.log("#page-banner node type is:",banner.nodeType)
console.log("#page-banner node type is:",banner.nodeName)
console.log("#page-banner has childe nodes:",banner.hasChildNodes())

// const cloneBanner = banner.cloneNode(true)
// console.log(cloneBanner)

subtitulo.innerHTML += "<br>Hola<br>"

var books = document.querySelectorAll("#book-list li .name")
books.forEach(function(book){
    book.textContent +=  "(Book title)"
})

var bookList = document.querySelector("#book-list")
console.log("bookList next sibling is",bookList.nextSibling)
console.log("bookList next sibling is",bookList.nextElementSibling)
console.log("bookList next sibling is",bookList.previousElementSibling)
// console.log("the parent node is",bookList.parentNode)
// console.log("the parent node is",bookList.children)
// console.log("the parent node is",bookList.parentElement.parentElement)
//bookList.innerHTML = "<h2>Books and more books...</h2>"
//bookList.innerHTML += "<p>This is how to add html</p>"

bookList.previousElementSibling.querySelector("p").innerHTML+="<br>Too cool<br>"









// const wmf = document.querySelector("#book-list li:nth-child(2) .name")
// console.log(wmf)

// var books = document.querySelector("#book-list li .name")
// console.log(books)

//  books = document.querySelectorAll("#book-list li .name")
// //console.log(books)

// Array.from(books).forEach(function(book){
//     console.log(book)
// })
*/