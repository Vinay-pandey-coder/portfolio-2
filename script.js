let typed = new Typed(".typing",{
    strings:["","Frontend devloper","Backend devloper","Web desgin","Full stack devloper"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})


const animate = ScrollReveal({    
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:500
})

// home
animate.reveal('.logo');
animate.reveal('.menu-btn',{dealy:400,origin:"top"});
animate.reveal("nav", {dealy:400,origin: "right"});
animate.reveal(".home-text", {dealy:400,origin: "left"});
animate.reveal(".home-text h3", {dealy:400,origin: "bottom"});
animate.reveal(".home-img", {dealy:400,origin: "right"});

// about
animate.reveal(".about-text h1", {dealy:400,origin: "top"});
animate.reveal(".about-text h2", {dealy:400,origin: "right"});
animate.reveal(".about-text p", {dealy:400,origin: "bottom"});
animate.reveal(".about-img", {dealy:400,origin: "left"});


// project
animate.reveal(".project h1", {dealy:400,origin: "top"});
animate.reveal(".box-1", {dealy:400,origin: "left"});
animate.reveal(".box-2", {dealy:400,origin: "right"});


// contact
animate.reveal(".contact h1", {dealy:400});
animate.reveal(".contact input",{origin:"right"})