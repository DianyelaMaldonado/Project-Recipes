import { sections } from '../views/sections.js'

function clickSections() {
    console.log("el click")
    let titleMenus = document.querySelectorAll('ul.clickMenu li a');
    titleMenus.forEach(function (viewMenus) {
        viewMenus.addEventListener('click', function (clickedMenu) {
            clickedMenu.preventDefault();
            let userClickMenu = clickedMenu.target.dataset.nav;
            if (userClickMenu === "/") {
                sections();
                window.history.pushState('healthy', 'healthy', '/healthy')
            }
            else if (userClickMenu === "/life-tips") {
                sections(15);
                window.history.pushState('life-tips', 'life-tips', '/life-tips')
            }
            else if (userClickMenu === "/en123") {
                sections(1);
                window.history.pushState('en123', 'en123', '/en123')
            }
            else if (userClickMenu === "/healthy-trial") {
                sections(13);
                window.history.pushState('healthy-trial', 'healthy-trial', '/healthy-trial')
            }
            else if (userClickMenu === "/postres-y-bebidas") {
                sections(14);
                window.history.pushState('postres-y-bebidas', 'postres-y-bebidas', '/postres-y-bebidas')
            }
            else if (userClickMenu === "/slow-food") {
                sections(11);
                window.history.pushState('slow-food', 'slow-food', '/slow-food')
            }

        })
    })
}

export { clickSections }