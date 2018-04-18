import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('gjs-modal', (editor, opts = {}) => {
    const options = {...{
                category: `Avance`
        }, ...opts};

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);

});
