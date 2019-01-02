export default (editor, config = {}) => {

    const bm = editor.BlockManager;

    bm.add('modal', {
        label: 'Modal with trigger',
        content: `${config.modalStyle}<modal data-toggle="modal"></modal>`,
        category: config.category,
        attributes: {
            class: 'fa fa-keyboard-o'
        }
    });
}
