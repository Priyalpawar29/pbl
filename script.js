var box = document.querySelector("#box")
var main = document.querySelector("#main")
const h4 = document.querySelector("#nav h4,h2");
var page2 = document.querySelector("#page2")

main.addEventListener("mousemove",function(dets){
    box.style.top = dets.y + -30 + "px"
    box.style.left = dets.x + -30 + "px" 
    
})
// page2.addEventListener("mousemove",function(dets){
//     box.style.top = dets.y + -30 + "px"
//     box.style.left = dets.x + -30 + "px" 

// })

// h4.addEventListener("mouseenter",function(){
//     box.style.scale = 2;
// })

// h4.addEventListener("mouseleave",function(){
//     box.style.scale = 2;
// })
// h4.addEventListener("mouseleave",function(){
//     box.style.scale = 1;
// })
