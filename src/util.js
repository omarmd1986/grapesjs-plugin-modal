var Util = function () {};

/**
 * Return the iframe's documents
 * @returns {document}
 */
Util.prototype.getDocument = function () {
    var iframes = document.querySelectorAll("iframe.gjs-frame");
    if (iframes.length < 1) {
        return document;
    }

    return iframes[0].contentDocument || iframes[0].contentWindow.document;
};

/**
 * Return the element from the iframe's documents
 * @param {string} id
 * @returns {NodeElement}
 */
Util.prototype.getElementById = function (id) {
    const doc = this.getDocument();
    if (!doc) {
        console.error(`Document not found`);
        return null;
    }
    return doc.getElementById(id);
};

/**
 * Create an element from str
 * @param {string} html
 * @returns {NodeElement}
 */
Util.prototype.createElement = function (html) {
    let template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
};

/**
 * 
 * @param {NodeElement} nodeElement
 * @returns {string}
 */
Util.prototype.toString = function (nodeElement) {
    let container = document.createElement('div');
    container.appendChild(nodeElement);
    return container.innerHTML;
};


/*Modals helpers*/

Util.prototype.isModalOpen = function (id) {
    const doc = this.getDocument();
    if (!doc) {
        console.error(`Document not found`);
        return null;
    }

    const modal = doc.getElementById(id);

    if (!modal) {
        console.error(`Modal ${id} not found`);
        return null;
    }

    return (modal.classList.contains('in') && modal.style.display === 'block');
};

Util.prototype.cleanId = function (id) {
    if (id.charAt(0) === '#') {
        // Remove the # at the beginning
        id = id.substr(1);
    }
    return id;
};

Util.prototype.openModal = function (id) {
    id = this.cleanId(id);

    let modal = this.getElementById(id);

    if (!modal) {
        console.error(`Modal ${id} not found.`);
        return;
    }

    var self = this;

    var form = modal.getElementsByTagName('form')[0];

    if (form) {
        // Prevent the modal closes up
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        });
    }

    var fn = function (event) {
        if (event.target.id === id) {
            // close the modal
            self.closeModal(id);
            this.removeEventListener('click', fn);
        }
    };

    modal.addEventListener('click', fn);
    modal.setAttribute('class', `modal`);
    modal.setAttribute('style', `display: block;`);

    console.debug(`Modal ${id} pop ups`);
};

Util.prototype.closeModal = function (id) {
    id = this.cleanId(id);

    let modal = this.getElementById(id);

    if (!modal) {
        console.error(`Modal ${id} not found.`);
        return;
    }

    modal.setAttribute('class', `modal fade`);
    modal.setAttribute('style', `display: none;`);

    console.debug(`Modal ${id} close ups`);
};

/**
 * Return all the parents way up
 * @param {HTMLElement} ele
 * @returns {Array|Object.prototype.parents.els|Util.prototype.parents.els}
 */
Util.prototype.parents = (ele) => {
    var els = [];
    while (ele && ele instanceof HTMLElement) {
        els.push(ele);
        ele = ele.parentNode || null;
    }
    return els;
};

export let util = new Util();