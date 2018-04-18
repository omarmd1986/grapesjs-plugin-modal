import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';
import {script, style} from './consts';

export default grapesjs.plugins.add('gjs-modal', (editor, opts = {}) => {
    const options = {...{
                category: `Advanced`,

                modalScript: `${script}`,

                modalStyle: `<style>${style}</style>`
        }, ...opts};

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);

});
