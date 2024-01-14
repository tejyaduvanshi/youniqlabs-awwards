var textWrapper = document.querySelector('.ml9 .letters');
var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")
var page1 = document.querySelector("#page1")
var page2 = document.querySelector("#page2")
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


main.addEventListener("mousemove",function(dets){
    cursor.style.left= dets.x +"px"
    cursor.style.top= dets.y +"px"

})

// page1.addEventListener("mousemove",function(dets){
//     cursor.style.left= dets.x +"px"
//     cursor.style.top= dets.y +"px"

// })

// page2.addEventListener("mousemove",function(dets){
//   cursor.style.left= dets.x +"px"
//   cursor.style.top= dets.y +"px"

// })

gsap.to("#layout img",{
    scale:0,
    duration:2,
    delay:1,
    ease:Power2
})

gsap.to("#layout",{
    x:2500,
    delay:2.5,
    duration:3,
    ease:Power2
})




