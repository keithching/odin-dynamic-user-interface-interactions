import './style.css';
import { createDropdownList } from './dropdown';
import { createMobileMenu } from './mobile-menu';
import { createImageSlider } from './image-slider';


const navbar = document.querySelector('.navbar ul');
navbar.addEventListener('click', (e) => {

    // return if click not on the list items
    if (e.target.nodeName == 'UL') {
        return;
    }

    // clear font highlight at navbar
    for (let i = 0; i < navbar.children.length; i++) {
        navbar.children[i].classList.remove('current');
    }

    // clear container DOM
    const container = document.querySelector('.container');
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }


    // add highlight to the current selected item
    const dropdownId = 'dropdown-id';
    const mobileMenuId = 'mobile-menu-id';
    const imageSliderId = 'image-slider-id';

    if (e.target.id == dropdownId) {
        createDropdownList();
        document.querySelector(`#${dropdownId}`).classList.add('current');
    } else if (e.target.id == mobileMenuId) {
        createMobileMenu();
        document.querySelector(`#${mobileMenuId}`).classList.add('current');
    } else if (e.target.id == imageSliderId) {
        createImageSlider();  
        document.querySelector(`#${imageSliderId}`).classList.add('current');
    }

});




