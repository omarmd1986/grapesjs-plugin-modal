import grapesjs from 'grapesjs';
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
    
});
