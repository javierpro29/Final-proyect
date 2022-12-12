let book = document.querySelectorAll('.book');
const fiction = document.querySelector("#fiction");



book.forEach((item) => {
  item.onclick = () =>{
    window.location.replace("routes/bookDescription/bookDescription.html");
  }
})