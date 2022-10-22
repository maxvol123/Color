let color = document.querySelectorAll(".color")
let copy = document.querySelectorAll(".copy")
function getRandomColor() {
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}
function changeColor() {
    let colors=[]
    color.forEach(color=>{
        console.log();
        if (color.children[1].classList.contains('fa-lock')===true) {
            colors.push(color.children[0].textContent)
        }else{
        let random = getRandomColor()
        color.style.backgroundColor=random
        color.children[0].innerHTML=random
        colors.push(random)
    }
    })
    addToHash(colors) 
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
function addToHash(color=[]) {
    document.location.hash=color.map(color=>{return color.substring(1)}).join("-")
}
function GetFromHash() {
    if (document.location.hash.length>1) {
        document.querySelector(".press").style.display="none"
       let col = document.location.hash.substring(1).split("-")
        for (let index = 0; index < col.length; index++) {
            color[index].style.backgroundColor="#"+col[index]
            color[index].children[0].innerHTML="#"+col[index]
        }
    }else{
        changeColor()
    }
}
GetFromHash()