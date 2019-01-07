import {util as Util} from '../util';

export default (editor, model) => {
    // HTML Element object
    var el = model.getEl();

    const c = editor.getConfig();

    // The body dont need to create a modal on it.
    // Inside de modal dont need to create a new modal
    if ((c && !c.allowScripts) || (model.is && model.is('modal')) || (model.is && model.is('wrapper'))) {
        console.warn(`The selected model cannot support the MODAL option or the editor's allowScripts option is disabled`);
        // Dont need to create a new modal
        return;
    }

    el = Util.modalTrigger(el);

    let hasCreateModalCommand = (tbArray) => {
        // Search the create-modal-cmd
        const f = tbArray.find((i) => {
            return (i.attributes && i.attributes.id && 'create-modal-cmd' === i.attributes.id);
        });

        return (typeof f !== 'undefined');
    };

    let removeCreateModalCommand = (tbArray) => {
        // Search the create-modal-cmd
        const index = tbArray.findIndex(t => t.attributes && t.attributes.id && 'create-modal-cmd' === t.attributes.id);

        index >= 0 && tbArray.splice(index, 1);
    };

    // Is a modal trigger here.
    var tb = model.get('toolbar');

    if (!el && false === hasCreateModalCommand(tb)) {
        tb.push({
            attributes: {class: 'fa fa-plus', id: 'create-modal-cmd', title: 'The element will trigger a modal'},
            command: () => {
                editor.runCommand('create-modal', {model: model});
            }
        });
    }

    if (el) {
        removeCreateModalCommand(tb);
    }

    model.set('toolbar', tb);
}
