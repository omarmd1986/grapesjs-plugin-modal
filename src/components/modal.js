import {util as Util} from '../util';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    let traits = defaultModel.prototype.defaults.traits.slice(0);
    traits.push({
        type: 'select',
        label: 'Type',
        name: 'btnStyle',
        changeProp: 1,
        options: [
            {value: 'btn-primary', name: 'Primary'},
            {value: 'btn-success', name: 'Success'},
            {value: 'btn-info', name: 'Info'},
            {value: 'btn-warning', name: 'Warning'},
            {value: 'btn-danger', name: 'Danger'},
            {value: 'btn-default', name: 'Default'}
        ]
    });
    traits.push({
        type: 'select',
        label: 'Size',
        name: 'btnSize',
        changeProp: 1,
        options: [
            {value: 'btn-normal', name: 'Normal'},
            {value: 'btn-lg', name: 'Large'},
            {value: 'btn-sm', name: 'Medium'},
            {value: 'btn-xs', name: 'Small'}
        ]
    });

    var model = defaultModel.extend({

        initToolbar(...args) {
            defaultModel.prototype.initToolbar.apply(this, args);

            var self = this;

            var el = self.getEl();

            if (!el) {
                return;
            }

            let hasOpenModalCommand = (tbArray) => {
                // Search the open-modal-cmd
                const f = tbArray.find((i) => {
                    return (i.attributes && i.attributes.id && 'open-modal-cmd' === i.attributes.id);
                });

                return (typeof f !== 'undefined');
            };

            var tb = this.get('toolbar');

            if (true === hasOpenModalCommand(tb)) {
                return;
            }

            const id = el.getAttribute('id');
            const modalId = `${id}-modal`;

            tb.push({
                attributes: {class: 'fa fa-external-link', id: 'open-modal-cmd', title: 'Open the link Modal'},
                command: () => {
                    editor.runCommand('open-modal', {id: modalId});
                }
            });

            this.set('toolbar', tb);
        },

        defaults: Object.assign({}, defaultModel.prototype.defaults, {
            // Can't drop other elements inside it
            droppable: false,
            resizable: {
                step: 0.07,
                
                // Unit used for height resizing
                unitHeight: 'px',

                // Unit used for width resizing
                unitWidth: '%',

                currentUnit: 0,

                // Minimum dimension
                minDim: 10,

                // Maximum dimension
                maxDim: 100,

                // Handlers
                tl: 0, // Top left
                tc: 1, // Top center
                tr: 0, // Top right
                cl: 1, // Center left
                cr: 1, // Center right
                bl: 0, // Bottom left
                bc: 1, // Bottom center
                br: 0 // Bottom right
            },

            type: 'modal',
            tagName: 'modal',

            traits: traits,

            btnStyle: 'btn-primary',
            btnSize: 'btn-lg',

            /**
             * Just to create an ID.
             */
            script: () => console.log('Modal button created')
        })
    }, {
        isComponent(el) {
            var result = '';

            if (el.tagName === 'MODAL') {
                result = {type: 'modal'};
            }

            return result;
        }
    });

    var view = defaultView.extend({

        events: {
            click: 'click'
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
        },

        init: function () {
            console.log('init')
            let model = this.model;

            this.listenTo(model, 'change:btnStyle change:btnSize change:attributes', this.updateModal);
        },

        /**
         * Trigger when the render is completed
         */
        onRender() {
            // render the button and modal
            this.updateModal();

            // Add the view modal button to the toolbar.
            this.model.initToolbar();
        },

        updateModal: function () {
            const id = this.model.getId();

            if (!id) {
                return;
            }

            var model = this.model;
            var currentModal = null;
            var currentTrigger = null;
            try {
                currentTrigger = model.get('components').at(0);
            } catch (e) {
                currentTrigger = null;
            }
            try {
                currentModal = model.get('components').at(1);
            } catch (e) {
                currentModal = null;
            }

            const style = this.model.get('btnStyle');
            const size = this.model.get('btnSize');

            const modalId = `${id}-modal`;
            const triggerId = `${id}-trigger`;

            // Append new components
            const _class = `btn ${style} ${size}`;
            if (currentTrigger) {
                var _attr = currentTrigger.get('attributes');
                _attr.id = triggerId;
                _attr['data-toggle'] = `modal`;
                _attr['data-target'] = `#${modalId}`;
                currentTrigger.set('attributes', _attr);

                currentTrigger.setClass(_class);

                model.components(currentTrigger);
            } else {
                const _class = `btn ${style} ${size}`;
                model.components(`<a id="${triggerId}" class="${_class}" data-toggle="modal" data-target="#${modalId}">Launch modal</a>`);
            }

            if (currentModal) {
                model.append(currentModal);
            } else {
                var _modal = Util.createElement(config.modalHtml);

                if (_modal) {
                    _modal.setAttribute('id', `${modalId}`);
                    _modal = Util.toString(_modal);
                    model.append(_modal);
                }
            }
        }
    });

    domc.addType('modal', {
        // Defined the model
        model: model,

        // Defined the view
        view: view
    });
}
