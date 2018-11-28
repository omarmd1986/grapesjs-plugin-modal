import grapesjs from 'grapesjs';
import {util as Util} from './util';
import loadComponents from './components';
import loadCommands from './commands';
import loadBlocks from './blocks';
import {style, modal, jquery, bootstrap, micromodal} from './consts';

export default grapesjs.plugins.add('gjs-modal', (editor, opts = {}) => {
    const options = {...{
                category: `Advanced`,

                modalStyle: `<style>${style}</style>`,

                modalHtml: `${modal}`,

                modalJquery: `${jquery}`,

                modalBootstrap: `${bootstrap}`
        }, ...opts};

    // Add components
    loadCommands(editor, options);

    // Add components
    loadComponents(editor, options);

    // Add blocks
    loadBlocks(editor, options);

    editor.on('component:selected', (model) => {
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

        // Is a modal trigger here.
        var tb = model.get('toolbar');

        if (true === hasOpenModalCommand(tb)) {
            // The model already has the toolbar command
            return;
        }

        const modalId = el.getAttribute('data-target');

        tb.push({
            attributes: {class: 'fa fa-external-link', id: 'open-modal-cmd'},
            command: () => {
                editor.runCommand('open-modal', {id: modalId});
            }
        });

        model.set('toolbar', tb);
    })
});
