import {util as Util} from '../util';

export default (model) => {
    // HTML Element object
    var el = model.getEl();

    let dataToggle = (ele) => (true === ele.hasAttribute('data-toggle') && 'modal' === ele.getAttribute('data-toggle'));
    let dataTarget = (ele) => (true === ele.hasAttribute('data-target') && ele.getAttribute('data-target').startsWith('#'));

    var els = Util.parents(el);

    while (els.length) {
        el = els.shift();

        if (true === dataToggle(el) && true === dataTarget(el)) {
            // modal trigger found
            break;
        }
        // Clean the modal trigger
        el = null;
    }

    if (!el) {
        // modal trigger not found
        return;
    }

    let hasOpenModalCommand = (tbArray) => {
        // Search the open-modal-cmd
        const f = tbArray.find((i) => {
            return (i.attributes && i.attributes.id && 'open-modal-cmd' === i.attributes.id);
        });

        return (typeof f !== 'undefined');
    };

    let hasDeleteModalCommand = (tbArray) => {
        // Search the open-modal-cmd
        const f = tbArray.find((i) => {
            return (i.attributes && i.attributes.id && 'delete-modal-cmd' === i.attributes.id);
        });

        return (typeof f !== 'undefined');
    };

    // Is a modal trigger here.
    var tb = model.get('toolbar');

    if (false === hasOpenModalCommand(tb)) {
        const modalId = el.getAttribute('data-target');

        tb.push({
            attributes: {class: 'fa fa-external-link', id: 'open-modal-cmd', title: 'Open the link Modal'},
            command: () => {
                editor.runCommand('open-modal', {id: modalId});
            }
        });
    }

    if (false === hasDeleteModalCommand(tb)) {
        const modalId = el.getAttribute('data-target');

        tb.push({
            attributes: {class: 'fa fa-chain-broken', id: 'delete-modal-cmd', title: 'Unlink the Modal'},
            command: () => {
                if (editor.runCommand('delete-modal', {id: modalId, el: el})) {
                    // Remove the TB options
                    let tb = model.get('toolbar');
                    // Remove the last two cmds
                    tb.splice(-2, 2);
                    model.set('toolbar', tb);
                }
            }
        });
    }

    model.set('toolbar', tb);
}
