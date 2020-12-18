const flightPath = {
    curviness:2,

    autoRotate : true,
    values:[
        // {x:100,y:-100},
        {x:200,y:100},
        {x:300,y:250},
        {x:400,y:100},
        {x:500,y:-75},
        {x:600,y:-150},
        {x:700,y:50},
        {x:550,y:150},
        {x:700,y:-50},
        {x:850,y:-100},
        {x:950,y:-200},
        {x:window.innerWidth,y:-250}

    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paper-plane',1,{
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement:".animation",
    duration: 4000,
    triggerHook:0
})
.setTween(tween)
.setPin('.animation')
.addTo(controller);