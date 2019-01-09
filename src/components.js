import loadModal from './components/modal';
import loadModalModal from './components/modalModal';

export default (editor, config = {}) => {
    /*
     * Modal button
     */
    loadModal(editor, config);

    /**
     * Modal modal component
     */
    loadModalModal(editor, config);
}
