const nav = document.querySelector('nav');
const toggleHamMenu = document.querySelector('.nav__menu');
toggleHamMenu.addEventListener('click', ()=>{
    nav.classList.toggle('active');
})

const dropdownLists = document.querySelectorAll(".nav__list li");

dropdownLists.forEach((list) => {
    list.addEventListener("click", () => {
        if (list.classList.contains("open")) {
            list.classList.remove("open");
        } else {
            dropdownLists.forEach((otherList) => {
                if (otherList !== list && otherList.classList.contains("open")) {
                    otherList.classList.remove("open");
                }
        });
        list.classList.add("open");
        }
    });
});