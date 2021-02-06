console.log('Javascript started');

window.addEventListener('DOMContentLoaded', (event) => {

    console.log(this);



    
});

const toggleMenu = document.getElementById('toggle-menu-btn');

console.log(toggleMenu);
console.log('DOM is Loaded.');

toggleMenu.addEventListener('click', function (event) {
        console.log(this);
        console.log('clicked');

        const targetMenu = document.getElementById("navbar-menu");

        if (targetMenu.style.display === "block") {
            
            targetMenu.style.display = "none";
            targetMenu.style.height = "auto" ;
        } else {
            targetMenu.style.display = "block";
            targetMenu.style.height = 1 ;
            targetMenu.style.transition = "height 2s";
        }

    });
    console.log('End DOM is Loaded.');
console.log('End of Script');