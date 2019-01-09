import {util as Util} from '../util';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    var model = defaultModel.extend({
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
            // Can't drop other elements inside it
            droppable: false,
            
            type: 'modalmodal',
            tagName: 'modal',

            traits: [],

            'bootstrapScript': config.modalBootstrap,
            'jqueryScript': config.modalJquery,
            'includeExternalLinks': config.includeExternalLinks,
            
            script: Util.test
        })
    }, {
        isComponent(el) {
            var result = '';

            if (el.tagName === 'DIV' && el.className.includes('modal') && el.getAttribute && el.getAttribute('data-type') === 'grapesjs-modal') {
                result = {type: 'modalmodal'};
            }

            return result;
        }
    });

    var view = defaultView.extend({

        events: {
//            click: 'click'
        },

        click: function (event) {
            var self = this;

            var el = self.el;
            const id = el.getAttribute('id');

            if (!id) {
                return;
            }
            const modalId = `${id}-modal`;
            const triggerId = `${id}-trigger`;

            if (event.target.id === id || event.target.id === triggerId) {
                event.preventDefault();
                event.stopPropagation();

                editor.select(self.model);
            }
        }
    });

    domc.addType('modalmodal', {
        // Defined the model
        model: model,

        // Defined the view
        view: view
    });
}
