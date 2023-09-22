
window.addEventListener("load", function () {

    /*Scroll header*/ 
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("header").classList.add("scroll-color");
            document.querySelector(".heading").classList.add("heading-scroll");
            document.querySelector(".logo--img").style.width = "60px";
        } else {
            document.getElementById("header").classList.remove("scroll-color");
            document.querySelector(".logo--img").style.width = "102px";
            document.querySelector(".heading").classList.remove("heading-scroll");
        }
    }
    /*slider event*/
    const slider = document.getElementById("slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const sliderdots = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidersLength = sliderItems.length;
    let positionX = 0;
    let index = 0;

    nextBtn.addEventListener("click", function () {
        handleChangeSlide(1);


    });
    prevBtn.addEventListener("click", function () {
        handleChangeSlide(-1);


    });

    [...sliderdots].forEach((item) =>
        item.addEventListener("click", function (e) {
            [...sliderdots].forEach((el) => el.classList.remove("active"));
            e.target.classList.add("active");
            const sliderIndex = parseInt(e.target.dataset.index);
            index = sliderIndex;
            positionX = -1 * index * sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
        })

    );


    function handleChangeSlide(direction) {
        if (direction === 1) {
            if (index >= slidersLength - 1) {
                index = slidersLength - 1;
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index++;
        }

        else if (direction === -1) {
            if (index <= 0) {
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index--;
        }
        [...sliderdots].forEach((el) => el.classList.remove("active"));
        sliderdots[index].classList.add("active");
    }


    /*menu*/
    const menuFlters = document.querySelectorAll("#menu-flters li");
    const menuRes = document.querySelectorAll(".menu-restaurant");

    [...menuFlters].forEach((fl) => fl.addEventListener("click", function (element) {
        [...menuFlters].forEach((el) => el.classList.remove("active"));
        element.target.classList.add("active");

        let data = element.target.dataset.filter;

        [...menuRes].forEach((function (di) {
            let dataName = di.dataset.name;
            if (data === dataName || data === 'All') {

                di.style.display = 'block';
                di.style.animation = 'fadeIn ease-in-out 1s';
            }
            else {
                di.style.display = 'none';
            }
        }))

    })
    );



});




