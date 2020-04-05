/* ----------------------------
/*  Name: mricSite
    Author: Marin
    Version: 1.0
/* -------------------------- */


TweenMax.to(".loading-screen", 4, {
    delay: 10,
    top: "-110%",
    ease: Expo.easeInOut
});

TweenMax.to(".comete", 1.9, {
    delay: 12,
    top: "110%",
    right: "50%",
    ease: Expo.easeInOut
});

TweenMax.to(".star1", 2.5, {
    delay: 13.5,
    top: "85%",
    right: "130%",
    ease: Expo.easeInOut
});

TweenMax.to(".star5", 2.5, {
    delay: 13.8,
    top: "75%",
    right: "130%",
    ease: Expo.easeInOut
});

var t1 = new TimelineMax();

t1.from(".earth3", 4, {
    delay: 0.4,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}).to(".earth3", 4, {
    delay: 1,
    y: -80,
    x: 400,
    ease: Expo.easeInOut
})
