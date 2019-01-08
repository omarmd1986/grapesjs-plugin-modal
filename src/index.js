import grapesjs from 'grapesjs';
import {util as Util} from './util';
import loadComponents from './components';
import loadCommands from './commands';
import loadBlocks from './blocks';
import addOpenCommand from './functions/addOpenCommand';
import createModalCommand from './functions/createModalCommand';
import {style, modal, jquery, bootstrap} from './consts';

export default grapesjs.plugins.add('gjs-modal', (editor, opts = {}) => {
    const options = {...{
                category: `Advanced`,

                modalStyle: `<style>${style}</style>`,
                
                includeExternalLinks: true,

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

    editor.on('component:selected', m => addOpenCommand(editor, m));
    
    editor.on('component:selected', m => createModalCommand(editor, m));
});
