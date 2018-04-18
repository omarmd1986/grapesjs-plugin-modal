export default (editor, config = {}) => {

    const bm = editor.BlockManager;

    bm.add('modal', {

        label: 'Modal',
        content: `${config.modalStyle}<a class="btn" data-toggle="modal">Launch modal</a>`,
        category: config.category,
        attributes: {
            class: 'gjs-fonts gjs-f-h1p'
        }
    });
}
