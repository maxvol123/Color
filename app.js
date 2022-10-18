let color = document.querySelectorAll(".color")
let copy = document.querySelectorAll(".copy")

function getRandomColor() {
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}
function changeColor() {
    color.forEach(color=>{
        console.log();
        if (color.children[1].classList.contains('fa-lock')===true) {
            console.log(132);
        }else{
        let random = getRandomColor()
        color.style.backgroundColor=random
        color.children[0].innerHTML=random
    }
    })
}
document.addEventListener('keydown', (event)=>{
    if (event.key=="ArrowRight") {
        document.querySelector(".press").style.display="none"
        changeColor()  
    }
})
function lock(e) {
    if (e.classList.contains('fa-lock-open')===true) {
        e.classList.remove("fa-lock-open")
        e.classList.add("fa-lock")
        return
    }
    if (e.classList.contains('fa-lock')===true) {
        e.classList.remove("fa-lock")
        e.classList.add("fa-lock-open")
    }
}
copy.forEach(copy=>{
    copy.addEventListener('click',()=>{
        navigator.clipboard.writeText(copy.textContent)
        alert("Copied")
        })
})