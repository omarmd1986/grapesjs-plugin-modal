var Util = function () {};

Util.prototype.getDocument = function () {
    var iframes = document.querySelectorAll("iframe.gjs-frame");
    if (iframes.length < 1) {
        return document;
    }

    return iframes[0].contentDocument || iframes[0].contentWindow.document;
};

Util.prototype.getElementById = function (id) {
    const doc = this.getDocument();
    if (!doc) {
        console.error(`Document not found`);
        return null;
    }
    return doc.getElementById(id);
};

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

Util.prototype.openModal = function (id) {
    let modal = this.getElementById(id);

    if (!modal) {
        console.error(`Modal ${id} not found.`);
        return;
    }
    
    var self = this;

    var fn = function (event) {
        console.log(this, event, id);
        if (event.target.id === id) {
            console.log('inside');
            // close the modal
            self.closeModal(id);
            
            this.removeEventListener('click', fn);
        }
    };

    modal.addEventListener('click', fn);

    modal.setAttribute('class', `modal fade in`);
    modal.setAttribute('style', `display: block;`);

    console.debug(`Modal ${id} pop ups`);
};

Util.prototype.closeModal = function (id) {
    console.log(`close modal`)
    let modal = this.getElementById(id);

    if (!modal) {
        console.error(`Modal ${id} not found.`);
        return;
    }

    modal.setAttribute('class', `modal fade`);
    modal.setAttribute('style', `display: none;`);
    
    console.debug(`Modal ${id} close ups`);
};

export let util = new Util();