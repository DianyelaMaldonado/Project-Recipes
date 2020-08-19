import { sections } from '../views/sections.js';
import { buildHome } from '../main.js';

function clickSections() {
    let titleMenus = document.querySelectorAll('ul.clickMenu li a');
    titleMenus.forEach(function (viewMenus) {
        viewMenus.addEventListener('click', function (clickedMenu) {
            clickedMenu.preventDefault();
            let userClickMenu = clickedMenu.target.dataset.nav;
            if (userClickMenu === "/") {
                document.getElementById('mainContent').style.display = 'block';
                window.history.pushState('/', '/', '/')

            }
            else if (userClickMenu === "/life-tips") {
                sections(15);
                window.history.pushState('life-tips', 'life-tips', '/life-tips')
                document.getElementById('root').style.display = 'block';
            }
            else if (userClickMenu === "/en123") {
                sections(1);
                window.history.pushState('en123', 'en123', '/en123')
                document.getElementById('root').style.display = 'block';
            }
            else if (userClickMenu === "/healthy-trial") {
                sections(13);
                window.history.pushState('healthy-trial', 'healthy-trial', '/healthy-trial')
                document.getElementById('root').style.display = 'block';
            }
            else if (userClickMenu === "/postres-y-bebidas") {
                sections(14);
                window.history.pushState('postres-y-bebidas', 'postres-y-bebidas', '/postres-y-bebidas')
                document.getElementById('root').style.display = 'block';
            }
            else if (userClickMenu === "/slow-food") {
                sections(11);
                window.history.pushState('slow-food', 'slow-food', '/slow-food')
                document.getElementById('root').style.display = 'block';
            }

        })
    })
}

export { clickSections }