 const changer = document.querySelector("div.color-changer input")
const bodyTag = document.querySelector("body")

changer.addEventListener("input", function() {
    bodyTag.style.backgroundColor = changer.value

    const color = chroma(changer.value)

    if(color.luminance() <0.3 ) {
        bodyTag.classList.add("dark")
    } else {
        bodyTag.classList.remove("dark")
    }

})


// CURSOR
const cursorTag = document.querySelector("div.cursors")
const balls = cursorTag.querySelectorAll("div")
const ballMessage = cursorTag.querySelector("div span")
const images = document.querySelectorAll("img[data-hover]")

let aimX = 0
let aimY = 0

balls.forEach((ball, index) => {
  let currentX = 0
	let currentY = 0

	let speed = 0.3 - index * 0.015
  
  const animate = function () {
    currentX += (aimX - currentX) * speed
    currentY += (aimY - currentY) * speed

    ball.style.left = currentX + "px"
    ball.style.top = currentY + "px"

    requestAnimationFrame(animate)
  }

  animate()
})


document.addEventListener("mousemove", function (event) {
  aimX = event.pageX
  aimY = event.pageY
})

images.forEach(image => {
  image.addEventListener("mouseover", function () {
    ballMessage.classList.add("visible")
    ballMessage.innerHTML = image.getAttribute("data-hover")
  })
  
  image.addEventListener("mouseout", function () {
    ballMessage.classList.remove("visible")
  })
})
 



//hover-link

/* var hoverLink = gasp.utils.toArray(".nav-link"),
    videoWrap = document.querySelector(".video-wrapper"),
    videoItem = document.querySelector(".video-placeholder video");



function moveVideo(e) {
    var mouseX = e.clientX,
        mouseY = e.clientY
    tl = gsap.timeline();
    tl.to(videoWrap, {
      duration: 1,
      x: mouseX,
      y: mouseY,
      ease: Expo.ease
    })
}


function initAnimation(){
  hoverLink.forEact(link => {
    link.addEventListener('mouseenter', linkHover);
    link.addEventListener('mouseleave', linkHover);
    link.addEventListener('mousemove', moveImg);
  })
}

function init() {
  initAnimation();
}

window.addEventListener("load", function(){
  init();
}) */


/* var hoverLink = gsap.utils.toArray(".hover-link"),
    videoWrap = document.querySelector('.video-wrapper'),
    imgItem = document.querySelector('.video-placeholder video');


function moveImg(e){
    var mouseX = e.clientX,
        mouseY = e.clientY
    tl = gsap.timeline();
    tl.to(videoWrap, {
        duration:1,
        x: mouseX,
        y: mouseY,
        ease: Expo.ease
    })
}

function linkHover(e){
    if (e.type === "mouseenter"){
        var imgSrc = e.target.dataset.src;
        var tl = gsap.timeline();

        tl.set(imgItem, {
            attr: {src : imgSrc}
        }).to(imgWrap, {
            autoAlpha:1,
            scale:1
        });
    } else if (e.type === "mouseleave"){
        var tl = gsap.timeline();
        tl.to(imgWrap, {
            autoAlpha:0,
            scale:0.3
        })
    }
}


function initAnimation(){
    hoverLink.forEach(link => {
        link.addEventListener('mouseenter', linkHover);
        link.addEventListener('mouseleave', linkHover);
        link.addEventListener('mousemove', moveImg);
    })
}

function init(){
    initAnimation();
}

window.addEventListener("load", function(){
    init();
}) */