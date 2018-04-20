import {util as Util} from './util';

export default (editor, config = {}) => {
    var commands = editor.Commands;
    
    commands.add('open-modal', {
        run: function (editor, sender, params) {
            const id = params.id;
            if(!id){
                console.error('The ID is missing');
                return;
            }
            const isOpen = Util.isModalOpen(id);
            if( isOpen === true ){
                return true;
            }
            
            Util.openModal(id);
            
            return true;
        }
    });
    
    commands.add('close-modal', {
        run: function (editor, sender, params) {
            const id = params.id;
            if(!id){
                console.error('The ID is missing');
                return;
            }
            
            const isOpen = Util.isModalOpen(id);
            
            if( isOpen !== true ){
                return true;
            }
            
            Util.closeModal(id);
            
            return true;
        }
    });
}
