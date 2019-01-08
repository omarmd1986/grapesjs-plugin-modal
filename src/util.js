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
    id = this.cleanId(id);
    const doc = this.getDocument();
    if (!doc) {
        console.error(`Document not found`);
        return null;
    }
    return doc.getElementById(id);
};

Util.prototype.removeAttr = function (ele, attr) {
    ele && ele.removeAttribute(attr);
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
 * @param {type} id
 * @returns {unresolved}
 */
Util.prototype.deleteElementById = function (id) {
    id = this.cleanId(id);
    var elem = this.getElementById(id);
    console.log(elem)
    if (elem) {
        return elem.parentNode.removeChild(elem);
    }
    return null;
}

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
    // The new version of grapesJs, cause internal elements become unremovable
    modal.removeAttribute('tabindex');

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

Util.prototype.modalTrigger = function (el) {
    let dataToggle = (ele) => (true === ele.hasAttribute('data-toggle') && 'modal' === ele.getAttribute('data-toggle'));
    let dataTarget = (ele) => (true === ele.hasAttribute('data-target') && ele.getAttribute('data-target').startsWith('#'));

    var els = this.parents(el);

    while (els.length) {
        el = els.shift();

        if (true === dataToggle(el) && true === dataTarget(el)) {
            // modal trigger found
            break;
        }
        // Clean the modal trigger
        el = null;
    }

    return el;
};

/**
 * Return all the parents way up
 * @param {HTMLElement} ele
 * @returns {Array|Object.prototype.parents.els|Util.prototype.parents.els}
 */
Util.prototype.parents = function (ele) {
    var els = [];
    while (ele && ele instanceof HTMLElement) {
        els.push(ele);
        ele = ele.parentNode || null;
    }
    return els;
};

Util.prototype.test = function () {
    var forms = Array.from(this.getElementsByTagName('form'));
    // Form container
    var formContainer = forms.shift();
    for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', e => e.preventDefault());
    }
    var submits = Array.from(this.getElementsByTagName('button'));
    // Form container
    submits = submits.filter(s => s.getAttribute('type') === 'submit');
    var submit = submits.pop();
    if (submit && formContainer) {
        var _hiddenSubmit = document.createElement('button');
        _hiddenSubmit.setAttribute('type', 'submit');
        _hiddenSubmit.style.display = 'none';
        formContainer.prepend(_hiddenSubmit);

        submit.addEventListener('click', function (e) {
            e.preventDefault();
            _hiddenSubmit.click();
        });
    }

    var includeExternalLinks = Boolean('{[ includeExternalLinks ]}');

    includeExternalLinks && (function (d, s, id) {
        var loadModal = function (d, sinbling, id) {
            if (d.getElementById(id) && typeof jQuery.fn.modal !== 'undefined') {
                return;
            }
            var js = d.createElement(s);
            js.id = id;
            js.src = '{[ bootstrapScript ]}';
            sinbling.parentNode.insertBefore(js, sinbling);
        };

        var jqueryNode = d.getElementById(id);
        if (!jqueryNode && typeof jQuery === 'undefined') {
            var js, fjs = d.getElementsByTagName(s)[0];
            js = d.createElement(s);
            js.id = 'grapesjs-modal-jquery';
            js.src = '{[ jqueryScript ]}';
            js.onload = function () {
                loadModal(d, js, 'grapesjs-modal-bootstrap');
            };
            fjs.parentNode.insertBefore(js, fjs);
        }

        if (typeof jQuery !== 'undefined') {
            loadModal(d, d.body, 'grapesjs-modal-bootstrap')
        }
    }(document, 'script', 'grapesjs-modal-jquery'));
};

export let util = new Util();