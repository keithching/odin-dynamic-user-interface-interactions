const createDropdownList = () => {

    // DOM creation
    const container = document.querySelector('.container');

    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');
    const timeInterval = document.createElement('p');
    timeInterval.textContent = 'time interval';
    const dropdownitems = document.createElement('ul');
    dropdownitems.classList.add('dropdownitems');
    const li1 = document.createElement('li');
    li1.textContent = 'Item A';
    const li2 = document.createElement('li');
    li2.textContent = 'Item B';    
    const li3 = document.createElement('li');
    li3.textContent = 'Item C';

    dropdownitems.appendChild(li1);
    dropdownitems.appendChild(li2);   
    dropdownitems.appendChild(li3);

    dropdown.appendChild(timeInterval);
    dropdown.appendChild(dropdownitems);

    container.appendChild(dropdown);

    // application logic
    const tab = document.querySelector('.dropdown > p');
    const list = document.querySelector('.dropdown > ul');
    let isClicked = false;
    
    tab.addEventListener('click', () => {
    
        if (!isClicked) {
    
            let i = 0;
            let interval = setInterval(() => {
                list.children[i].classList.add('visible');
                i++;

                if (i == list.children.length) {
                    clearInterval(interval);
                }
            }, 50); // time interval
    
            isClicked = true;

        } else {
    
            let i = 0;
            let interval = setInterval(() => {
                list.children[list.children.length - i - 1].classList.remove('visible');
                i++;

                if (i == list.children.length) {
                    clearInterval(interval);
                }
            }, 50); // time interval

            isClicked = false;
        }
    
    });
    
};

export {
    createDropdownList
};