export default (editor, config = {}) => {

    const bm = editor.BlockManager;

    bm.add('modal', {

        label: 'Modal',
        content: `${config.modalStyle}<modal data-toggle="modal"></modal>`,
        category: config.category,
        attributes: {
            class: 'gjs-fonts gjs-f-h1p'
        }
    });
}
