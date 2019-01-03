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
    
    commands.add('delete-modal', {
        run: function (editor, sender, params) {
            const id = params.id || null;
            if (!id) {
                console.error('The ID is missing');
                return;
            }
            
            var ele = params.el || null;
            
            var modal = Util.getElementById(id);
            
            if (!modal) {
                console.error(`Modal ${id} not found`);
                return;
            }
            
            // Un select all
            editor.runCommand('un-select-all');
            // Select the hide modal
            editor.select(modal);
            // remove the selected comp
            editor.runCommand('tlb-delete');
            // Un select all
            editor.runCommand('un-select-all');
            
            ele && Util.removeAttr(ele, 'data-target');
            ele && Util.removeAttr(ele, 'data-toggle');
            
            return true;
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
