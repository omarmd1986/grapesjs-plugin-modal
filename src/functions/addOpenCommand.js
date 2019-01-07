import {util as Util} from '../util';

export default (editor, model) => {
    // HTML Element object
    var el = model.getEl();

    el = Util.modalTrigger(el);

    if (!el) {
        // modal trigger not found
        return;
    }
    // the editor is showing an error, the editor.getConfig is undefined.
    // find the way to get the editor... or pass it as a parameter.
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

    let removeModalsCommands = (tbArray) => {
        let openIndex = tbArray.findIndex(t => t.attributes && t.attributes.id && 'open-modal-cmd' === t.attributes.id);
        openIndex >= 0 && tbArray.splice(openIndex, 1);

        let unlinkIndex = tbArray.findIndex(t => t.attributes && t.attributes.id && 'delete-modal-cmd' === t.attributes.id);
        unlinkIndex >= 0 && tbArray.splice(unlinkIndex, 1);
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
                    removeModalsCommands(tb);
                    // Set the new toolbar.
                    model.set('toolbar', tb);
                }
            }
        });
    }

    model.set('toolbar', tb);
}
