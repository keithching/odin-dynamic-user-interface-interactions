const createMobileMenu = () => {

    // DOM creation
    const container = document.querySelector('.container');

    // tabs type
    const tabMenu = document.createElement('ul');
    tabMenu.classList.add('tabMenu');

    const tabItem1 = document.createElement('li');
    tabItem1.classList.add('tabItem');
    const tabItem1id = 'tabItem1-id';
    tabItem1.id = tabItem1id;
    tabItem1.textContent = 'Item 1';

    const tabItem2 = document.createElement('li');
    tabItem2.classList.add('tabItem');
    const tabItem2id = 'tabItem2-id';
    tabItem2.id = tabItem2id;
    tabItem2.textContent = 'Item 2';

    const tabItem3 = document.createElement('li');
    tabItem3.classList.add('tabItem');
    const tabItem3id = 'tabItem3-id';
    tabItem3.id = tabItem3id;
    tabItem3.textContent = 'Item 3';

    const tabItem4 = document.createElement('li');
    tabItem4.classList.add('tabItem');
    const tabItem4id = 'tabItem4-id';
    tabItem4.id = tabItem4id;
    tabItem4.textContent = 'Item 4';

    tabMenu.appendChild(tabItem1);
    tabMenu.appendChild(tabItem2);
    tabMenu.appendChild(tabItem3);
    tabMenu.appendChild(tabItem4);

    container.appendChild(tabMenu);

    tabMenu.addEventListener('click', (e) => {

        // return if click not on the list items
        if (e.target.nodeName == 'UL') {
            return;
        }

        for (let i = 0; i < tabMenu.children.length; i++) {
            tabMenu.children[i].classList.remove('tabItem-current');
        }

        if (e.target.id == tabItem1id) {
            document.querySelector(`#${tabItem1id}`).classList.add('tabItem-current');
        } else if (e.target.id == tabItem2id) {
            document.querySelector(`#${tabItem2id}`).classList.add('tabItem-current');
        }  else if (e.target.id == tabItem3id) {
            document.querySelector(`#${tabItem3id}`).classList.add('tabItem-current');
        }  else if (e.target.id == tabItem4id) {
            document.querySelector(`#${tabItem4id}`).classList.add('tabItem-current');
        } 


    });



};

export {
    createMobileMenu
};
