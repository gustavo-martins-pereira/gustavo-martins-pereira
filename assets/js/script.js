(function() {
    {
        // Replace the class "no-js" to "js"
        let $html = document.querySelector("html");

        $html.classList.remove("no-js");
        $html.classList.add("js");
    }

    {
        // Hamburguer Menu Logic
        // Variables of the Elements
        let $menu = document.querySelector("[data-element-id='menu']");
        let $hamburguer_menu = document.querySelector("[data-element-id='hamburguerMenuIcon']");
        let $nav_menu = document.querySelector("[data-element-id='nav_menu']");

        // Auxiliary Variables
        let menuIsActive = false;

        $hamburguer_menu.addEventListener("click", () => {
            menuIsActive = !menuIsActive;
            
            // Change the style sheet according the status of menu
            if(menuIsActive) {
                $menu.style.backgroundImage = "var(--menu-background)";
                $menu.style.boxShadow = "-2px 2px 4px rgba(0, 0, 0, .75)";
                
                $hamburguer_menu.src = "assets/images/icons/Close.svg";
                
                $nav_menu.style.height = "auto";
            } else {
                $menu.style.backgroundImage = "none";
                $menu.style.boxShadow = "none";
                
                $hamburguer_menu.src = "assets/images/icons/Hamburguer Menu.svg";

                $nav_menu.style.height = 0;
            }
        });

        document.body.onresize = function() {
            // Reset the styles when the window's client is better than 1280px
            if(document.body.clientWidth >= 1263) {
                $menu.removeAttribute("style");
                $hamburguer_menu.src = "assets/images/icons/Hamburguer Menu.svg";
                $nav_menu.removeAttribute("style");

                menuIsActive = false;
            }
        }
    }
}());