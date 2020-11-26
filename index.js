window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#3215d3",
        "#e6ba2a",
        "#af18a7"
    ];
    //sounds 
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBuble(index);
        });
    });
    const createBuble = (index) => {
        const buble = document.createElement('div');
        visual.appendChild(buble);
        buble.style.backgroundColor = colors[index];
        buble.style.animation = 'jump 1s ease';

    };

});