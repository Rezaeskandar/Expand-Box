let container = document.getElementById('container');
let button = document.getElementById('show-more');

button.onclick = () => {
    if (container.className == "") {
        /* expand the boc */

        container.className = 'open';
        button.innerHTML = 'Collapse now';
    }
    else {
        /* collaps the box */
        container.className = "";
        button.innerHTML = 'Expand'
    }
}