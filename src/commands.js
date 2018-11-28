import {util as Util} from './util';

export default (editor, config = {}) => {
    var commands = editor.Commands;

    commands.add('un-select-all', {
        run: function (editor, sender, params) {
            let selected = editor.getSelectedAll();
            console.log('un select all', selected)
            selected.forEach((m) => editor.selectRemove(m));
        }
    });

    commands.add('open-modal', {
        run: function (editor, sender, params) {
            const id = params.id;
            if (!id) {
                console.error('The ID is missing');
                return;
            }
            const isOpen = Util.isModalOpen(id);
            if (isOpen === true) {
                return true;
            }

            Util.openModal(id);

            editor.runCommand('un-select-all');

            return true;
        }
    });

    commands.add('close-modal', {
        run: function (editor, sender, params) {
            const id = params.id;

            if (!id) {
                console.error('The ID is missing');
                return;
            }

            const isOpen = Util.isModalOpen(id);

            if (isOpen !== true) {
                return true;
            }

            Util.closeModal(id);

            editor.runCommand('un-select-all');

            return true;
        }
    });
}
