window.addEventListener("mousemove",mouseCursor);
const cursor = document.querySelector('.cursor');
const navlink = document.querySelectorAll('.nav-links li');

function mouseCursor(e){
cursor.style.top= e.pageY + 'px';
cursor.style.left=e.pageX + 'px';
}


navlink.forEach(link=>{
link.addEventListener("mouseover",()=>{
    cursor.classList.add("navhover");
    link.classList.add("linkhover");
    cursor.classList.remove("animate");
});

link.addEventListener("mouseleave",()=>{
    cursor.classList.remove("navhover");
    link.classList.remove("linkhover");
    cursor.classList.add("animate");

});
});

