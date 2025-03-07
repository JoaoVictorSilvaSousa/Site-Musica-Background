particlesJS("particles-js", {
    particles: {
        number: {
            value: 120, 
        },
        size: {
            value: 2.5, 
            random: true, 
        },
        color: {
            value: ["#ffffff", "#ffd700", "#ffea00"] 
        },
        opacity: {
            value: 1,
            random: true, 
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3, 
                sync: false
            }
        },
        move: {
            enable: true,
            speed: 0.3, 
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out"
        },
        line_linked: {
            enable: false, 
        },
    },
});
