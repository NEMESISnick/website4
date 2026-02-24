


var crsr = document.querySelector("#cursor");
var pc = document.querySelector("#page1-cont");
var hh = document.querySelector("#page1-cont h1");
var hh2 = document.querySelectorAll(".elem h2");
var nav = document.querySelector("nav");
var p1 = document.querySelector("#page1");
var vupr = document.querySelector("#veryupr");
var vvid = document.querySelector("#veryupr video");
var vid2 = document.querySelector(".vid2");
var crsr2 = document.querySelector("#cursor2");
var imag = document.querySelector("#veryupr img");
var uprbl = document.querySelector("#uprblack");
var p4h1 = document.querySelectorAll(".h1h1");
var pbtm = document.querySelectorAll("#pbtm h1 span");
var p5 = document.querySelector("#page5");
var elemspan = document.querySelector(".elem span");
var split1 = new SplitType('.h1h1', { types: 'chars' });
var split2 = new SplitType('.h1h2', { types: 'chars' });
var split3 = new SplitType('#pbtm h1', {types: 'chars'});





function underlineanime(){
  
  // p4h1.addEventListener("mouseenter", function(){
  //   gsap.from(chars, {
  //     yPercent: 100,
  //     stagger: 0.05,
  //     duration: 0.6
  //   })
  // })
}


function divclick2(){
  let t2 = true;

  if(t2 == true) {
    p1.addEventListener("click", function(){
      vupr.style.height = "80%";
      uprbl.style.height = "100%";
      t2 = false;
    })
  }
  else{
    p1.addEventListener("click", function(){
      vupr.style.height = "0%";
      uprbl.style.height = "0%";
      t2 = true;
    })
  }
}


function divclick(){
  let t = true;
  p1.addEventListener("click", function(){

    if(t == true){
      gsap.to(vupr, {
        scale: 1,
        height: '80%',
        rotate: 0
      })

      gsap.to(uprbl, {
        // height: '100%',
        opacity: 1
      })

      gsap.to(hh, {
        opacity: 0,
        filter: 'blur(50px)'
      })

      gsap.to(crsr2, {
        scale: 1
      })

      gsap.to(crsr, {
        scale: 0,
        opacity: 0
      })

      gsap.to(nav, {
        filter: 'blur(50px)',
        onComplete: () => {
          t = false;
        }
      })
    }

    else{

      gsap.to(nav, {
        filter: 'none',
        onComplete: () => {
          t = true;
        }
      })

      gsap.to(crsr, {
        scale: 1,
        opacity: 1
      })

      gsap.to(crsr2, {
        scale: 0
      })
      
      gsap.to(uprbl, {
        opacity: 0
      })

      gsap.to(vupr, {
        height: 0
      })

      gsap.to(hh, {
        opacity: 1,
        filter: 'none'
      })
    }
  })
}

function crsreffect(){
    p1.addEventListener("mousemove", function(dets){
        crsr.style.left = dets.x - 20 + "px",
        crsr.style.top = dets.y - 20 + "px"
        // gsap.to(crsr, {
        //     x: dets.x,
        //     y: dets.y
        // })
        // console.log(dets);
        
    })

    p1.addEventListener("mouseenter", function(){
        gsap.to(crsr, {
            scale: 1,
            opacity: 1
        })
    })

    p1.addEventListener("mouseleave", function(){
        gsap.to(crsr, {
            scale: 0,
            opacity: 0
        })
    })
}

function crsr2effect(){
  pc.addEventListener("mousemove", function(dets){
      crsr2.style.left = dets.x - 20 + "px",
      crsr2.style.top = dets.y - 20 + "px"
  })

  // pc.addEventListener("mouseenter", function(){
  //     gsap.to(crsr2, {
  //         scale: 1,
  //         opacity: 1
  //     })
  // })

  // pc.addEventListener("mouseleave", function(){
  //     gsap.to(crsr2, {
  //         scale: 0,
  //         opacity: 0
  //     })
  // })
}

function rejouicecrsr(){
  hh.addEventListener("mouseenter", function(){
    gsap.to(crsr, {
      opacity: 0,
      scale: 0
    })
  })

  hh.addEventListener("mouseleave", function(){
    gsap.to(crsr, {
      opacity: 1,
      scale: 1
    })
  })
}

function texttimeline(){
  var t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".elem",
      scroller: "#main",
      start: "top 60%",
      end: "top 0%"
      // markers: true
    }
  })

  t3.from(".elem h2", {
    y: 100,
    stagger: 0.1,
    duration: 0.6
  })
}

function loader(){
  var t6 = gsap.timeline();

  t6.from("#loader h3", {
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
  })

  t6.to("#loader h3", {
    opacity: 0,
    duration: 0.4
  })

  t6.to("#loader", {
    height: 0,
    duration: 0.6
  })
}

function page4txt(){
  document.querySelector("#span2").addEventListener("mouseenter", function(){
    gsap.to(split1.chars, {
      y: -100,
      stagger: 0.02
    })

    gsap.to(split2.chars, {
      y: -50,
      stagger: 0.02
    })
  })

  document.querySelector("#span2").addEventListener("mouseleave", function(){
    gsap.to(split1.chars, {
      y: 0,
      stagger: 0.02
    })

    gsap.to(split2.chars, {
      y: 0,
      stagger: 0.02
    })
  })
}

function lasttxt(){
  gsap.from(split3.chars, {
    y: 230,
    stagger: 0.03,
    // delay: 1,
    duration: 0.5,
    scale: 0,
    ease: "out",
    scrollTrigger: {
      trigger: "#span2",
      scroller: "#main",
      start: "top -20%",
      markers: false,
    }
  })
}




crsreffect()
crsr2effect()
rejouicecrsr()
texttimeline()
divclick()
underlineanime()
page4txt()
lasttxt()
loader()


