/* =========================================
   BIRTHDAY SURPRISE
========================================= */


/* Get elements */

const scene =
    document.querySelector(".scene");

const startButton =
    document.getElementById("startButton");

const cake =
    document.querySelector(".cake");

const heartContainer =
    document.querySelector(".heart-container");


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "♥";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    heart.style.animationDelay =
        Math.random() * 2 + "s";

    heartContainer.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 12000);

}


/* Create a few hearts */

for (let i = 0; i < 15; i++) {

    setTimeout(
        createHeart,
        i * 300
    );

}


/* Continue creating hearts */

setInterval(
    createHeart,
    500
);


/* =========================================
   START BUTTON
========================================= */

startButton.addEventListener(
    "click",
    function () {

        /* Start the scene */

        scene.classList.add("started");


        /* Show cake */

        cake.classList.add("show");


        /* Hide button */

        startButton.style.display =
            "none";


        /* Create extra hearts */

        for (let i = 0; i < 50; i++) {

            setTimeout(
                createHeart,
                i * 80
            );

        }


        /* Firework burst */

        setTimeout(
            createFireworkBurst,
            1000
        );

    }
);


/* =========================================
   FIREWORK BURST
========================================= */

function createFireworkBurst() {

    for (let i = 0; i < 70; i++) {

        const spark =
            document.createElement("div");


        spark.style.position =
            "fixed";

        spark.style.width =
            "5px";

        spark.style.height =
            "5px";

        spark.style.borderRadius =
            "50%";

        spark.style.background =
            "#ffd45c";

        spark.style.boxShadow =
            "0 0 8px #ffd45c";

        spark.style.left =
            "50%";

        spark.style.top =
            "45%";

        spark.style.zIndex =
            "300";


        /* Random direction */

        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            100 +
            Math.random() *
            250;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        /* Animate spark */

        spark.animate(

            [

                {

                    transform:
                        "translate(-50%, -50%)",

                    opacity: 1

                },

                {

                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )`,

                    opacity: 0

                }

            ],

            {

                duration:
                    1200 +
                    Math.random() *
                    800,

                easing:
                    "ease-out",

                fill:
                    "forwards"

            }

        );


        document.body.appendChild(
            spark
        );


        setTimeout(
            function () {

                spark.remove();

            },
            2500
        );

    }

}