let xPos = 0;

gsap.timeline()
    .set('.ring', { rotationY:180, cursor:'grab' })
    .set('.img',  {
        rotateY: (i)=> i*-36,
        transformOrigin: '50% 50% 500px',
        z: -500,
        backgroundImage:(i)=>'url(images/image'+(i+0)+'.jpg)', // Replace with local paths to your images
        backgroundPosition:(i)=>getBgPos(i),
        backfaceVisibility:'hidden'
    })
    .from('.img', {
        duration:1.5,
        y:200,
        opacity:0,
        stagger:0.1,
        ease:'expo'
    })
    .add(()=>{
        $('.img').on('mouseenter', (e)=>{
            let current = e.currentTarget;
            gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'})
        })
        $('.img').on('mouseleave', (e)=>{
            gsap.to('.img', {opacity:1, ease:'power2.inOut'})
        })
    }, '-=0.5')

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);


function dragStart(e){
    if (e.touches) e.clientX = e.touches[0].clientX;
    xPos = Math.round(e.clientX);
    gsap.set('.ring', {cursor:'grabbing'})
    $(window).on('mousemove touchmove', drag);
}


function drag(e){
    if (e.touches) e.clientX = e.touches[0].clientX;

    gsap.to('.ring', {
        rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
        onUpdate:()=>{ gsap.set('.img', { backgroundPosition:(i)=>getBgPos(i) }) }
    });

    xPos = Math.round(e.clientX);
}


function dragEnd(e){
    $(window).off('mousemove touchmove', drag);
    gsap.set('.ring', {cursor:'grab'});
}


function getBgPos(i){
    return (0);
}
const numImages = 10;
const slideDuration = 3;

// Create GSAP timeline for auto slide animation
const autoSlideTimeline = gsap.timeline({ repeat: -1, repeatDelay: slideDuration });
for (let i = 0; i < numImages; i++) {
    autoSlideTimeline.to('.ring', {
        rotationY: `-=${360 / numImages}`, // Rotate to the next image position
        duration: slideDuration,
        ease: 'linear'
    });
}

$('.stage').on('mouseenter', () => autoSlideTimeline.pause());
$('.stage').on('mouseleave', () => autoSlideTimeline.play());
